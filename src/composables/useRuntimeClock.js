import { ref } from 'vue'

const ZERO_RUNTIME = {
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
}

const RUNTIME_KEYS = Object.keys(ZERO_RUNTIME)
const FLIP_DURATION = 600

export function useRuntimeClock(startAt = '2025-09-01T00:00:00') {
  const runtime = ref({ ...ZERO_RUNTIME })
  const prevRuntime = ref({ ...ZERO_RUNTIME })
  const flipStates = ref(
    RUNTIME_KEYS.reduce((states, key) => {
      states[key] = false
      return states
    }, {})
  )
  const startTime = new Date(startAt).getTime()
  let runtimeInterval = null

  const triggerFlip = (key, nextValue) => {
    if (flipStates.value[key]) return

    flipStates.value[key] = true
    setTimeout(() => {
      flipStates.value[key] = false
      prevRuntime.value[key] = nextValue
    }, FLIP_DURATION)
  }

  const updateRuntime = () => {
    const now = Date.now()
    const diff = now - startTime

    if (diff < 0) {
      runtime.value = { ...ZERO_RUNTIME }
      return
    }

    const totalSeconds = Math.floor(diff / 1000)
    const seconds = totalSeconds % 60
    const totalMinutes = Math.floor(totalSeconds / 60)
    const minutes = totalMinutes % 60
    const totalHours = Math.floor(totalMinutes / 60)
    const hours = totalHours % 24

    const startDate = new Date(startAt)
    const currentDate = new Date(now)

    let years = currentDate.getFullYear() - startDate.getFullYear()
    let months = currentDate.getMonth() - startDate.getMonth()
    let days = currentDate.getDate() - startDate.getDate()

    if (days < 0) {
      months--
      const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)
      days += lastMonth.getDate()
    }

    if (months < 0) {
      years--
      months += 12
    }

    const oldValues = { ...runtime.value }
    const nextRuntime = {
      years,
      months,
      days,
      hours,
      minutes,
      seconds
    }

    runtime.value = nextRuntime

    RUNTIME_KEYS.forEach((key) => {
      if (oldValues[key] !== nextRuntime[key]) {
        triggerFlip(key, nextRuntime[key])
      }
    })
  }

  const startRuntimeClock = () => {
    updateRuntime()
    prevRuntime.value = { ...runtime.value }
    runtimeInterval = setInterval(updateRuntime, 1000)
  }

  const stopRuntimeClock = () => {
    if (runtimeInterval) {
      clearInterval(runtimeInterval)
      runtimeInterval = null
    }
  }

  return {
    runtime,
    prevRuntime,
    flipStates,
    startRuntimeClock,
    stopRuntimeClock
  }
}
