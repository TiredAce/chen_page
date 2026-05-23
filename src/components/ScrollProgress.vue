<template>
  <div class="scroll-progress" aria-hidden="true">
    <div class="scroll-progress-bar" :style="{ transform: `scaleX(${progress})` }"></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)
let ticking = false

const updateProgress = () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0
  ticking = false
}

const handleScroll = () => {
  if (ticking) return

  ticking = true
  requestAnimationFrame(updateProgress)
}

onMounted(() => {
  updateProgress()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
</script>

<style scoped>
.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 2200;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.05);
}

.scroll-progress-bar {
  width: 100%;
  height: 100%;
  transform-origin: left center;
  background: linear-gradient(90deg, #38ef7d, #667eea, #ec4899);
  box-shadow: 0 0 18px rgba(102, 126, 234, 0.85);
}
</style>
