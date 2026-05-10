<template>
  <header class="site-header">
    <div class="header-inner">
      <NuxtLink to="/" class="brand" @click="closeMenu">
        <span class="brand-mark">P</span>

        <span class="brand-text">
          <strong>Partner</strong>
          <small>Cooperation</small>
        </span>
      </NuxtLink>

      <button
        class="mobile-menu-button"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span v-if="!isMenuOpen">☰</span>
        <span v-else>×</span>
      </button>

      <nav :class="['nav-menu', { open: isMenuOpen }]">
        <NuxtLink to="/" class="nav-link" @click="closeMenu">
          {{ menuText.home }}
        </NuxtLink>

        <NuxtLink to="/about" class="nav-link" @click="closeMenu">
          {{ menuText.about }}
        </NuxtLink>

        <NuxtLink to="/business-partner" class="nav-link" @click="closeMenu">
          {{ menuText.business }}
        </NuxtLink>

        <NuxtLink to="/agent-partner" class="nav-link" @click="closeMenu">
          {{ menuText.agent }}
        </NuxtLink>

        <NuxtLink to="/traffic-partner" class="nav-link" @click="closeMenu">
          {{ menuText.traffic }}
        </NuxtLink>

        <NuxtLink to="/technology-partner" class="nav-link" @click="closeMenu">
          {{ menuText.technology }}
        </NuxtLink>

        <NuxtLink to="/cooperation-model" class="nav-link" @click="closeMenu">
          {{ menuText.model }}
        </NuxtLink>

        <NuxtLink to="/faq" class="nav-link" @click="closeMenu">
          {{ menuText.faq }}
        </NuxtLink>

        <button
          class="language-button"
          type="button"
          @click="toggleLanguage"
        >
          {{ currentLanguage === 'en' ? '中文' : 'EN' }}
        </button>

        <NuxtLink to="/contact" class="contact-link" @click="closeMenu">
          <span>{{ menuText.contact }}</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const isMenuOpen = ref(false)

const {
  currentLanguage,
  toggleLanguage,
  initLanguage
} = useLanguage()

onMounted(() => {
  initLanguage()
})

const menuText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      home: '首页',
      about: '关于我们',
      business: '招商合作',
      agent: '代理合作',
      traffic: '流量合作',
      technology: '技术合作',
      model: '合作模式',
      faq: '常见问题',
      contact: '联系我们'
    }
  }

  return {
    home: 'Home',
    about: 'About',
    business: 'Business',
    agent: 'Agent',
    traffic: 'Traffic',
    technology: 'Technology',
    model: 'Model',
    faq: 'FAQ',
    contact: 'Contact Us'
  }
})

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
  background: rgba(11, 18, 32, 0.94);
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(18px);
}

.header-inner {
  position: relative;
  max-width: 1180px;
  height: 86px;
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
  color: inherit;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 13px;
  background: linear-gradient(135deg, #1687d9, #0f75c2);
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  box-shadow:
    0 10px 24px rgba(22, 135, 217, 0.26),
    inset 0 1px 0 rgba(255, 255, 255, 0.16);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-text strong {
  color: #ffffff;
  font-size: 19px;
  font-weight: 800;
}

.brand-text small {
  margin-top: 5px;
  color: #94a3b8;
  font-size: 12px;
  font-weight: 600;
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  margin-left: auto;
}

.nav-link,
.contact-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 11px;
  border-radius: 9px;
  color: #cbd5e1;
  font-size: 13px;
  font-weight: 800;
  line-height: 1.15;
  text-align: center;
  text-decoration: none;
  transition: 0.2s ease;
  white-space: nowrap;
}

.nav-link:hover {
  background: rgba(22, 135, 217, 0.16);
  color: #ffffff;
}

.router-link-active.nav-link,
.router-link-exact-active.nav-link {
  background: rgba(22, 135, 217, 0.2);
  color: #ffffff;
}

.language-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 58px;
  height: 40px;
  margin-left: 6px;
  padding: 0 12px;
  border: 1px solid rgba(203, 213, 225, 0.32);
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  transition: 0.2s ease;
}

.language-button:hover {
  border-color: #38bdf8;
  background: rgba(22, 135, 217, 0.18);
  color: #ffffff;
}

.contact-link {
  position: relative;
  margin-left: 8px;
  min-height: 46px;
  padding: 0 22px;
  overflow: hidden;
  border: 1px solid rgba(96, 165, 250, 0.75);
  border-radius: 12px;
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.35), transparent 22%),
    linear-gradient(180deg, #2aa7ff 0%, #1687d9 45%, #0f75c2 100%);
  color: #ffffff;
  box-shadow:
    0 0 0 1px rgba(125, 211, 252, 0.18),
    0 0 18px rgba(56, 189, 248, 0.45),
    0 10px 26px rgba(22, 135, 217, 0.42),
    inset 0 1px 0 rgba(255, 255, 255, 0.42),
    inset 0 -2px 0 rgba(7, 17, 42, 0.35);
  animation: contactPulse 2.4s ease-in-out infinite;
}

.contact-link span {
  position: relative;
  z-index: 3;
}

.contact-link::before {
  content: "";
  position: absolute;
  inset: 1px;
  z-index: 1;
  border-radius: 10px;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.28) 0%,
      rgba(255, 255, 255, 0.08) 42%,
      transparent 100%
    );
  pointer-events: none;
}

.contact-link::after {
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
  animation: contactShine 2.8s ease-in-out infinite;
  pointer-events: none;
}

.contact-link:hover {
  border-color: rgba(186, 230, 253, 0.95);
  background:
    radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.42), transparent 24%),
    linear-gradient(180deg, #38bdf8 0%, #1d9bf0 45%, #1687d9 100%);
  color: #ffffff;
  transform: translateY(-1px);
  box-shadow:
    0 0 0 1px rgba(125, 211, 252, 0.28),
    0 0 26px rgba(56, 189, 248, 0.65),
    0 14px 34px rgba(22, 135, 217, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.48),
    inset 0 -2px 0 rgba(7, 17, 42, 0.36);
}

.contact-link:active {
  transform: translateY(0);
}

@keyframes contactShine {
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

@keyframes contactPulse {
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

.mobile-menu-button {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(203, 213, 225, 0.32);
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
  font-size: 27px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
}

.mobile-menu-button:hover {
  border-color: #38bdf8;
  background: rgba(22, 135, 217, 0.18);
}

@media (max-width: 1120px) {
  .header-inner {
    padding: 0 18px;
  }

  .nav-link {
    padding: 0 8px;
    font-size: 12px;
  }

  .contact-link {
    padding: 0 14px;
    font-size: 12px;
  }

  .language-button {
    min-width: 54px;
    padding: 0 10px;
    font-size: 12px;
  }
}

@media (max-width: 980px) {
  .header-inner {
    justify-content: space-between;
  }

  .mobile-menu-button {
    display: inline-flex;
  }

  .nav-menu {
    position: absolute;
    top: 86px;
    left: 16px;
    right: 16px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    gap: 7px;
    max-height: calc(100vh - 106px);
    margin-left: 0;
    padding: 16px;
    overflow-y: auto;
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 16px;
    background: rgba(11, 18, 32, 0.98);
    box-shadow: 0 18px 44px rgba(0, 0, 0, 0.36);
    backdrop-filter: blur(18px);
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-link,
  .contact-link,
  .language-button {
    width: 100%;
    min-height: 46px;
    justify-content: flex-start;
    padding: 0 14px;
    text-align: left;
  }

  .language-button {
    margin-left: 0;
  }

  .contact-link {
    margin-left: 0;
    justify-content: center;
    text-align: center;
    min-height: 46px;
    border-radius: 12px;
  }
}

@media (max-width: 520px) {
  .header-inner {
    height: 72px;
    padding: 0 14px;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    font-size: 21px;
  }

  .brand-text strong {
    font-size: 16px;
  }

  .brand-text small {
    font-size: 11px;
  }

  .mobile-menu-button {
    width: 40px;
    height: 40px;
    border-radius: 9px;
    font-size: 24px;
  }

  .nav-menu {
    top: 72px;
    left: 12px;
    right: 12px;
    max-height: calc(100vh - 88px);
    border-radius: 14px;
  }
}
</style>