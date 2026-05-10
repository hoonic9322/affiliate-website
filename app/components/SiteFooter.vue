<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <h3>Partner Cooperation</h3>
        <p>
          我们欢迎招商、代理、流量和远程技术合作伙伴加入，共同拓展长期合作机会。
        </p>
      </div>

      <div class="footer-links">
        <div class="footer-group">
          <h4>合作方向</h4>
          <NuxtLink to="/business-partner">招商合作</NuxtLink>
          <NuxtLink to="/agent-partner">代理合作</NuxtLink>
          <NuxtLink to="/traffice-partner">流量合作</NuxtLink>
          <NuxtLink to="/technology-partner">技术合作</NuxtLink>
        </div>

        <div class="footer-group">
          <h4>网站页面</h4>
          <NuxtLink to="/about">关于我们</NuxtLink>
          <NuxtLink to="/cooperateion-model">合作模式</NuxtLink>
          <NuxtLink to="/faq">常见问题</NuxtLink>
          <NuxtLink to="/contact">联系我们</NuxtLink>
        </div>

        <div class="footer-group">
          <h4>联系我们</h4>
          <a href="https://t.me/your_username" target="_blank" rel="noopener noreferrer">
            Telegram
          </a>
          <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 Partner Cooperation. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #111827;
  color: #ffffff;
}

.footer-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 56px 24px;
  display: grid;
  grid-template-columns: 1.2fr 2fr;
  gap: 48px;
}

.footer-brand h3 {
  margin: 0 0 14px;
  font-size: 24px;
}

.footer-brand p {
  max-width: 460px;
  margin: 0;
  color: #cbd5e1;
  line-height: 1.8;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.footer-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-group h4 {
  margin: 0 0 6px;
  color: #ffffff;
  font-size: 15px;
}

.footer-group a {
  color: #cbd5e1;
  font-size: 14px;
  text-decoration: none;
}

.footer-group a:hover {
  color: #ffffff;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 18px 24px;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  color: #94a3b8;
  font-size: 13px;
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style>