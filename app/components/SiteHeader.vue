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
          {{ menuText.contact }}
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
  background: #111827;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 26px rgba(15, 23, 42, 0.2);
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
  background: #1687d9;
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
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
  border-color: #1687d9;
  background: rgba(22, 135, 217, 0.18);
  color: #ffffff;
}

.contact-link {
  margin-left: 4px;
  padding: 0 16px;
  background: #1687d9;
  color: #ffffff;
}

.contact-link:hover {
  background: #0f75c2;
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

@media (max-width: 1120px) {
  .header-inner {
    padding: 0 18px;
  }

  .nav-link,
  .contact-link {
    padding: 0 8px;
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
    border: 1px solid rgba(203, 213, 225, 0.16);
    border-radius: 16px;
    background: #111827;
    box-shadow: 0 18px 44px rgba(15, 23, 42, 0.32);
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