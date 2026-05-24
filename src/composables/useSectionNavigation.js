import { ref } from 'vue'

export function useSectionNavigation(sectionIds) {
  const isScrolled = ref(false)
  const activeSection = ref(sectionIds[0] || '')
  let isScrolling = false
  let ticking = false

  const handleScroll = () => {
    if (isScrolling || ticking) return

    ticking = true
    requestAnimationFrame(() => {
      const currentScrollTop = window.scrollY
      const scrollPosition = currentScrollTop + 150

      isScrolled.value = currentScrollTop > 50

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section && section.offsetTop <= scrollPosition) {
          activeSection.value = sectionIds[i]
          break
        }
      }

      ticking = false
    })
  }

  const scrollTo = (sectionId, event) => {
    if (event) {
      event.preventDefault()
    }

    activeSection.value = sectionId

    const element = document.getElementById(sectionId)
    if (!element || isScrolling) return

    isScrolling = true

    const scrollMarginTop = Number.parseFloat(window.getComputedStyle(element).scrollMarginTop) || 20
    const targetPosition = Math.max(element.offsetTop - scrollMarginTop, 0)
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    if (distance === 0) {
      isScrolling = false
      return
    }

    const duration = Math.min(Math.abs(distance) * 0.5, 800)
    let start = null

    const animateScroll = (currentTime) => {
      if (start === null) start = currentTime

      const timeElapsed = currentTime - start
      const progress = Math.min(timeElapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)

      window.scrollTo({
        top: startPosition + distance * ease,
        behavior: 'auto'
      })

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
        return
      }

      isScrolling = false
      window.scrollTo({ top: targetPosition, behavior: 'auto' })
    }

    requestAnimationFrame(animateScroll)
  }

  return {
    isScrolled,
    activeSection,
    handleScroll,
    scrollTo
  }
}
