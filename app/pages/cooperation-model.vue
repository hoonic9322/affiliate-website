<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const pageText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      seoTitle: '合作模式 | 合作伙伴与商务合作',
      seoDescription:
        '招商、代理、流量和远程技术合作的灵活合作模式。',

      heroLabel: '合作模式',
      heroTitle: '灵活合作模式',
      heroDescription:
        '我们会根据合作伙伴类型、资源情况、市场方向、技术能力和长期合作目标，提供不同类型的合作方式。',

      mainLabel: '主要合作类型',
      mainTitle: '四大主要合作方向',
      mainDescription:
        '本网站主要面向四类合作伙伴：招商合作、代理合作、流量合作和远程技术合作。',

      businessTitle: '招商合作',
      businessDescription:
        '适合拥有商务资源、区域渠道、商业关系或战略合作机会的合作伙伴。',

      agentTitle: '代理合作',
      agentDescription:
        '适合代理团队、本地推广人员、社群运营者和可以运营用户资源的合作伙伴。',

      trafficTitle: '流量合作',
      trafficDescription:
        '适合网站站长、SEO 团队、广告投放团队、社群资源方、KOL 和流量合作伙伴。',

      technologyTitle: '远程技术合作',
      technologyDescription:
        '适合远程软件公司、开发团队、UI/UX 团队、测试团队、运维团队和技术服务商。',

      commercialLabel: '商务类合作',
      commercialTitle: '招商、代理与流量合作',
      commercialDescription:
        '商务类合作可以根据市场资源、用户资源、流量质量、推广渠道和合作规模进行沟通。',

      commercialOne: '商务资源合作',
      commercialTwo: '区域市场合作',
      commercialThree: '代理合作',
      commercialFour: '社群合作',
      commercialFive: 'CPA 合作',
      commercialSix: '收入分成合作',
      commercialSeven: '固定广告位合作',
      commercialEight: '混合合作模式',
      commercialNine: '长期渠道合作',

      techLabel: '技术合作',
      techTitle: '远程技术合作',
      techDescription:
        '技术合作可以根据项目范围、所需技术能力、交付周期、维护需求和长期支持能力进行安排。',

      techOne: '项目制开发',
      techTwo: '长期维护合作',
      techThree: '月度技术支持',
      techFour: '专属远程团队',
      techFive: '技术顾问合作',
      techSix: '紧急问题修复支持',

      processLabel: '如何开始',
      processTitle: '简单直接的合作沟通流程',
      processDescription:
        '第一阶段我们不设计复杂申请表单。合作方可以直接通过 Telegram 或 WhatsApp 联系我们。',

      stepOneTitle: '联系我们',
      stepOneDescription:
        '通过 Telegram 或 WhatsApp 直接联系我们。',

      stepTwoTitle: '介绍你的资源',
      stepTwoDescription:
        '简单说明你的合作类型、所在市场、资源情况、团队背景或技术能力。',

      stepThreeTitle: '沟通合作方式',
      stepThreeDescription:
        '根据你的情况和我们的需求，沟通适合的合作方式。',

      stepFourTitle: '开始合作',
      stepFourDescription:
        '双方确认合作方向后，即可推进后续合作安排。',

      ctaLabel: '开始合作',
      ctaTitle: '沟通适合的合作模式',
      ctaDescription:
        '无论你是招商合作方、代理合作方、流量合作方或技术合作方，都可以直接联系我们沟通合作机会。',
      telegram: 'Telegram 联系',
      whatsapp: 'WhatsApp 联系'
    }
  }

  return {
    seoTitle: 'Cooperation Model | Partner Cooperation',
    seoDescription:
      'Flexible cooperation models for business partnership, agent partnership, traffic partnership and remote technology partnership.',

    heroLabel: 'COOPERATION MODEL',
    heroTitle: 'Flexible Cooperation Models',
    heroDescription:
      'We support different cooperation models based on partner type, available resources, market direction, technical capability and long-term cooperation goals.',

    mainLabel: 'MAIN COOPERATION TYPES',
    mainTitle: 'Four Main Cooperation Directions',
    mainDescription:
      'Our cooperation website focuses on four main partner categories: business partnership, agent partnership, traffic partnership and remote technology partnership.',

    businessTitle: 'Business Partnership',
    businessDescription:
      'Suitable for partners with business resources, regional channels, commercial connections or strategic cooperation opportunities.',

    agentTitle: 'Agent Partnership',
    agentDescription:
      'Suitable for agent teams, local promoters, community operators and partners who can manage user resources.',

    trafficTitle: 'Traffic Partnership',
    trafficDescription:
      'Suitable for website owners, SEO teams, media buyers, community resources, KOLs and affiliate traffic partners.',

    technologyTitle: 'Technology Partnership',
    technologyDescription:
      'Suitable for remote software companies, development teams, UI/UX teams, QA teams, DevOps teams and technical service providers.',

    commercialLabel: 'COMMERCIAL COOPERATION',
    commercialTitle: 'Business, Agent and Traffic Cooperation',
    commercialDescription:
      'Commercial cooperation can be discussed based on market resources, user resources, traffic quality, promotion channels and cooperation scale.',

    commercialOne: 'Business Resource Cooperation',
    commercialTwo: 'Regional Market Cooperation',
    commercialThree: 'Agent Cooperation',
    commercialFour: 'Community Cooperation',
    commercialFive: 'CPA Cooperation',
    commercialSix: 'Revenue Share Cooperation',
    commercialSeven: 'Fixed Advertising Placement',
    commercialEight: 'Hybrid Cooperation Model',
    commercialNine: 'Long-Term Channel Cooperation',

    techLabel: 'TECHNOLOGY COOPERATION',
    techTitle: 'Remote Technical Cooperation',
    techDescription:
      'Technical cooperation can be arranged based on project scope, required skills, delivery timeline, maintenance needs and long-term support capability.',

    techOne: 'Project-Based Development',
    techTwo: 'Long-Term Maintenance',
    techThree: 'Monthly Technical Support',
    techFour: 'Dedicated Remote Team',
    techFive: 'Technical Consulting',
    techSix: 'Urgent Bug Fix Support',

    processLabel: 'HOW WE START',
    processTitle: 'Simple Cooperation Discussion Process',
    processDescription:
      'In the first phase, we do not use a complicated application form. Partners can contact us directly through Telegram or WhatsApp.',

    stepOneTitle: 'Contact Us',
    stepOneDescription:
      'Contact our team directly through Telegram or WhatsApp.',

    stepTwoTitle: 'Introduce Your Resources',
    stepTwoDescription:
      'Tell us your cooperation type, market, resources, team background or technical capability.',

    stepThreeTitle: 'Discuss Cooperation Model',
    stepThreeDescription:
      'We discuss a suitable cooperation model based on your situation and our needs.',

    stepFourTitle: 'Start Cooperation',
    stepFourDescription:
      'After both sides confirm the cooperation direction, we can proceed with the next steps.',

    ctaLabel: 'START COOPERATION',
    ctaTitle: 'Discuss the Right Cooperation Model',
    ctaDescription:
      'Whether you are a business partner, agent partner, traffic partner or technology partner, you can contact us directly to discuss cooperation opportunities.',
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
  <main class="model-page">
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
          {{ pageText.mainLabel }}
        </p>

        <h2>
          {{ pageText.mainTitle }}
        </h2>

        <p>
          {{ pageText.mainDescription }}
        </p>
      </div>

      <div class="model-grid">
        <NuxtLink to="/business-partner" class="model-card">
          <div class="model-number">01</div>
          <h3>{{ pageText.businessTitle }}</h3>
          <p>{{ pageText.businessDescription }}</p>
        </NuxtLink>

        <NuxtLink to="/agent-partner" class="model-card">
          <div class="model-number">02</div>
          <h3>{{ pageText.agentTitle }}</h3>
          <p>{{ pageText.agentDescription }}</p>
        </NuxtLink>

        <NuxtLink to="/traffic-partner" class="model-card">
          <div class="model-number">03</div>
          <h3>{{ pageText.trafficTitle }}</h3>
          <p>{{ pageText.trafficDescription }}</p>
        </NuxtLink>

        <NuxtLink to="/technology-partner" class="model-card">
          <div class="model-number">04</div>
          <h3>{{ pageText.technologyTitle }}</h3>
          <p>{{ pageText.technologyDescription }}</p>
        </NuxtLink>
      </div>
    </section>

    <section class="content-section light-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.commercialLabel }}
        </p>

        <h2>
          {{ pageText.commercialTitle }}
        </h2>

        <p>
          {{ pageText.commercialDescription }}
        </p>
      </div>

      <div class="list-panel">
        <div class="list-item">
          <strong>{{ pageText.commercialOne }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.commercialTwo }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.commercialThree }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.commercialFour }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.commercialFive }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.commercialSix }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.commercialSeven }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.commercialEight }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.commercialNine }}</strong>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="split-content">
        <div>
          <p class="section-label">
            {{ pageText.techLabel }}
          </p>

          <h2>
            {{ pageText.techTitle }}
          </h2>

          <p>
            {{ pageText.techDescription }}
          </p>
        </div>

        <div class="highlight-panel">
          <div class="highlight-item">
            <strong>{{ pageText.techOne }}</strong>
          </div>

          <div class="highlight-item">
            <strong>{{ pageText.techTwo }}</strong>
          </div>

          <div class="highlight-item">
            <strong>{{ pageText.techThree }}</strong>
          </div>

          <div class="highlight-item">
            <strong>{{ pageText.techFour }}</strong>
          </div>

          <div class="highlight-item">
            <strong>{{ pageText.techFive }}</strong>
          </div>

          <div class="highlight-item">
            <strong>{{ pageText.techSix }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section light-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.processLabel }}
        </p>

        <h2>
          {{ pageText.processTitle }}
        </h2>

        <p>
          {{ pageText.processDescription }}
        </p>
      </div>

      <div class="step-grid">
        <div class="step-card">
          <div class="step-number">01</div>
          <h3>{{ pageText.stepOneTitle }}</h3>
          <p>{{ pageText.stepOneDescription }}</p>
        </div>

        <div class="step-card">
          <div class="step-number">02</div>
          <h3>{{ pageText.stepTwoTitle }}</h3>
          <p>{{ pageText.stepTwoDescription }}</p>
        </div>

        <div class="step-card">
          <div class="step-number">03</div>
          <h3>{{ pageText.stepThreeTitle }}</h3>
          <p>{{ pageText.stepThreeDescription }}</p>
        </div>

        <div class="step-card">
          <div class="step-number">04</div>
          <h3>{{ pageText.stepFourTitle }}</h3>
          <p>{{ pageText.stepFourDescription }}</p>
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
.model-page {
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
.step-card p {
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

.model-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.model-card {
  display: block;
  min-height: 300px;
  padding: 28px;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  background: #ffffff;
  color: inherit;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
  transition: 0.2s ease;
}

.model-card:hover {
  transform: translateY(-4px);
  border-color: rgba(22, 135, 217, 0.45);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.09);
}

.model-number,
.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  margin-bottom: 22px;
  border-radius: 14px;
  background: #eef6fd;
  color: #1687d9;
  font-weight: 900;
}

.model-card h3,
.step-card h3 {
  margin: 0 0 14px;
  color: #07112a;
  font-size: 20px;
  line-height: 1.35;
}

.model-card p {
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

.list-item,
.highlight-item {
  padding: 20px;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  background: #f8fafc;
}

.list-item strong,
.highlight-item strong {
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

.highlight-panel {
  display: grid;
  gap: 14px;
}

.step-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.step-card {
  min-height: 240px;
  padding: 26px;
  border-radius: 18px;
  background: #f8fafc;
  border: 1px solid #e5e7eb;
}

.step-card p {
  font-size: 15px;
  color: #475569;
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
  .model-grid,
  .step-grid {
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

  .model-grid,
  .step-grid,
  .list-panel {
    grid-template-columns: 1fr;
  }

  .model-card,
  .step-card {
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