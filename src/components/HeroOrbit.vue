<template>
  <div class="hero-orbit" aria-hidden="true">
    <span
      v-for="item in orbitItems"
      :key="item"
      class="orbit-chip"
    >
      {{ item }}
    </span>
  </div>
</template>

<script setup>
const orbitItems = ['AI', 'Code', 'Optics', 'Ideas']
</script>

<style scoped>
.hero-orbit {
  position: absolute;
  inset: -42px;
  border: 1px solid rgba(102, 126, 234, 0.25);
  border-radius: 28px;
  animation: orbitFrame 14s linear infinite;
  pointer-events: none;
}

.hero-orbit::before,
.hero-orbit::after {
  content: '';
  position: absolute;
  inset: 26px;
  border: 1px dashed rgba(56, 239, 125, 0.25);
  border-radius: 24px;
  animation: orbitFrame 18s linear infinite reverse;
}

.hero-orbit::after {
  inset: 54px;
  border-color: rgba(236, 72, 153, 0.2);
  animation-duration: 22s;
}

.orbit-chip {
  position: absolute;
  min-width: 58px;
  padding: 0.32rem 0.65rem;
  border-radius: 999px;
  background: rgba(10, 14, 39, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #ffffff;
  font-size: 0.78rem;
  font-weight: 700;
  text-align: center;
  box-shadow: 0 0 22px rgba(102, 126, 234, 0.35);
  backdrop-filter: blur(12px);
  animation: chipCounter 14s linear infinite;
}

.orbit-chip:nth-child(1) {
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
}

.orbit-chip:nth-child(2) {
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
}

.orbit-chip:nth-child(3) {
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
}

.orbit-chip:nth-child(4) {
  top: 50%;
  left: -34px;
  transform: translateY(-50%);
}

@keyframes orbitFrame {
  to {
    transform: rotate(360deg);
  }
}

@keyframes chipCounter {
  to {
    rotate: -360deg;
  }
}

@media (max-width: 768px) {
  .hero-orbit {
    inset: -24px;
  }

  .orbit-chip {
    font-size: 0.7rem;
    min-width: 48px;
  }
}
</style>
