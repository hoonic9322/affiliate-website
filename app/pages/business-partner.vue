<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const pageText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      seoTitle: '招商合作 | 合作伙伴与商务合作',
      seoDescription:
        '面向拥有市场资源、商务渠道和区域合作能力的招商合作伙伴。',

      heroLabel: '招商合作',
      heroTitle: '招商合作',
      heroDescription:
        '我们正在寻找拥有商务资源、市场渠道、区域资源和商业拓展能力的合作伙伴，共同发展长期合作机会。',

      targetLabel: '我们寻找谁',
      targetTitle: '适合的合作对象',

      cardOneTitle: '商务资源方',
      cardOneDescription:
        '适合拥有现有商务资源、客户关系、业务网络或合作机会的资源方。',

      cardTwoTitle: '区域市场合作方',
      cardTwoDescription:
        '适合熟悉本地市场，并能协助在指定国家、地区或城市拓展业务的合作方。',

      cardThreeTitle: '渠道合作方',
      cardThreeDescription:
        '适合拥有线上或线下渠道、行业关系、客户群体或市场入口资源的合作伙伴。',

      cardFourTitle: '战略合作伙伴',
      cardFourDescription:
        '适合可以支持长期业务发展、品牌合作、资源整合或市场拓展的合作伙伴。',

      areasLabel: '合作方向',
      areasTitle: '可以合作的方向',

      areaOne: '市场拓展合作',
      areaTwo: '区域业务开发',
      areaThree: '渠道资源合作',
      areaFour: '品牌或平台合作',
      areaFive: '长期战略合作',
      areaSix: '本地商务资源对接',

      expectationLabel: '我们的关注点',
      expectationTitle: '我们关注什么',
      expectationDescription:
        '我们重视拥有真实资源、沟通清晰、合作稳定，并具备长期业务发展潜力的合作伙伴。',

      expectationOne: '真实商务资源',
      expectationTwo: '明确市场方向',
      expectationThree: '稳定沟通能力',
      expectationFour: '长期合作意识',

      ctaLabel: '开始合作',
      ctaTitle: '联系我们开始招商合作',
      ctaDescription:
        '如果你拥有商务资源、区域渠道或合作机会，可以直接通过 Telegram 或 WhatsApp 联系我们。',
      telegram: 'Telegram 联系',
      whatsapp: 'WhatsApp 联系'
    }
  }

  return {
    seoTitle: 'Business Partnership | Partner Cooperation',
    seoDescription:
      'Business partnership opportunities for partners with market resources, business channels and regional cooperation capability.',

    heroLabel: 'BUSINESS PARTNERSHIP',
    heroTitle: 'Business Partnership',
    heroDescription:
      'We are looking for partners with business resources, market channels, regional connections and commercial development capability.',

    targetLabel: 'WHO WE ARE LOOKING FOR',
    targetTitle: 'Suitable Partner Types',

    cardOneTitle: 'Business Resource Partners',
    cardOneDescription:
      'Partners who have existing commercial resources, client connections, business networks or cooperation opportunities.',

    cardTwoTitle: 'Regional Market Partners',
    cardTwoDescription:
      'Partners who understand local markets and can help expand business in specific countries, regions or cities.',

    cardThreeTitle: 'Channel Partners',
    cardThreeDescription:
      'Partners with offline or online channels, industry connections, customer groups or market access resources.',

    cardFourTitle: 'Strategic Cooperation Partners',
    cardFourDescription:
      'Partners who can support long-term business development, brand cooperation, resource integration or market expansion.',

    areasLabel: 'COOPERATION AREAS',
    areasTitle: 'What We Can Cooperate On',

    areaOne: 'Market Expansion',
    areaTwo: 'Regional Business Development',
    areaThree: 'Channel Resource Cooperation',
    areaFour: 'Brand or Platform Cooperation',
    areaFive: 'Long-Term Strategic Cooperation',
    areaSix: 'Local Business Resource Matching',

    expectationLabel: 'OUR EXPECTATIONS',
    expectationTitle: 'What We Care About',
    expectationDescription:
      'We value partners who can provide real resources, clear communication, stable cooperation attitude and long-term business potential.',

    expectationOne: 'Real business resources',
    expectationTwo: 'Clear market direction',
    expectationThree: 'Stable communication',
    expectationFour: 'Long-term cooperation mindset',

    ctaLabel: 'START COOPERATION',
    ctaTitle: 'Contact Us for Business Cooperation',
    ctaDescription:
      'If you have business resources, regional channels or cooperation opportunities, please contact us directly through Telegram or WhatsApp.',
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
          {{ pageText.areasLabel }}
        </p>

        <h2>
          {{ pageText.areasTitle }}
        </h2>
      </div>

      <div class="list-panel">
        <div class="list-item">
          <strong>{{ pageText.areaOne }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.areaTwo }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.areaThree }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.areaFour }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.areaFive }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.areaSix }}</strong>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="split-content">
        <div>
          <p class="section-label">
            {{ pageText.expectationLabel }}
          </p>

          <h2>
            {{ pageText.expectationTitle }}
          </h2>

          <p>
            {{ pageText.expectationDescription }}
          </p>
        </div>

        <div class="expectation-list">
          <div class="expectation-item">
            <strong>{{ pageText.expectationOne }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.expectationTwo }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.expectationThree }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.expectationFour }}</strong>
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
  min-height: 260px;
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
.expectation-item strong {
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

  .list-panel {
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
  .list-panel {
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