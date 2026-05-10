<template>
  <header class="site-header">
    <div class="header-inner">
      <NuxtLink to="/" class="brand">
        <span class="brand-mark">P</span>
        <span class="brand-text">
          <strong>Partner</strong>
          <small>Cooperation</small>
        </span>
      </NuxtLink>

      <button class="mobile-menu-button" type="button" @click="toggleMenu">
        ☰
      </button>

      <nav :class="['nav-menu', { open: isMenuOpen }]">
        <NuxtLink to="/" class="nav-link" @click="closeMenu">
          首页
        </NuxtLink>

        <NuxtLink to="/about" class="nav-link" @click="closeMenu">
          关于我们
        </NuxtLink>

        <NuxtLink to="/business-partner" class="nav-link" @click="closeMenu">
          招商合作
        </NuxtLink>

        <NuxtLink to="/agent-partner" class="nav-link" @click="closeMenu">
          代理合作
        </NuxtLink>

        <NuxtLink to="/traffice-partner" class="nav-link" @click="closeMenu">
          流量合作
        </NuxtLink>

        <NuxtLink to="/technology-partner" class="nav-link" @click="closeMenu">
          技术合作
        </NuxtLink>

        <NuxtLink to="/cooperateion-model" class="nav-link" @click="closeMenu">
          合作模式
        </NuxtLink>

        <NuxtLink to="/faq" class="nav-link" @click="closeMenu">
          FAQ
        </NuxtLink>

        <NuxtLink to="/contact" class="contact-link" @click="closeMenu">
          联系我们
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 90;
  background: rgba(255, 255, 255, 0.94);
  border-bottom: 1px solid #e5e7eb;
  backdrop-filter: blur(12px);
}

.header-inner {
  max-width: 1180px;
  height: 76px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #1687d9;
  color: #ffffff;
  font-size: 22px;
  font-weight: 800;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-text strong {
  color: #111827;
  font-size: 18px;
}

.brand-text small {
  margin-top: 4px;
  color: #6b7280;
  font-size: 12px;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-link,
.contact-link {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 0 12px;
  border-radius: 8px;
  color: #374151;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s ease;
}

.nav-link:hover {
  background: #eef6fd;
  color: #1687d9;
}

.router-link-active.nav-link {
  background: #eef6fd;
  color: #1687d9;
}

.contact-link {
  margin-left: 6px;
  background: #1687d9;
  color: #ffffff;
}

.contact-link:hover {
  background: #0f75c2;
}

.mobile-menu-button {
  display: none;
  width: 42px;
  height: 42px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  background: #ffffff;
  color: #111827;
  font-size: 22px;
  cursor: pointer;
}

@media (max-width: 980px) {
  .mobile-menu-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .nav-menu {
    position: absolute;
    top: 76px;
    left: 16px;
    right: 16px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 16px;
    border: 1px solid #e5e7eb;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.12);
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-link,
  .contact-link {
    min-height: 42px;
    justify-content: flex-start;
    margin-left: 0;
  }
}

@media (max-width: 520px) {
  .header-inner {
    height: 68px;
    padding: 0 16px;
  }

  .brand-mark {
    width: 38px;
    height: 38px;
  }

  .brand-text strong {
    font-size: 16px;
  }

  .nav-menu {
    top: 68px;
  }
}
</style>