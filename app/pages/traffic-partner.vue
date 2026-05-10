<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const pageText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      seoTitle: '流量合作 | 合作伙伴与商务合作',
      seoDescription:
        '面向网站站长、SEO 团队、广告投放团队、KOL、社群和流量合作伙伴。',

      heroLabel: '流量合作',
      heroTitle: '流量合作',
      heroDescription:
        '我们欢迎拥有真实流量资源、SEO 排名资源、广告投放经验、社群渠道、媒体资源或区域推广能力的合作伙伴。',

      targetLabel: '我们寻找谁',
      targetTitle: '适合的流量合作对象',

      cardOneTitle: '网站站长',
      cardOneDescription:
        '适合拥有网站、内容平台、排名页面或广告位，并具备稳定访问流量的合作方。',

      cardTwoTitle: 'SEO 团队',
      cardTwoDescription:
        '适合具备 SEO 排名能力、关键词资源、内容网络或搜索流量资源的团队。',

      cardThreeTitle: '广告投放团队',
      cardThreeDescription:
        '适合具备 Google、Meta、TikTok、原生广告或其他流量平台投放经验的团队。',

      cardFourTitle: '社群与 KOL 资源方',
      cardFourDescription:
        '适合拥有 Telegram 群、WhatsApp 社群、社交媒体频道、KOL 或私域流量资源的合作方。',

      channelLabel: '流量渠道',
      channelTitle: '支持的流量渠道',

      channelOne: 'SEO 网站流量',
      channelTwo: '搜索引擎流量',
      channelThree: '社交媒体流量',
      channelFour: 'Telegram / WhatsApp 社群',
      channelFive: 'KOL / 网红推广',
      channelSix: '媒体广告位',
      channelSeven: '付费广告流量',
      channelEight: '内容推广',
      channelNine: '区域市场渠道',

      modelLabel: '合作模式',
      modelTitle: '灵活的流量合作方式',
      modelDescription:
        '流量合作方式可以根据流量来源、市场区域、流量质量、转化预期和合作规模进行安排。',

      modelOne: 'CPA 合作',
      modelTwo: '收入分成合作',
      modelThree: '固定广告位合作',
      modelFour: '混合合作模式',
      modelFive: '内容推广合作',
      modelSix: '长期流量采购合作',

      expectationLabel: '我们的关注点',
      expectationTitle: '我们关注什么',

      expectationOne: '真实流量来源',
      expectationTwo: '目标市场匹配',
      expectationThree: '稳定推广渠道',
      expectationFour: '流量质量',
      expectationFive: '基础数据透明',
      expectationSix: '长期合作潜力',

      ctaLabel: '开始合作',
      ctaTitle: '联系我们开始流量合作',
      ctaDescription:
        '如果你拥有网站流量、SEO 排名资源、社群资源、KOL 资源、广告流量或本地推广渠道，可以直接联系我们。',
      telegram: 'Telegram 联系',
      whatsapp: 'WhatsApp 联系'
    }
  }

  return {
    seoTitle: 'Traffic Partnership | Partner Cooperation',
    seoDescription:
      'Traffic partnership opportunities for website owners, SEO teams, media buyers, KOLs, social communities and affiliate traffic partners.',

    heroLabel: 'TRAFFIC PARTNERSHIP',
    heroTitle: 'Traffic Partnership',
    heroDescription:
      'We welcome partners with real traffic resources, SEO ranking resources, advertising experience, community channels, media resources or regional promotion ability.',

    targetLabel: 'WHO WE ARE LOOKING FOR',
    targetTitle: 'Suitable Traffic Partners',

    cardOneTitle: 'Website Owners',
    cardOneDescription:
      'Partners who own websites, content platforms, ranking pages or advertising spaces with stable visitor traffic.',

    cardTwoTitle: 'SEO Teams',
    cardTwoDescription:
      'Teams with SEO ranking ability, keyword resources, content networks or search traffic.',

    cardThreeTitle: 'Media Buying Teams',
    cardThreeDescription:
      'Teams with paid advertising experience across Google, Meta, TikTok, native ads or other traffic platforms.',

    cardFourTitle: 'Community & KOL Resources',
    cardFourDescription:
      'Partners who manage Telegram groups, WhatsApp communities, social media channels, influencers or private traffic groups.',

    channelLabel: 'TRAFFIC CHANNELS',
    channelTitle: 'Supported Traffic Channels',

    channelOne: 'SEO Website Traffic',
    channelTwo: 'Search Engine Traffic',
    channelThree: 'Social Media Traffic',
    channelFour: 'Telegram / WhatsApp Communities',
    channelFive: 'KOL / Influencer Promotion',
    channelSix: 'Media Advertising Spaces',
    channelSeven: 'Paid Advertising Traffic',
    channelEight: 'Content Promotion',
    channelNine: 'Regional Market Channels',

    modelLabel: 'COOPERATION MODELS',
    modelTitle: 'Flexible Traffic Cooperation',
    modelDescription:
      'Traffic cooperation can be arranged based on traffic source, market, quality, conversion expectation and cooperation scale.',

    modelOne: 'CPA Cooperation',
    modelTwo: 'Revenue Share Cooperation',
    modelThree: 'Fixed Advertising Placement',
    modelFour: 'Hybrid Cooperation Model',
    modelFive: 'Content Promotion',
    modelSix: 'Long-Term Traffic Purchase',

    expectationLabel: 'OUR EXPECTATIONS',
    expectationTitle: 'What We Care About',

    expectationOne: 'Real traffic source',
    expectationTwo: 'Target market match',
    expectationThree: 'Stable promotion channel',
    expectationFour: 'Traffic quality',
    expectationFive: 'Basic data transparency',
    expectationSix: 'Long-term cooperation potential',

    ctaLabel: 'START COOPERATION',
    ctaTitle: 'Contact Us for Traffic Cooperation',
    ctaDescription:
      'If you have website traffic, SEO ranking resources, social communities, KOL resources, advertising traffic or local promotion channels, contact us directly.',
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
  <main class="partner-page">
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
          {{ pageText.targetLabel }}
        </p>

        <h2>
          {{ pageText.targetTitle }}
        </h2>
      </div>

      <div class="card-grid">
        <div class="info-card">
          <h3>{{ pageText.cardOneTitle }}</h3>
          <p>{{ pageText.cardOneDescription }}</p>
        </div>

        <div class="info-card">
          <h3>{{ pageText.cardTwoTitle }}</h3>
          <p>{{ pageText.cardTwoDescription }}</p>
        </div>

        <div class="info-card">
          <h3>{{ pageText.cardThreeTitle }}</h3>
          <p>{{ pageText.cardThreeDescription }}</p>
        </div>

        <div class="info-card">
          <h3>{{ pageText.cardFourTitle }}</h3>
          <p>{{ pageText.cardFourDescription }}</p>
        </div>
      </div>
    </section>

    <section class="content-section light-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.channelLabel }}
        </p>

        <h2>
          {{ pageText.channelTitle }}
        </h2>
      </div>

      <div class="list-panel">
        <div class="list-item">
          <strong>{{ pageText.channelOne }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.channelTwo }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.channelThree }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.channelFour }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.channelFive }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.channelSix }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.channelSeven }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.channelEight }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.channelNine }}</strong>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="split-content">
        <div>
          <p class="section-label">
            {{ pageText.modelLabel }}
          </p>

          <h2>
            {{ pageText.modelTitle }}
          </h2>

          <p>
            {{ pageText.modelDescription }}
          </p>
        </div>

        <div class="expectation-list">
          <div class="expectation-item">
            <strong>{{ pageText.modelOne }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.modelTwo }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.modelThree }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.modelFour }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.modelFive }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.modelSix }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section light-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.expectationLabel }}
        </p>

        <h2>
          {{ pageText.expectationTitle }}
        </h2>
      </div>

      <div class="requirement-grid">
        <div class="requirement-card">
          <strong>{{ pageText.expectationOne }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.expectationTwo }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.expectationThree }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.expectationFour }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.expectationFive }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.expectationSix }}</strong>
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
.partner-page {
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
.cta-card p {
  max-width: 820px;
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
  max-width: 760px;
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

.card-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.info-card {
  min-height: 280px;
  padding: 28px;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
}

.info-card h3 {
  margin: 0 0 14px;
  color: #07112a;
  font-size: 20px;
  line-height: 1.35;
}

.info-card p {
  margin: 0 0 8px;
  color: #475569;
  font-size: 15px;
  line-height: 1.75;
}

.list-panel {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.list-item {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #f8fafc;
}

.list-item strong,
.expectation-item strong,
.requirement-card strong {
  display: block;
  color: #07112a;
  font-size: 16px;
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

.expectation-list {
  display: grid;
  gap: 14px;
}

.expectation-item {
  padding: 18px 20px;
  border-radius: 14px;
  background: #f5f7fb;
  border: 1px solid #e5e7eb;
}

.requirement-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.requirement-card {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #f8fafc;
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
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .list-panel,
  .requirement-grid {
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

  .card-grid,
  .list-panel,
  .requirement-grid {
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