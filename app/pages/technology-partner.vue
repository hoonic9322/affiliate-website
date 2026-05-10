<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const pageText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      seoTitle: '远程技术合作 | 合作伙伴与商务合作',
      seoDescription:
        '面向软件公司、远程开发团队、UI/UX、QA、DevOps 和技术服务商。',

      heroLabel: '远程技术合作',
      heroTitle: '远程技术合作',
      heroDescription:
        '我们正在寻找稳定可靠的远程技术公司、软件开发团队、技术服务供应商和长期技术合作伙伴。',

      targetLabel: '我们寻找谁',
      targetTitle: '适合的技术合作对象',

      cardOneTitle: '软件开发公司',
      cardOneDescription:
        '适合具备网站开发、系统开发、后台管理系统和业务平台开发经验的软件公司。',

      cardTwoTitle: '远程开发团队',
      cardTwoDescription:
        '适合可以远程支持前端、后端、全栈开发、API 对接和长期项目维护的开发团队。',

      cardThreeTitle: 'UI/UX 与产品团队',
      cardThreeDescription:
        '适合可以支持界面设计、用户体验设计、原型设计和产品需求梳理的团队。',

      cardFourTitle: '测试、运维与技术支持',
      cardFourDescription:
        '适合可以支持测试、部署、服务器维护、数据库优化和技术问题处理的团队。',

      serviceLabel: '技术服务',
      serviceTitle: '我们可能需要的技术服务',

      serviceOne: '网站开发',
      serviceTwo: '后台管理系统开发',
      serviceThree: '前端开发',
      serviceFour: '后端开发',
      serviceFive: 'API 对接',
      serviceSix: '数据库设计',
      serviceSeven: 'UI/UX 设计',
      serviceEight: '测试服务',
      serviceNine: '部署与维护',

      stackLabel: '技术能力',
      stackTitle: '现代 Web 开发能力',
      stackDescription:
        '我们不限制合作方必须使用某一种技术栈，但合作方需要具备现代 Web 开发、API 对接、数据库设计、部署维护和版本管理能力。',

      stackOne: '前端框架能力',
      stackTwo: '后端开发能力',
      stackThree: '数据库与缓存能力',
      stackFour: '部署、运维与版本管理',

      modelLabel: '合作模式',
      modelTitle: '灵活的技术合作方式',

      modelOne: '项目制合作',
      modelTwo: '长期维护合作',
      modelThree: '月度技术支持',
      modelFour: '专属远程团队',
      modelFive: '技术顾问合作',
      modelSix: '紧急问题修复支持',

      expectationLabel: '我们的关注点',
      expectationTitle: '我们关注什么',
      expectationDescription:
        '我们重视沟通清晰、交付负责、重视项目保密，并可以长期稳定配合的技术合作伙伴。',

      expectationOne: '真实项目经验',
      expectationTwo: '清晰技术沟通',
      expectationThree: '稳定交付能力',
      expectationFour: '保密意识',
      expectationFive: '版本管理规范',
      expectationSix: '长期支持意识',

      ctaLabel: '开始合作',
      ctaTitle: '联系我们开始远程技术合作',
      ctaDescription:
        '如果你的公司或团队有兴趣成为我们的远程技术合作伙伴，可以直接通过 Telegram 或 WhatsApp 联系我们。',
      telegram: 'Telegram 联系',
      whatsapp: 'WhatsApp 联系'
    }
  }

  return {
    seoTitle: 'Technology Partnership | Partner Cooperation',
    seoDescription:
      'Remote technology partnership opportunities for software companies, development teams, UI/UX, QA, DevOps and technical service providers.',

    heroLabel: 'TECHNOLOGY PARTNERSHIP',
    heroTitle: 'Remote Technology Partnership',
    heroDescription:
      'We are looking for reliable remote technology companies, software development teams, technical service providers and long-term technical partners.',

    targetLabel: 'WHO WE ARE LOOKING FOR',
    targetTitle: 'Suitable Technology Partners',

    cardOneTitle: 'Software Development Companies',
    cardOneDescription:
      'Companies with experience in website development, system development, backend management systems and business platform development.',

    cardTwoTitle: 'Remote Development Teams',
    cardTwoDescription:
      'Teams that can support frontend, backend, full-stack development, API integration and long-term project maintenance remotely.',

    cardThreeTitle: 'UI/UX & Product Teams',
    cardThreeDescription:
      'Teams that can support interface design, user experience design, prototype design and product requirement clarification.',

    cardFourTitle: 'QA, DevOps & Technical Support',
    cardFourDescription:
      'Teams that can support testing, deployment, server maintenance, database optimization and technical troubleshooting.',

    serviceLabel: 'TECHNICAL SERVICES',
    serviceTitle: 'Services We May Need',

    serviceOne: 'Website Development',
    serviceTwo: 'Admin System Development',
    serviceThree: 'Frontend Development',
    serviceFour: 'Backend Development',
    serviceFive: 'API Integration',
    serviceSix: 'Database Design',
    serviceSeven: 'UI/UX Design',
    serviceEight: 'QA Testing',
    serviceNine: 'Deployment & Maintenance',

    stackLabel: 'TECHNOLOGY STACK',
    stackTitle: 'Modern Web Development Capability',
    stackDescription:
      'We do not limit partners to only one technology stack, but partners should have solid experience in modern web development, API integration, database design, deployment and version control.',

    stackOne: 'Vue / Nuxt / React / Next.js',
    stackTwo: 'ASP.NET Core / Node.js / Laravel / Java',
    stackThree: 'MSSQL / MySQL / PostgreSQL / Redis',
    stackFour: 'Docker / Linux / Cloudflare / Git',

    modelLabel: 'COOPERATION MODELS',
    modelTitle: 'Flexible Technical Cooperation',

    modelOne: 'Project-Based Cooperation',
    modelTwo: 'Long-Term Maintenance',
    modelThree: 'Monthly Technical Support',
    modelFour: 'Dedicated Remote Team',
    modelFive: 'Technical Consulting',
    modelSix: 'Urgent Bug Fix Support',

    expectationLabel: 'OUR EXPECTATIONS',
    expectationTitle: 'What We Care About',
    expectationDescription:
      'We value technology partners who can communicate clearly, deliver responsibly, protect project confidentiality and support long-term collaboration.',

    expectationOne: 'Real project experience',
    expectationTwo: 'Clear technical communication',
    expectationThree: 'Stable delivery capability',
    expectationFour: 'Confidentiality awareness',
    expectationFive: 'Version control discipline',
    expectationSix: 'Long-term support mindset',

    ctaLabel: 'START COOPERATION',
    ctaTitle: 'Contact Us for Technology Cooperation',
    ctaDescription:
      'If your company or team is interested in remote technical cooperation, please contact us directly through Telegram or WhatsApp.',
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
          {{ pageText.serviceLabel }}
        </p>

        <h2>
          {{ pageText.serviceTitle }}
        </h2>
      </div>

      <div class="list-panel">
        <div class="list-item">
          <strong>{{ pageText.serviceOne }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.serviceTwo }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.serviceThree }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.serviceFour }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.serviceFive }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.serviceSix }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.serviceSeven }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.serviceEight }}</strong>
        </div>

        <div class="list-item">
          <strong>{{ pageText.serviceNine }}</strong>
        </div>
      </div>
    </section>

    <section class="content-section">
      <div class="split-content">
        <div>
          <p class="section-label">
            {{ pageText.stackLabel }}
          </p>

          <h2>
            {{ pageText.stackTitle }}
          </h2>

          <p>
            {{ pageText.stackDescription }}
          </p>
        </div>

        <div class="expectation-list">
          <div class="expectation-item">
            <strong>{{ pageText.stackOne }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.stackTwo }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.stackThree }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.stackFour }}</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section light-section">
      <div class="section-heading">
        <p class="section-label">
          {{ pageText.modelLabel }}
        </p>

        <h2>
          {{ pageText.modelTitle }}
        </h2>
      </div>

      <div class="requirement-grid">
        <div class="requirement-card">
          <strong>{{ pageText.modelOne }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.modelTwo }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.modelThree }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.modelFour }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.modelFive }}</strong>
        </div>

        <div class="requirement-card">
          <strong>{{ pageText.modelSix }}</strong>
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

          <div class="expectation-item">
            <strong>{{ pageText.expectationFive }}</strong>
          </div>

          <div class="expectation-item">
            <strong>{{ pageText.expectationSix }}</strong>
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