<script setup lang="ts">
useSeoMeta({
  title: '加入我们 - 艾塔达克',
  description: '加入艾塔达克，与优秀的团队一起打造下一代 AI 云服务平台。'
})

const benefits = [
  { icon: 'i-lucide-banknote', title: '有竞争力的薪酬', description: '提供行业领先的薪资待遇和股权激励' },
  { icon: 'i-lucide-heart-pulse', title: '全面的福利保障', description: '五险一金、补充医疗、年度体检' },
  { icon: 'i-lucide-calendar-days', title: '弹性工作制度', description: '灵活的工作时间，支持远程办公' },
  { icon: 'i-lucide-graduation-cap', title: '学习成长机会', description: '技术分享、培训补贴、会议参与' },
  { icon: 'i-lucide-utensils', title: '免费餐饮零食', description: '提供午餐晚餐，无限量零食饮料' },
  { icon: 'i-lucide-gamepad-2', title: '丰富团建活动', description: '季度团建、年度旅游、节日福利' }
]

const positions = [
  {
    title: '高级后端工程师',
    department: '技术部',
    location: '深圳',
    type: '全职',
    description: '负责 AI 云服务平台核心系统的设计与开发，优化系统性能和稳定性。',
    requirements: ['5年以上后端开发经验', '熟悉 Go/Python/Java', '有分布式系统经验', '了解 AI/ML 相关技术优先']
  },
  {
    title: 'AI 算法工程师',
    department: '算法部',
    location: '深圳',
    type: '全职',
    description: '负责大语言模型的优化、微调和部署，提升模型推理效率。',
    requirements: ['硕士及以上学历', '熟悉 PyTorch/TensorFlow', '有 LLM 相关项目经验', '发表过相关论文优先']
  },
  {
    title: '前端开发工程师',
    department: '技术部',
    location: '深圳 / 远程',
    type: '全职',
    description: '负责控制台、官网等前端产品的开发和优化。',
    requirements: ['3年以上前端开发经验', '熟悉 Vue/React', '了解 Node.js', '有良好的审美和用户体验意识']
  },
  {
    title: '产品经理',
    department: '产品部',
    location: '深圳',
    type: '全职',
    description: '负责 AI 产品的规划、设计和迭代，推动产品持续优化。',
    requirements: ['3年以上产品经验', '了解 AI/云服务行业', '优秀的沟通协调能力', '有 To B 产品经验优先']
  },
  {
    title: '技术支持工程师',
    department: '客户成功部',
    location: '深圳',
    type: '全职',
    description: '为企业客户提供技术支持和解决方案咨询。',
    requirements: ['2年以上技术支持经验', '了解 API 接口开发', '良好的沟通表达能力', '有 AI 领域经验优先']
  }
]

const selectedPosition = ref<typeof positions[0] | null>(null)
const isModalOpen = ref(false)

function openPosition(position: typeof positions[0]) {
  selectedPosition.value = position
  isModalOpen.value = true
}
</script>

<template>
  <div>
    <UPageHero
      title="加入艾塔达克"
      description="与优秀的团队一起，打造下一代 AI 云服务平台，用技术改变世界。"
    >
      <template #links>
        <UButton to="#positions" size="xl" trailing-icon="i-lucide-arrow-down">
          查看职位
        </UButton>
      </template>
    </UPageHero>

    <UContainer>
      <!-- Why Join Us -->
      <UPageSection
        title="为什么加入我们"
        description="我们为每一位员工提供最好的工作环境和发展机会"
      >
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <UCard v-for="benefit in benefits" :key="benefit.title">
            <div class="flex items-start gap-4">
              <UIcon :name="benefit.icon" class="w-8 h-8 text-primary shrink-0" />
              <div>
                <h4 class="font-semibold mb-1">{{ benefit.title }}</h4>
                <p class="text-sm text-muted">{{ benefit.description }}</p>
              </div>
            </div>
          </UCard>
        </div>
      </UPageSection>

      <!-- Open Positions -->
      <UPageSection
        id="positions"
        title="开放职位"
        description="我们正在寻找以下岗位的优秀人才"
      >
        <div class="space-y-4 max-w-4xl mx-auto">
          <UCard
            v-for="position in positions"
            :key="position.title"
            class="cursor-pointer hover:ring-primary transition-all"
            @click="openPosition(position)"
          >
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 class="text-lg font-semibold">{{ position.title }}</h3>
                <div class="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted">
                  <span class="flex items-center gap-1">
                    <UIcon name="i-lucide-building-2" class="w-4 h-4" />
                    {{ position.department }}
                  </span>
                  <span class="flex items-center gap-1">
                    <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
                    {{ position.location }}
                  </span>
                  <span class="flex items-center gap-1">
                    <UIcon name="i-lucide-briefcase" class="w-4 h-4" />
                    {{ position.type }}
                  </span>
                </div>
              </div>
              <UButton color="neutral" variant="subtle" trailing-icon="i-lucide-chevron-right">
                查看详情
              </UButton>
            </div>
          </UCard>
        </div>
      </UPageSection>

      <!-- CTA -->
      <UPageSection class="text-center">
        <h2 class="text-2xl font-bold mb-4">没有找到合适的职位？</h2>
        <p class="text-muted mb-6">发送您的简历到 hr@atdak.com，我们会为您匹配合适的机会</p>
        <UButton to="/contact" size="lg" color="neutral" variant="subtle">
          联系我们
        </UButton>
      </UPageSection>
    </UContainer>

    <!-- Position Detail Modal -->
    <UModal v-model:open="isModalOpen">
      <template #content>
        <UCard v-if="selectedPosition">
          <template #header>
            <div class="flex items-start justify-between">
              <div>
                <h3 class="text-xl font-semibold">{{ selectedPosition.title }}</h3>
                <div class="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted">
                  <span>{{ selectedPosition.department }}</span>
                  <span>·</span>
                  <span>{{ selectedPosition.location }}</span>
                  <span>·</span>
                  <span>{{ selectedPosition.type }}</span>
                </div>
              </div>
              <UButton
                icon="i-lucide-x"
                color="neutral"
                variant="ghost"
                @click="isModalOpen = false"
              />
            </div>
          </template>

          <div class="space-y-6">
            <div>
              <h4 class="font-semibold mb-2">职位描述</h4>
              <p class="text-muted">{{ selectedPosition.description }}</p>
            </div>
            <div>
              <h4 class="font-semibold mb-2">任职要求</h4>
              <ul class="list-disc list-inside text-muted space-y-1">
                <li v-for="req in selectedPosition.requirements" :key="req">{{ req }}</li>
              </ul>
            </div>
          </div>

          <template #footer>
            <div class="flex justify-end gap-3">
              <UButton color="neutral" variant="subtle" @click="isModalOpen = false">
                关闭
              </UButton>
              <UButton :to="`mailto:hr@atdak.com?subject=应聘${selectedPosition.title}`">
                投递简历
              </UButton>
            </div>
          </template>
        </UCard>
      </template>
    </UModal>
  </div>
</template>
