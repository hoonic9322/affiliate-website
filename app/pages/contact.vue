<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const pageText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      seoTitle: '联系我们 | 合作伙伴与商务合作',
      seoDescription:
        '通过 Telegram 或 WhatsApp 联系我们，沟通招商、代理、流量或远程技术合作。',

      heroLabel: '联系我们',
      heroTitle: '联系我们开始合作',
      heroDescription:
        '如果你有兴趣进行招商合作、代理合作、流量合作或远程技术合作，可以直接通过 Telegram 或 WhatsApp 联系我们。',

      directLabel: '直接联系',
      directTitle: '选择你的联系方式',
      directDescription:
        '我们建议通过 Telegram 或 WhatsApp 直接沟通，这样可以更快确认合作方向。',

      telegramTitle: 'Telegram 联系',
      telegramDescription:
        '通过 Telegram 联系我们，快速沟通合作方向。',
      telegramButton: '打开 Telegram',

      whatsappTitle: 'WhatsApp 联系',
      whatsappDescription:
        '通过 WhatsApp 联系我们，沟通商务与合作事项。',
      whatsappButton: '打开 WhatsApp',

      prepareLabel: '联系前准备',
      prepareTitle: '联系前可以准备的信息',
      prepareDescription:
        '为了让我们更快了解你的合作机会，你可以在联系我们前简单准备以下资料。',

      infoOneTitle: '合作类型',
      infoOneDescription:
        '招商合作、代理合作、流量合作或远程技术合作。',

      infoTwoTitle: '市场或区域',
      infoTwoDescription:
        '说明你主要负责或关注的国家、地区、城市或目标市场。',

      infoThreeTitle: '现有资源',
      infoThreeDescription:
        '简单介绍你的商务资源、代理资源、流量渠道或技术团队能力。',

      infoFourTitle: '期望合作方式',
      infoFourDescription:
        '告诉我们你希望采用什么样的合作模式。',

      partnerLabel: '谁可以联系我们',
      partnerTitle: '欢迎不同类型合作伙伴联系',
      partnerDescription:
        '无论你是个人、团队、公司、代理方、流量主、广告投放团队或技术服务商，都可以直接联系我们。',

      partnerOne: '招商合作方',
      partnerTwo: '代理合作方',
      partnerThree: '流量合作方',
      partnerFour: '远程技术合作方',

      ctaLabel: '现在开始',
      ctaTitle: '现在开始沟通合作',
      ctaDescription:
        '直接联系我们，并说明你的合作类型、市场、资源和期望合作方式。',
      telegram: 'Telegram 联系',
      whatsapp: 'WhatsApp 联系'
    }
  }

  return {
    seoTitle: 'Contact Us | Partner Cooperation',
    seoDescription:
      'Contact us through Telegram or WhatsApp for business, agent, traffic or remote technology cooperation.',

    heroLabel: 'CONTACT US',
    heroTitle: 'Contact Us for Cooperation',
    heroDescription:
      'If you are interested in business partnership, agent partnership, traffic partnership or remote technology cooperation, contact us directly through Telegram or WhatsApp.',

    directLabel: 'DIRECT CONTACT',
    directTitle: 'Choose Your Preferred Contact Method',
    directDescription:
      'We recommend direct communication through Telegram or WhatsApp for faster response.',

    telegramTitle: 'Telegram',
    telegramDescription:
      'Contact us through Telegram for quick cooperation discussion.',
    telegramButton: 'Open Telegram',

    whatsappTitle: 'WhatsApp',
    whatsappDescription:
      'Contact us through WhatsApp for business and cooperation inquiries.',
    whatsappButton: 'Open WhatsApp',

    prepareLabel: 'BEFORE CONTACTING US',
    prepareTitle: 'Information You Can Prepare',
    prepareDescription:
      'To help us understand your cooperation opportunity faster, you can briefly prepare the following information before contacting us.',

    infoOneTitle: 'Cooperation Type',
    infoOneDescription:
      'Business partnership, agent partnership, traffic partnership or technology partnership.',

    infoTwoTitle: 'Market or Region',
    infoTwoDescription:
      'Tell us which country, region, city or target market you are focusing on.',

    infoThreeTitle: 'Available Resources',
    infoThreeDescription:
      'Briefly introduce your business resources, agent resources, traffic channels or technical team.',

    infoFourTitle: 'Expected Cooperation Model',
    infoFourDescription:
      'Let us know what type of cooperation model you are looking for.',

    partnerLabel: 'WHO CAN CONTACT US',
    partnerTitle: 'Open to Different Partner Types',
    partnerDescription:
      'Whether you are an individual, team, company, agency, traffic owner, media buyer or technical service provider, you can contact us directly.',

    partnerOne: 'Business Partners',
    partnerTwo: 'Agent Partners',
    partnerThree: 'Traffic Partners',
    partnerFour: 'Technology Partners',

    ctaLabel: 'START NOW',
    ctaTitle: 'Start the Conversation Today',
    ctaDescription:
      'Contact us directly and tell us your cooperation type, market, resources and expected cooperation model.',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp'
  }
})

useHead(() => ({
  title: pageText.value.seoTitle,
  meta: [
    {
      name: 'description',
      content: pageText.value.seoDescription
    },
    {
      property: 'og:title',
      content: pageText.value.seoTitle
    },
    {
      property: 'og:description',
      content: pageText.value.seoDescription
    }
  ]
}))
</script>

<template>
  <main class="contact-page">
    <section class="page-hero">
      <div class="page-hero-content">
        <p class="section-label">
          {{ pageText.heroLabel }}
        </p>

        <h1>
          {{ pageText.heroTitle }}
        </h1>

        <p>
          {{ pageText.heroDescription }}
        </p>
      </div>
    </section>

    <section class="content-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.directLabel }}
        </p>

        <h2>
          {{ pageText.directTitle }}
        </h2>

        <p>
          {{ pageText.directDescription }}
        </p>
      </div>

      <div class="contact-grid">
        <a
          href="https://t.me/your_username"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon">T</div>

          <h3>
            {{ pageText.telegramTitle }}
          </h3>

          <p>
            {{ pageText.telegramDescription }}
          </p>

          <strong>{{ pageText.telegramButton }}</strong>
        </a>

        <a
          href="https://wa.me/your_number"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon whatsapp">W</div>

          <h3>
            {{ pageText.whatsappTitle }}
          </h3>

          <p>
            {{ pageText.whatsappDescription }}
          </p>

          <strong>{{ pageText.whatsappButton }}</strong>
        </a>
      </div>
    </section>

    <section class="content-section light-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.prepareLabel }}
        </p>

        <h2>
          {{ pageText.prepareTitle }}
        </h2>

        <p>
          {{ pageText.prepareDescription }}
        </p>
      </div>

      <div class="info-grid">
        <div class="info-card">
          <h3>{{ pageText.infoOneTitle }}</h3>

          <p>
            {{ pageText.infoOneDescription }}
          </p>
        </div>

        <div class="info-card">
          <h3>{{ pageText.infoTwoTitle }}</h3>

          <p>
            {{ pageText.infoTwoDescription }}
          </p>
        </div>

        <div class="info-card">
          <h3>{{ pageText.infoThreeTitle }}</h3>

          <p>
            {{ pageText.infoThreeDescription }}
          </p>
        </div>

        <div class="info-card">
          <h3>{{ pageText.infoFourTitle }}</h3>

          <p>
            {{ pageText.infoFourDescription }}
          </p>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="split-content">
        <div>
          <p class="section-label">
            {{ pageText.partnerLabel }}
          </p>

          <h2>
            {{ pageText.partnerTitle }}
          </h2>

          <p>
            {{ pageText.partnerDescription }}
          </p>
        </div>

        <div class="partner-list">
          <div class="partner-item">
            <strong>{{ pageText.partnerOne }}</strong>
          </div>

          <div class="partner-item">
            <strong>{{ pageText.partnerTwo }}</strong>
          </div>

          <div class="partner-item">
            <strong>{{ pageText.partnerThree }}</strong>
          </div>

          <div class="partner-item">
            <strong>{{ pageText.partnerFour }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="cta-card">
        <p class="section-label">
          {{ pageText.ctaLabel }}
        </p>

        <h2>
          {{ pageText.ctaTitle }}
        </h2>

        <p>
          {{ pageText.ctaDescription }}
        </p>

        <div class="cta-actions">
          <a
            href="https://t.me/your_username"
            target="_blank"
            rel="noopener noreferrer"
            class="primary-button"
          >
            {{ pageText.telegram }}
          </a>

          <a
            href="https://wa.me/your_number"
            target="_blank"
            rel="noopener noreferrer"
            class="secondary-button"
          >
            {{ pageText.whatsapp }}
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.contact-page {
  min-height: 100vh;
  background: #f5f7fb;
  color: #111827;
}

.page-hero {
  max-width: 1180px;
  margin: 0 auto;
  padding: 72px 24px 36px;
}

.page-hero-content {
  padding: 58px 56px;
  border-radius: 24px;
  background:
    radial-gradient(circle at top right, rgba(22, 135, 217, 0.16), transparent 34%),
    #ffffff;
  box-shadow: 0 16px 42px rgba(15, 23, 42, 0.08);
}

.section-label {
  margin: 0 0 14px;
  color: #1687d9;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 20px;
  color: #07112a;
  font-size: 50px;
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.page-hero p,
.section-heading p,
.split-content p,
.cta-card p,
.contact-card p,
.info-card p {
  max-width: 860px;
  margin: 0 0 8px;
  color: #334155;
  font-size: 16px;
  line-height: 1.8;
}

.content-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: 48px 24px;
}

.light-section {
  max-width: none;
  background: #ffffff;
}

.light-section > * {
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
}

.section-heading {
  max-width: 820px;
  margin-bottom: 30px;
}

.section-heading h2,
.split-content h2,
.cta-card h2 {
  margin: 0 0 16px;
  color: #07112a;
  font-size: 38px;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.contact-card {
  display: block;
  padding: 34px;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  background: #ffffff;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
  transition: 0.2s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
  border-color: rgba(22, 135, 217, 0.45);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.09);
}

.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  margin-bottom: 22px;
  border-radius: 16px;
  background: #1687d9;
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
}

.contact-icon.whatsapp {
  background: #16a34a;
}

.contact-card h3 {
  margin: 0 0 14px;
  color: #07112a;
  font-size: 24px;
  line-height: 1.3;
}

.contact-card p {
  color: #475569;
  font-size: 15px;
}

.contact-card strong {
  display: inline-flex;
  margin-top: 18px;
  color: #1687d9;
  font-size: 15px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.info-card {
  min-height: 230px;
  padding: 26px;
  border-radius: 18px;
  background: #f8fafc;
  border: 1px solid #e5e7eb;
}

.info-card h3 {
  margin: 0 0 14px;
  color: #07112a;
  font-size: 20px;
  line-height: 1.35;
}

.info-card p {
  color: #475569;
  font-size: 15px;
}

.split-content {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 40px;
  align-items: center;
  padding: 44px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
}

.partner-list {
  display: grid;
  gap: 14px;
}

.partner-item {
  padding: 18px 20px;
  border-radius: 14px;
  background: #f5f7fb;
  border: 1px solid #e5e7eb;
}

.partner-item strong {
  display: block;
  color: #07112a;
  font-size: 16px;
}

.cta-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}

.cta-card {
  padding: 50px;
  border-radius: 24px;
  background: linear-gradient(135deg, #07112a, #123d68);
  color: #ffffff;
}

.cta-card h2,
.cta-card p {
  color: #ffffff;
}

.cta-card p {
  color: rgba(255, 255, 255, 0.84);
}

.cta-card .section-label {
  color: #7dd3fc;
}

.cta-actions {
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
  min-height: 52px;
  padding: 0 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 800;
  line-height: 1.25;
  text-decoration: none;
}

.primary-button {
  background: #1687d9;
  color: #ffffff;
}

.primary-button:hover {
  background: #0f75c2;
}

.secondary-button {
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: transparent;
  color: #ffffff;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 1080px) {
  .info-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .split-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-hero {
    padding: 42px 16px 28px;
  }

  .page-hero-content {
    padding: 36px 24px;
    border-radius: 20px;
  }

  h1 {
    font-size: 36px;
  }

  .section-heading h2,
  .split-content h2,
  .cta-card h2 {
    font-size: 30px;
  }

  .content-section,
  .cta-section {
    padding: 36px 16px;
  }

  .contact-grid,
  .info-grid {
    grid-template-columns: 1fr;
  }

  .info-card {
    min-height: auto;
  }

  .split-content,
  .cta-card {
    padding: 30px 22px;
    border-radius: 18px;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }
}
</style>