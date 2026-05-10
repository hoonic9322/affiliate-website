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
      heroImageAlt: '商务合作联系与在线沟通视觉图',

      directLabel: '直接联系',
      directTitle: '选择你的联系方式',
      directDescription:
        '我们建议通过 Telegram 或 WhatsApp 直接沟通，这样可以更快确认合作方向。',

      telegramTitle: 'Telegram 联系',
      telegramAccount: '@jerrymax88',
      telegramDescription:
        '通过 Telegram 联系我们，快速沟通合作方向。',
      telegramButton: '打开 Telegram',

      whatsappTitle: 'WhatsApp 联系',
      whatsappAccount: '稍后配置',
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
    heroImageAlt: 'Business cooperation contact and online communication illustration',

    directLabel: 'DIRECT CONTACT',
    directTitle: 'Choose Your Preferred Contact Method',
    directDescription:
      'We recommend direct communication through Telegram or WhatsApp for faster response.',

    telegramTitle: 'Telegram',
    telegramAccount: '@jerrymax88',
    telegramDescription:
      'Contact us through Telegram for quick cooperation discussion.',
    telegramButton: 'Open Telegram',

    whatsappTitle: 'WhatsApp',
    whatsappAccount: 'Pending setup',
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
        <div class="hero-copy">
          <p class="section-label hero-label">
            {{ pageText.heroLabel }}
          </p>

          <h1>
            {{ pageText.heroTitle }}
          </h1>

          <p>
            {{ pageText.heroDescription }}
          </p>

          <div class="hero-actions">
            <a
              href="https://t.me/jerrymax88"
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

        <div class="hero-visual">
          <div class="hero-image-card">
            <img
              src="/images/sections/contact-visual.png"
              :alt="pageText.heroImageAlt"
            >
          </div>
        </div>
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
          href="https://t.me/jerrymax88"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon telegram-icon">T</div>

          <h3>
            {{ pageText.telegramTitle }}
          </h3>

          <strong class="contact-account">
            {{ pageText.telegramAccount }}
          </strong>

          <p>
            {{ pageText.telegramDescription }}
          </p>

          <span class="card-link-text">{{ pageText.telegramButton }}</span>
        </a>

        <a
          href="https://wa.me/your_number"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card"
        >
          <div class="contact-icon whatsapp-icon">W</div>

          <h3>
            {{ pageText.whatsappTitle }}
          </h3>

          <strong class="contact-account">
            {{ pageText.whatsappAccount }}
          </strong>

          <p>
            {{ pageText.whatsappDescription }}
          </p>

          <span class="card-link-text">{{ pageText.whatsappButton }}</span>
        </a>
      </div>
    </section>

    <section class="content-section dark-section">
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
          <div class="mini-icon">01</div>
          <h3>{{ pageText.infoOneTitle }}</h3>

          <p>
            {{ pageText.infoOneDescription }}
          </p>
        </div>

        <div class="info-card">
          <div class="mini-icon">02</div>
          <h3>{{ pageText.infoTwoTitle }}</h3>

          <p>
            {{ pageText.infoTwoDescription }}
          </p>
        </div>

        <div class="info-card">
          <div class="mini-icon">03</div>
          <h3>{{ pageText.infoThreeTitle }}</h3>

          <p>
            {{ pageText.infoThreeDescription }}
          </p>
        </div>

        <div class="info-card">
          <div class="mini-icon">04</div>
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
            <span>01</span>
            <strong>{{ pageText.partnerOne }}</strong>
          </div>

          <div class="partner-item">
            <span>02</span>
            <strong>{{ pageText.partnerTwo }}</strong>
          </div>

          <div class="partner-item">
            <span>03</span>
            <strong>{{ pageText.partnerThree }}</strong>
          </div>

          <div class="partner-item">
            <span>04</span>
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
            href="https://t.me/jerrymax88"
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
  background:
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.18), transparent 32%),
    radial-gradient(circle at bottom right, rgba(22, 135, 217, 0.13), transparent 34%),
    #0b1220;
  color: #ffffff;
}

.page-hero {
  max-width: 1280px;
  margin: 0 auto;
  padding: 72px 24px 36px;
}

.page-hero-content {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.04fr) minmax(360px, 0.96fr);
  gap: 42px;
  align-items: center;
  padding: 68px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 32px;
  background:
    linear-gradient(90deg, rgba(7, 17, 42, 0.94), rgba(7, 17, 42, 0.7)),
    url("/images/sections/home-hero-bg.png") center / cover no-repeat;
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.28);
  overflow: hidden;
}

.page-hero-content::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 42px 42px;
  opacity: 0.35;
  pointer-events: none;
}

.hero-copy,
.hero-visual {
  position: relative;
  z-index: 2;
}

.section-label {
  margin: 0 0 14px;
  color: #38bdf8;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero-label {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 0 16px;
  border: 1px solid rgba(96, 165, 250, 0.32);
  border-radius: 999px;
  background: rgba(22, 135, 217, 0.16);
  color: #93c5fd;
}

h1 {
  margin: 0 0 20px;
  color: #ffffff;
  font-size: 54px;
  line-height: 1.1;
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
  color: #cbd5e1;
  font-size: 16px;
  line-height: 1.8;
}

.hero-actions,
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
  box-shadow: 0 12px 28px rgba(22, 135, 217, 0.24);
}

.primary-button:hover {
  background: #0f75c2;
}

.secondary-button {
  border: 1px solid rgba(203, 213, 225, 0.32);
  background: rgba(255, 255, 255, 0.06);
  color: #ffffff;
}

.secondary-button:hover {
  border-color: #38bdf8;
  background: rgba(22, 135, 217, 0.18);
}

.hero-image-card {
  padding: 12px;
  border: 1px solid rgba(148, 163, 184, 0.28);
  border-radius: 28px;
  background: rgba(15, 23, 42, 0.64);
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(16px);
}

.hero-image-card img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 22px;
}

.content-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: 52px 24px;
}

.dark-section {
  max-width: none;
  background: rgba(15, 23, 42, 0.72);
  border-top: 1px solid rgba(148, 163, 184, 0.16);
  border-bottom: 1px solid rgba(148, 163, 184, 0.16);
}

.dark-section > * {
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
  color: #ffffff;
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
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 20px;
  background: rgba(15, 23, 42, 0.72);
  color: inherit;
  text-decoration: none;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.2);
  transition: 0.2s ease;
  backdrop-filter: blur(14px);
}

.contact-card:hover {
  transform: translateY(-4px);
  border-color: rgba(56, 189, 248, 0.48);
  box-shadow: 0 22px 46px rgba(0, 0, 0, 0.28);
}

.contact-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  margin-bottom: 22px;
  border-radius: 18px;
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  box-shadow: 0 12px 24px rgba(15, 23, 42, 0.28);
}

.telegram-icon {
  background: linear-gradient(135deg, #1687d9, #38bdf8);
}

.whatsapp-icon {
  background: linear-gradient(135deg, #16a34a, #22c55e);
}

.contact-card h3 {
  margin: 0 0 8px;
  color: #ffffff;
  font-size: 24px;
  line-height: 1.3;
}

.contact-account {
  display: block;
  margin-bottom: 14px;
  color: #38bdf8;
  font-size: 16px;
}

.contact-card p {
  color: #cbd5e1;
  font-size: 15px;
}

.card-link-text {
  display: inline-flex;
  margin-top: 18px;
  color: #38bdf8;
  font-size: 15px;
  font-weight: 800;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.info-card {
  min-height: 270px;
  padding: 26px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 18px;
  background: rgba(15, 23, 42, 0.78);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(14px);
}

.mini-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  margin-bottom: 20px;
  border-radius: 14px;
  background: linear-gradient(135deg, #1687d9, #38bdf8);
  color: #ffffff;
  font-size: 13px;
  font-weight: 900;
  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.3);
}

.info-card h3 {
  margin: 0 0 14px;
  color: #ffffff;
  font-size: 20px;
  line-height: 1.35;
}

.info-card p {
  color: #cbd5e1;
  font-size: 15px;
}

.split-content {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 40px;
  align-items: center;
  padding: 44px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 24px;
  background: rgba(15, 23, 42, 0.72);
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(14px);
}

.partner-list {
  display: grid;
  gap: 14px;
}

.partner-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 14px;
  background: rgba(30, 41, 59, 0.72);
}

.partner-item span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #1687d9;
  color: #ffffff;
  font-size: 12px;
  font-weight: 900;
}

.partner-item strong {
  display: block;
  color: #ffffff;
  font-size: 16px;
}

.cta-section {
  max-width: 1180px;
  margin: 0 auto;
  padding: 52px 24px 80px;
}

.cta-card {
  padding: 54px;
  border: 1px solid rgba(96, 165, 250, 0.26);
  border-radius: 24px;
  background:
    radial-gradient(circle at top right, rgba(56, 189, 248, 0.18), transparent 34%),
    linear-gradient(135deg, #07112a, #123d68);
  color: #ffffff;
  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.26);
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

@media (max-width: 1080px) {
  .page-hero-content {
    grid-template-columns: 1fr;
    padding: 52px;
  }

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
    padding: 36px 22px;
    border-radius: 22px;
  }

  h1 {
    font-size: 38px;
  }

  .section-heading h2,
  .split-content h2,
  .cta-card h2 {
    font-size: 30px;
  }

  .content-section,
  .cta-section {
    padding: 38px 16px;
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