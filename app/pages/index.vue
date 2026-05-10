<template>
  <main class="page">
    <section class="hero">
      <p class="eyebrow">Partnership & Business Cooperation</p>

      <h1>寻找长期合作伙伴</h1>

      <p class="hero-text">
        我们欢迎招商合作、代理合作、流量合作和远程技术合作伙伴加入，
        共同拓展市场、资源、技术和业务机会。
      </p>

      <div class="hero-actions">
        <NuxtLink to="/business-partnership" class="primary-button">
          查看合作方向
        </NuxtLink>

        <NuxtLink to="/contact" class="secondary-button">
          联系我们
        </NuxtLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 80px 24px;
  background: #f5f7fb;
  color: #111827;
}

.hero {
  max-width: 960px;
  margin: 0 auto;
  padding: 64px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
}

.eyebrow {
  margin: 0 0 16px;
  color: #1687d9;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 20px;
  font-size: 48px;
  line-height: 1.15;
}

.hero-text {
  max-width: 760px;
  margin: 0;
  color: #4b5563;
  font-size: 18px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 22px;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
}

.primary-button {
  background: #1687d9;
  color: #ffffff;
}

.secondary-button {
  border: 1px solid #d1d5db;
  color: #111827;
  background: #ffffff;
}

@media (max-width: 768px) {
  .page {
    padding: 40px 16px;
  }

  .hero {
    padding: 36px 24px;
    border-radius: 18px;
  }

  h1 {
    font-size: 34px;
  }

  .hero-text {
    font-size: 16px;
  }
}
</style>