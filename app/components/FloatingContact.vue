<template>
  <div class="floating-contact">
    <NuxtLink to="/contact" class="floating-contact-button">
      {{ floatingText.contact }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const floatingText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      contact: '联系我们'
    }
  }

  return {
    contact: 'Contact Us'
  }
})
</script>

<style scoped>
.floating-contact {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 100;
}

.floating-contact-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 132px;
  min-height: 46px;
  padding: 0 22px;
  overflow: hidden;
  border: 1px solid rgba(96, 165, 250, 0.75);
  border-radius: 14px;
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.35), transparent 22%),
    linear-gradient(180deg, #2aa7ff 0%, #1687d9 45%, #0f75c2 100%);
  color: #ffffff;
  font-size: 14px;
  font-weight: 900;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  box-shadow:
    0 0 0 1px rgba(125, 211, 252, 0.18),
    0 0 18px rgba(56, 189, 248, 0.45),
    0 10px 26px rgba(22, 135, 217, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.42),
    inset 0 -2px 0 rgba(7, 17, 42, 0.35);
  transition: 0.2s ease;
  animation: floatingPulse 2.4s ease-in-out infinite;
}

.floating-contact-button::before {
  content: "";
  position: absolute;
  inset: 1px;
  z-index: 1;
  border-radius: 12px;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.28) 0%,
      rgba(255, 255, 255, 0.08) 42%,
      transparent 100%
    );
  pointer-events: none;
}

.floating-contact-button::after {
  content: "";
  position: absolute;
  top: -80%;
  left: -95%;
  z-index: 2;
  width: 70%;
  height: 260%;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.65) 50%,
      transparent 100%
    );
  transform: rotate(22deg);
  animation: floatingShine 2.8s ease-in-out infinite;
  pointer-events: none;
}

.floating-contact-button {
  z-index: 3;
}

.floating-contact-button:hover {
  border-color: rgba(186, 230, 253, 0.95);
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.42), transparent 24%),
    linear-gradient(180deg, #38bdf8 0%, #1d9bf0 45%, #1687d9 100%);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow:
    0 0 0 1px rgba(125, 211, 252, 0.28),
    0 0 26px rgba(56, 189, 248, 0.65),
    0 14px 34px rgba(22, 135, 217, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.48),
    inset 0 -2px 0 rgba(7, 17, 42, 0.36);
}

.floating-contact-button:active {
  transform: translateY(0);
}

@keyframes floatingShine {
  0% {
    left: -95%;
  }

  45% {
    left: 135%;
  }

  100% {
    left: 135%;
  }
}

@keyframes floatingPulse {
  0%,
  100% {
    box-shadow:
      0 0 0 1px rgba(125, 211, 252, 0.18),
      0 0 18px rgba(56, 189, 248, 0.45),
      0 10px 26px rgba(22, 135, 217, 0.42),
      inset 0 1px 0 rgba(255, 255, 255, 0.42),
      inset 0 -2px 0 rgba(7, 17, 42, 0.35);
  }

  50% {
    box-shadow:
      0 0 0 1px rgba(125, 211, 252, 0.3),
      0 0 30px rgba(56, 189, 248, 0.72),
      0 14px 34px rgba(22, 135, 217, 0.52),
      inset 0 1px 0 rgba(255, 255, 255, 0.5),
      inset 0 -2px 0 rgba(7, 17, 42, 0.38);
  }
}

@media (max-width: 768px) {
  .floating-contact {
    right: 14px;
    bottom: 14px;
  }

  .floating-contact-button {
    min-width: 116px;
    min-height: 42px;
    padding: 0 18px;
    border-radius: 13px;
    font-size: 13px;
  }

  .floating-contact-button::before {
    border-radius: 11px;
  }
}
</style>