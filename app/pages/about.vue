<script setup lang="ts">
useSeoMeta({
  title: '关于我们 - 艾塔达克',
  description: '了解艾塔达克的使命、愿景和团队，我们致力于让 AI 技术普惠每一位开发者和企业。'
})

const milestones = [
  { year: '2022', title: '公司成立', description: '艾塔达克在深圳成立，开始 AI 云服务的研发。' },
  { year: '2023', title: '产品上线', description: 'AI 云服务平台正式上线，首批客户接入使用。' },
  { year: '2024', title: '硬件发布', description: 'Edge Pro 边缘计算设备发布，实现云边协同。' },
  { year: '2025', title: '规模扩展', description: '服务企业客户超过 1000 家，API 日调用量突破千万。' }
]

const values = [
  { icon: 'i-lucide-lightbulb', title: '创新驱动', description: '持续探索前沿 AI 技术，为客户提供最先进的解决方案。' },
  { icon: 'i-lucide-users', title: '客户至上', description: '始终以客户需求为导向，提供优质的产品和服务体验。' },
  { icon: 'i-lucide-shield-check', title: '安全可靠', description: '严格保护用户数据安全，构建可信赖的 AI 服务平台。' },
  { icon: 'i-lucide-heart', title: '开放共享', description: '推动 AI 技术普惠化，让更多人受益于人工智能。' }
]

const team = [
  { name: '创始人 & CEO', avatar: 'https://ui-avatars.com/api/?name=CEO&background=6366f1&color=fff&size=120', description: '前大厂 AI 技术负责人，10+ 年 AI 研发经验' },
  { name: 'CTO', avatar: 'https://ui-avatars.com/api/?name=CTO&background=8b5cf6&color=fff&size=120', description: '分布式系统专家，主导多个大型 AI 平台架构' },
  { name: '产品 VP', avatar: 'https://ui-avatars.com/api/?name=VP&background=ec4899&color=fff&size=120', description: '资深产品经理，专注于 AI 产品设计与用户体验' }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <UPageHero
      title="关于艾塔达克"
      description="我们致力于让 AI 技术简单易用，帮助每一位开发者和企业释放智能创新的潜力。"
    />

    <UContainer>
      <!-- Mission & Vision -->
      <UPageSection>
        <div class="grid md:grid-cols-2 gap-8">
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-target" class="w-6 h-6 text-primary" />
                <h3 class="text-xl font-semibold">我们的使命</h3>
              </div>
            </template>
            <p class="text-muted">
              让 AI 技术触手可及，为开发者和企业提供简单、高效、可靠的智能服务，推动人工智能技术的广泛应用和普惠发展。
            </p>
          </UCard>
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <UIcon name="i-lucide-eye" class="w-6 h-6 text-primary" />
                <h3 class="text-xl font-semibold">我们的愿景</h3>
              </div>
            </template>
            <p class="text-muted">
              成为全球领先的 AI 云服务提供商，构建开放、智能、可信赖的人工智能生态系统，助力千行百业数字化转型。
            </p>
          </UCard>
        </div>
      </UPageSection>

      <!-- Core Values -->
      <UPageSection
        title="核心价值观"
        description="这些价值观指引我们的每一个决策和行动"
      >
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <UCard v-for="value in values" :key="value.title" class="text-center">
            <UIcon :name="value.icon" class="w-10 h-10 text-primary mx-auto mb-4" />
            <h4 class="font-semibold mb-2">{{ value.title }}</h4>
            <p class="text-sm text-muted">{{ value.description }}</p>
          </UCard>
        </div>
      </UPageSection>

      <!-- Milestones -->
      <UPageSection
        title="发展历程"
        description="记录我们成长的每一个重要时刻"
      >
        <div class="max-w-3xl mx-auto">
          <div class="space-y-8">
            <div v-for="milestone in milestones" :key="milestone.year" class="flex gap-6">
              <div class="shrink-0 w-20 text-right">
                <span class="text-2xl font-bold text-primary">{{ milestone.year }}</span>
              </div>
              <div class="flex-1 pb-8 border-l-2 border-default pl-6 relative">
                <div class="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2" />
                <h4 class="font-semibold mb-1">{{ milestone.title }}</h4>
                <p class="text-muted">{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </UPageSection>

      <!-- Team -->
      <UPageSection
        title="核心团队"
        description="一群热爱 AI 技术的专业团队"
      >
        <div class="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div v-for="member in team" :key="member.name" class="text-center">
            <UAvatar :src="member.avatar" size="3xl" class="mx-auto mb-4" />
            <h4 class="font-semibold">{{ member.name }}</h4>
            <p class="text-sm text-muted mt-1">{{ member.description }}</p>
          </div>
        </div>
      </UPageSection>

      <!-- CTA -->
      <UPageSection class="text-center">
        <h2 class="text-2xl font-bold mb-4">加入我们，共创未来</h2>
        <p class="text-muted mb-6">我们正在寻找志同道合的伙伴，一起推动 AI 技术的发展</p>
        <div class="flex justify-center gap-4">
          <UButton to="/careers" size="lg">
            查看职位
          </UButton>
          <UButton to="/contact" size="lg" color="neutral" variant="subtle">
            联系我们
          </UButton>
        </div>
      </UPageSection>
    </UContainer>
  </div>
</template>
