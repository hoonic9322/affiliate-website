<template>
  <div class="site-root">
    <SiteHeader />

    <NuxtPage />

    <SiteFooter />

    <FloatingContact />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const { initLanguage } = useLanguage()

onMounted(() => {
  initLanguage()
})
</script>

<style scoped>
.site-root {
  min-height: 100vh;
  background: var(--color-bg);
}
</style>