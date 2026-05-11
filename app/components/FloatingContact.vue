<template>
  <div class="floating-contact">
    <a
      href="https://t.me/jerrymax88"
      target="_blank"
      rel="noopener noreferrer"
      class="floating-button floating-button-telegram"
    >
      {{ floatingText.telegram }}
    </a>

    <a
      href="https://wa.me/your_number"
      target="_blank"
      rel="noopener noreferrer"
      class="floating-button floating-button-whatsapp"
    >
      {{ floatingText.whatsapp }}
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const floatingText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      telegram: 'Telegram 联系',
      whatsapp: 'WhatsApp 联系'
    }
  }

  return {
    telegram: 'Telegram',
    whatsapp: 'WhatsApp'
  }
})
</script>

<style scoped>
.floating-contact {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.floating-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 128px;
  min-height: 42px;
  padding: 0 18px;
  border-radius: var(--radius-pill);
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  box-shadow: var(--shadow-soft);
  transition:
    background var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.floating-button:hover {
  transform: translateY(-1px);
}

.floating-button-telegram {
  background: var(--color-primary);
}

.floating-button-telegram:hover {
  background: var(--color-primary-hover);
  box-shadow: var(--shadow-primary);
}

.floating-button-whatsapp {
  background: var(--color-success);
}

.floating-button-whatsapp:hover {
  background: #12823d;
  box-shadow: 0 10px 24px rgba(22, 163, 74, 0.32);
}

@media (max-width: 768px) {
  .floating-contact {
    right: 14px;
    bottom: 14px;
  }

  .floating-button {
    min-width: 112px;
    min-height: 38px;
    padding: 0 14px;
    font-size: 13px;
  }
}
</style>