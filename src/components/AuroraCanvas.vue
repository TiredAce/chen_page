<template>
  <canvas ref="canvasRef" class="aurora-canvas" aria-hidden="true"></canvas>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvasRef = ref(null)
const pointer = { x: 0, y: 0, active: false }
let ctx
let particles = []
let frameId = 0
let width = 0
let height = 0
let pixelRatio = 1

const palette = ['0, 243, 255', '255, 58, 167', '108, 91, 255', '195, 244, 255']

const createParticle = () => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.35,
  vy: (Math.random() - 0.5) * 0.35,
  size: Math.random() * 1.8 + 0.7,
  color: palette[Math.floor(Math.random() * palette.length)]
})

const resize = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
  width = window.innerWidth
  height = window.innerHeight
  canvas.width = width * pixelRatio
  canvas.height = height * pixelRatio
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  ctx = canvas.getContext('2d')
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

  const particleCount = Math.min(86, Math.max(42, Math.floor(width / 18)))
  particles = Array.from({ length: particleCount }, createParticle)
}

const drawConnection = (from, to, maxDistance) => {
  const dx = from.x - to.x
  const dy = from.y - to.y
  const distance = Math.hypot(dx, dy)
  if (distance > maxDistance) return

  const alpha = (1 - distance / maxDistance) * 0.16
  const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
  gradient.addColorStop(0, `rgba(${from.color}, ${alpha})`)
  gradient.addColorStop(1, `rgba(${to.color}, ${alpha})`)
  ctx.strokeStyle = gradient
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(from.x, from.y)
  ctx.lineTo(to.x, to.y)
  ctx.stroke()
}

const render = () => {
  if (!ctx) return

  ctx.clearRect(0, 0, width, height)
  ctx.globalCompositeOperation = 'lighter'

  particles.forEach((particle, index) => {
    if (pointer.active) {
      const dx = pointer.x - particle.x
      const dy = pointer.y - particle.y
      const distance = Math.hypot(dx, dy)
      if (distance < 180) {
        particle.vx -= (dx / distance) * 0.0042
        particle.vy -= (dy / distance) * 0.0042
      }
    }

    particle.x += particle.vx
    particle.y += particle.vy
    particle.vx *= 0.996
    particle.vy *= 0.996

    if (particle.x < -20) particle.x = width + 20
    if (particle.x > width + 20) particle.x = -20
    if (particle.y < -20) particle.y = height + 20
    if (particle.y > height + 20) particle.y = -20

    for (let i = index + 1; i < particles.length; i++) {
      drawConnection(particle, particles[i], 145)
    }

    if (pointer.active) {
      drawConnection(particle, pointer, 210)
    }

    const glow = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, particle.size * 12)
    glow.addColorStop(0, `rgba(${particle.color}, 0.72)`)
    glow.addColorStop(1, `rgba(${particle.color}, 0)`)
    ctx.fillStyle = glow
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size * 12, 0, Math.PI * 2)
    ctx.fill()
  })

  frameId = requestAnimationFrame(render)
}

const handlePointerMove = (event) => {
  pointer.x = event.clientX
  pointer.y = event.clientY
  pointer.active = true
}

const handlePointerLeave = () => {
  pointer.active = false
}

onMounted(() => {
  resize()
  render()
  window.addEventListener('resize', resize)
  window.addEventListener('pointermove', handlePointerMove)
  window.addEventListener('pointerleave', handlePointerLeave)
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  window.removeEventListener('resize', resize)
  window.removeEventListener('pointermove', handlePointerMove)
  window.removeEventListener('pointerleave', handlePointerLeave)
})
</script>

<style scoped>
.aurora-canvas {
  position: fixed;
  inset: 0;
  z-index: -2;
  pointer-events: none;
  opacity: 0.38;
}

@media (max-width: 768px) {
  .aurora-canvas {
    opacity: 0.24;
  }
}
</style>
