<template>
  <div class="site-root">
    <SiteHeader />

    <NuxtPage />

    <SiteFooter />

    <div class="floating-contact">
      <a
        href="https://t.me/your_username"
        target="_blank"
        rel="noopener noreferrer"
        class="floating-button telegram"
      >
        {{ floatingText.telegram }}
      </a>

      <a
        href="https://wa.me/your_number"
        target="_blank"
        rel="noopener noreferrer"
        class="floating-button whatsapp"
      >
        {{ floatingText.whatsapp }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

const {
  currentLanguage,
  initLanguage
} = useLanguage()

onMounted(() => {
  initLanguage()
})

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

<style>
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, "Microsoft YaHei", "PingFang SC", sans-serif;
  background: #f5f7fb;
  color: #111827;
}

a {
  color: inherit;
}

.site-root {
  min-height: 100vh;
  background: #f5f7fb;
}

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
  border-radius: 999px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.18);
}

.floating-button.telegram {
  background: #1687d9;
}

.floating-button.telegram:hover {
  background: #0f75c2;
}

.floating-button.whatsapp {
  background: #16a34a;
}

.floating-button.whatsapp:hover {
  background: #12823d;
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