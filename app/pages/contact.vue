<template>
  <main class="page">
    <section class="content-card">
      <h1>联系我们</h1>
      <p>
        如有合作意向，请直接通过 Telegram 或 WhatsApp 联系我们。
      </p>

      <div class="contact-actions">
        <a href="https://t.me/your_username" target="_blank" class="primary-button">
          Telegram 联系
        </a>

        <a href="https://wa.me/your_number" target="_blank" class="secondary-button">
          WhatsApp 联系
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 80px 24px;
  background: #f5f7fb;
}

.content-card {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px;
  border-radius: 20px;
  background: #ffffff;
}

h1 {
  margin: 0 0 16px;
  color: #111827;
}

p {
  margin: 0;
  color: #4b5563;
  line-height: 1.8;
}

.contact-actions {
  display: flex;
  gap: 14px;
  margin-top: 28px;
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
</style>