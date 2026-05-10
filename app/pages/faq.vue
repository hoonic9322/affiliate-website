<script setup lang="ts">
import { computed } from 'vue'

const { currentLanguage } = useLanguage()

const pageText = computed(() => {
  if (currentLanguage.value === 'zh') {
    return {
      seoTitle: '常见问题 | 合作伙伴与商务合作',
      seoDescription:
        '招商、代理、流量和远程技术合作常见问题。',

      heroLabel: '常见问题',
      heroTitle: '常见问题',
      heroDescription:
        '这里整理了招商合作方、代理合作方、流量合作方和远程技术团队常见的合作问题。',

      generalLabel: '一般问题',
      generalTitle: '合作常见问题',

      q1: '你们正在寻找哪些类型的合作伙伴？',
      a1: '我们主要寻找四类合作伙伴：招商合作方、代理合作方、流量合作方和远程技术合作方。',

      q2: '我要如何开始合作？',
      a2: '你可以直接通过 Telegram 或 WhatsApp 联系我们。请简单说明你的合作类型、所在市场、资源情况和期望合作方式。',

      q3: '是否需要填写申请表？',
      a3: '第一阶段我们不设计复杂申请表单。合作方可以直接通过 Telegram 或 WhatsApp 联系我们。',

      q4: '个人可以合作吗？还是只接受公司？',
      a4: '个人和公司都可以联系我们。但我们会根据真实资源、实际能力、沟通质量和长期合作潜力进行评估。',

      businessLabel: '招商与代理合作',
      businessTitle: '招商与代理合作问题',

      q5: '什么是招商合作？',
      a5: '招商合作适合拥有商务资源、区域市场资源、渠道资源、客户关系或战略合作机会的合作方。',

      q6: '什么是代理合作？',
      a6: '代理合作适合代理团队、本地推广人员、社群运营者，以及可以开发或长期运营用户资源的合作伙伴。',

      q7: '代理合作方需要提供什么资料？',
      a7: '代理合作方可以简单提供所在市场、推广方式、用户资源、社群资源、团队背景和期望合作方式。',

      q8: '合作模式是固定的吗？',
      a8: '不是固定的。合作方式可以根据合作方资源、市场情况、合作规模和长期发展潜力进行沟通。',

      trafficLabel: '流量合作',
      trafficTitle: '流量合作问题',

      q9: '你们接受哪些流量渠道？',
      a9: '我们接受 SEO 流量、网站流量、社交媒体流量、Telegram 和 WhatsApp 社群、KOL 资源、付费广告流量、内容推广和区域市场渠道。',

      q10: '流量合作可以有哪些合作方式？',
      a10: '流量合作可以包括 CPA、收入分成、固定广告位、内容推广、混合合作或长期流量采购。',

      q11: '你们在流量合作中关注什么？',
      a11: '我们关注真实流量来源、目标市场是否匹配、流量质量、推广渠道是否稳定、基础数据是否透明，以及是否具备长期合作潜力。',

      q12: '你们接受 SEO 团队合作吗？',
      a12: '接受。拥有排名资源、网站资源、内容能力或搜索流量资源的 SEO 团队可以直接联系我们。',

      techLabel: '技术合作',
      techTitle: '技术合作问题',

      q13: '你们寻找什么类型的技术合作伙伴？',
      a13: '我们寻找软件开发公司、远程开发团队、UI/UX 团队、测试团队、运维团队、数据库专家和技术顾问。',

      q14: '你们可能需要哪些技术服务？',
      a14: '我们可能需要网站开发、前端开发、后端开发、后台系统开发、API 对接、数据库设计、测试、部署和系统维护。',

      q15: '是否接受远程合作？',
      a15: '接受远程合作。但合作方需要具备稳定沟通、负责任交付、版本管理规范和长期支持能力。',

      q16: '技术合作是否需要签保密协议？',
      a16: '如果项目涉及保密资料、源代码、系统权限或业务敏感数据，合作前可能需要签署保密协议或相关合作文件。',

      ctaLabel: '联系我们',
      ctaTitle: '还有其他问题？',
      ctaDescription:
        '你可以直接通过 Telegram 或 WhatsApp 联系我们。我们会根据你的合作类型进一步沟通合作细节。',
      telegram: 'Telegram 联系',
      whatsapp: 'WhatsApp 联系'
    }
  }

  return {
    seoTitle: 'FAQ | Partner Cooperation',
    seoDescription:
      'Frequently asked questions about business partnership, agent partnership, traffic partnership and remote technology cooperation.',

    heroLabel: 'FAQ',
    heroTitle: 'Frequently Asked Questions',
    heroDescription:
      'Here are common questions for business partners, agents, traffic partners and remote technology teams who are interested in cooperation.',

    generalLabel: 'GENERAL QUESTIONS',
    generalTitle: 'Cooperation Questions',

    q1: 'What types of partners are you looking for?',
    a1: 'We are looking for four main types of partners: business partners, agent partners, traffic partners and remote technology partners.',

    q2: 'How can I start cooperation?',
    a2: 'You can contact us directly through Telegram or WhatsApp. Please briefly introduce your cooperation type, market, resources and expected cooperation model.',

    q3: 'Do I need to submit an application form?',
    a3: 'In the first phase, we do not use a complicated application form. Direct communication through Telegram or WhatsApp is preferred.',

    q4: 'Can individuals cooperate, or only companies?',
    a4: 'Both individuals and companies can contact us. However, we will evaluate cooperation based on real resources, capability, communication quality and long-term cooperation potential.',

    businessLabel: 'BUSINESS & AGENT PARTNERS',
    businessTitle: 'Business and Agent Cooperation',

    q5: 'What is business partnership?',
    a5: 'Business partnership is suitable for partners with business resources, regional market resources, channel resources, client connections or strategic cooperation opportunities.',

    q6: 'What is agent partnership?',
    a6: 'Agent partnership is suitable for agent teams, local promoters, community operators and partners who can develop or manage long-term user resources.',

    q7: 'What information should agent partners provide?',
    a7: 'Agent partners can briefly provide their market, promotion method, user resources, community resources, team background and expected cooperation model.',

    q8: 'Is the cooperation model fixed?',
    a8: 'No. The cooperation model can be discussed based on partner resources, market conditions, cooperation scale and long-term development potential.',

    trafficLabel: 'TRAFFIC PARTNERS',
    trafficTitle: 'Traffic Cooperation Questions',

    q9: 'What traffic channels do you accept?',
    a9: 'We are open to SEO traffic, website traffic, social media traffic, Telegram and WhatsApp communities, KOL resources, paid advertising traffic, content promotion and regional market channels.',

    q10: 'What cooperation models are available for traffic partners?',
    a10: 'Traffic cooperation may include CPA, revenue share, fixed advertising placement, content promotion, hybrid cooperation or long-term traffic purchase.',

    q11: 'What do you care about in traffic cooperation?',
    a11: 'We care about real traffic source, target market match, traffic quality, stable promotion channel, basic data transparency and long-term cooperation potential.',

    q12: 'Do you accept SEO teams?',
    a12: 'Yes. SEO teams with ranking resources, website networks, content capability or search traffic resources can contact us directly.',

    techLabel: 'TECHNOLOGY PARTNERS',
    techTitle: 'Technology Cooperation Questions',

    q13: 'What kind of technology partners are you looking for?',
    a13: 'We are looking for software development companies, remote development teams, UI/UX teams, QA teams, DevOps teams, database specialists and technical consultants.',

    q14: 'What technical services may be needed?',
    a14: 'We may need website development, frontend development, backend development, admin system development, API integration, database design, testing, deployment and system maintenance.',

    q15: 'Is remote cooperation accepted?',
    a15: 'Yes. Remote cooperation is accepted, but the partner should have stable communication, responsible delivery, version control discipline and long-term support capability.',

    q16: 'Do technology partners need to sign NDA?',
    a16: 'For projects involving confidential information, source code, system access or business-sensitive data, NDA or other agreement may be required before cooperation.',

    ctaLabel: 'CONTACT US',
    ctaTitle: 'Still Have Questions?',
    ctaDescription:
      'Contact us directly through Telegram or WhatsApp. Our team will discuss the cooperation details with you based on your partner type.',
    telegram: 'Telegram',
    whatsapp: 'WhatsApp'
  }
})

const faqSections = computed(() => [
  {
    label: pageText.value.generalLabel,
    title: pageText.value.generalTitle,
    light: false,
    items: [
      { q: pageText.value.q1, a: pageText.value.a1 },
      { q: pageText.value.q2, a: pageText.value.a2 },
      { q: pageText.value.q3, a: pageText.value.a3 },
      { q: pageText.value.q4, a: pageText.value.a4 }
    ]
  },
  {
    label: pageText.value.businessLabel,
    title: pageText.value.businessTitle,
    light: true,
    items: [
      { q: pageText.value.q5, a: pageText.value.a5 },
      { q: pageText.value.q6, a: pageText.value.a6 },
      { q: pageText.value.q7, a: pageText.value.a7 },
      { q: pageText.value.q8, a: pageText.value.a8 }
    ]
  },
  {
    label: pageText.value.trafficLabel,
    title: pageText.value.trafficTitle,
    light: false,
    items: [
      { q: pageText.value.q9, a: pageText.value.a9 },
      { q: pageText.value.q10, a: pageText.value.a10 },
      { q: pageText.value.q11, a: pageText.value.a11 },
      { q: pageText.value.q12, a: pageText.value.a12 }
    ]
  },
  {
    label: pageText.value.techLabel,
    title: pageText.value.techTitle,
    light: true,
    items: [
      { q: pageText.value.q13, a: pageText.value.a13 },
      { q: pageText.value.q14, a: pageText.value.a14 },
      { q: pageText.value.q15, a: pageText.value.a15 },
      { q: pageText.value.q16, a: pageText.value.a16 }
    ]
  }
])

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
  <main class="faq-page">
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

    <section
      v-for="section in faqSections"
      :key="section.title"
      :class="['content-section', { 'light-section': section.light }]"
    >
      <div class="section-heading">
        <p class="section-label">
          {{ section.label }}
        </p>

        <h2>
          {{ section.title }}
        </h2>
      </div>

      <div class="faq-list">
        <div
          v-for="item in section.items"
          :key="item.q"
          class="faq-item"
        >
          <h3>
            {{ item.q }}
          </h3>

          <p>
            {{ item.a }}
          </p>
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
.faq-page {
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
.cta-card p,
.faq-item p {
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
.cta-card h2 {
  margin: 0 0 16px;
  color: #07112a;
  font-size: 38px;
  line-height: 1.2;
  letter-spacing: -0.03em;
}

.faq-list {
  display: grid;
  gap: 16px;
}

.faq-item {
  padding: 26px 28px;
  border: 1px solid #e5e7eb;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.04);
}

.light-section .faq-item {
  background: #f8fafc;
}

.faq-item h3 {
  margin: 0 0 14px;
  color: #07112a;
  font-size: 20px;
  line-height: 1.35;
}

.faq-item p {
  color: #475569;
  font-size: 15px;
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
  .cta-card h2 {
    font-size: 30px;
  }

  .content-section,
  .cta-section {
    padding: 36px 16px;
  }

  .faq-item {
    padding: 22px;
    border-radius: 16px;
  }

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