<script setup lang="ts">
useSeoMeta({
  title: '合作伙伴 - 艾塔达克',
  description: '艾塔达克合作伙伴计划，与行业领先企业共建 AI 生态。'
})

const partnerTypes = [
  {
    icon: 'i-lucide-building',
    title: '技术合作伙伴',
    description: '与云服务商、硬件厂商等技术企业深度合作，共同打造完整的 AI 解决方案。',
    benefits: ['技术资源共享', '联合解决方案', '优先技术支持', '联合市场推广']
  },
  {
    icon: 'i-lucide-handshake',
    title: '渠道合作伙伴',
    description: '携手系统集成商、代理商等渠道伙伴，共同拓展市场，服务更多客户。',
    benefits: ['销售返利政策', '市场推广支持', '销售培训赋能', '专属客户经理']
  },
  {
    icon: 'i-lucide-rocket',
    title: '创业伙伴计划',
    description: '为 AI 领域创业公司提供技术、资源和资金支持，共同成长。',
    benefits: ['免费 API 额度', '技术指导支持', '投资对接机会', '联合品牌曝光']
  }
]

const partners = [
  { name: '阿里云', icon: 'i-simple-icons-alibabacloud' },
  { name: '腾讯云', icon: 'i-simple-icons-tencentqq' },
  { name: '华为云', icon: 'i-simple-icons-huawei' },
  { name: 'AWS', icon: 'i-simple-icons-amazonaws' },
  { name: 'Azure', icon: 'i-simple-icons-microsoftazure' },
  { name: 'NVIDIA', icon: 'i-simple-icons-nvidia' }
]

const process = [
  { step: '1', title: '提交申请', description: '填写合作伙伴申请表，描述您的公司和合作意向' },
  { step: '2', title: '资质审核', description: '我们的团队会在 3 个工作日内审核您的申请' },
  { step: '3', title: '商务洽谈', description: '审核通过后，专属客户经理将与您联系洽谈合作细节' },
  { step: '4', title: '签约合作', description: '达成一致后签署合作协议，正式成为合作伙伴' }
]

const toast = useToast()

const formState = reactive({
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  partnerType: 'technology',
  description: ''
})

const partnerTypeOptions = [
  { label: '技术合作伙伴', value: 'technology' },
  { label: '渠道合作伙伴', value: 'channel' },
  { label: '创业伙伴计划', value: 'startup' }
]

function onSubmit() {
  toast.add({
    title: '申请已提交',
    description: '我们会尽快与您联系，感谢您的合作意向！',
    color: 'success'
  })
}
</script>

<template>
  <div>
    <UPageHero
      title="合作伙伴计划"
      description="携手共建 AI 生态，合作共赢，一起推动人工智能技术的广泛应用。"
    >
      <template #links>
        <UButton to="#apply" size="xl" trailing-icon="i-lucide-arrow-down">
          申请合作
        </UButton>
      </template>
    </UPageHero>

    <UContainer>
      <!-- Partner Types -->
      <UPageSection
        title="合作伙伴类型"
        description="根据您的业务类型，选择适合的合作模式"
      >
        <div class="grid md:grid-cols-3 gap-6">
          <UCard v-for="type in partnerTypes" :key="type.title">
            <UIcon :name="type.icon" class="w-10 h-10 text-primary mb-4" />
            <h3 class="text-lg font-semibold mb-2">{{ type.title }}</h3>
            <p class="text-muted text-sm mb-4">{{ type.description }}</p>
            <div class="space-y-2">
              <div
                v-for="benefit in type.benefits"
                :key="benefit"
                class="flex items-center gap-2 text-sm"
              >
                <UIcon name="i-lucide-check" class="w-4 h-4 text-primary" />
                <span>{{ benefit }}</span>
              </div>
            </div>
          </UCard>
        </div>
      </UPageSection>

      <!-- Current Partners -->
      <UPageSection
        title="我们的合作伙伴"
        description="与行业领先企业携手共进"
      >
        <div class="flex flex-wrap justify-center items-center gap-12">
          <div
            v-for="partner in partners"
            :key="partner.name"
            class="flex flex-col items-center gap-2 text-muted hover:text-highlighted transition-colors"
          >
            <UIcon :name="partner.icon" class="w-12 h-12" />
            <span class="text-sm">{{ partner.name }}</span>
          </div>
        </div>
      </UPageSection>

      <!-- Process -->
      <UPageSection
        title="合作流程"
        description="简单四步，成为我们的合作伙伴"
      >
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="item in process" :key="item.step" class="text-center">
            <div class="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
              {{ item.step }}
            </div>
            <h4 class="font-semibold mb-2">{{ item.title }}</h4>
            <p class="text-sm text-muted">{{ item.description }}</p>
          </div>
        </div>
      </UPageSection>

      <!-- Apply Form -->
      <UPageSection
        id="apply"
        title="申请成为合作伙伴"
        description="填写以下信息，我们会尽快与您联系"
      >
        <UCard class="max-w-2xl mx-auto">
          <UForm :state="formState" class="space-y-6" @submit="onSubmit">
            <div class="grid sm:grid-cols-2 gap-6">
              <UFormField label="公司名称" name="companyName" required>
                <UInput v-model="formState.companyName" placeholder="请输入公司名称" class="w-full" />
              </UFormField>
              <UFormField label="联系人" name="contactName" required>
                <UInput v-model="formState.contactName" placeholder="请输入联系人姓名" class="w-full" />
              </UFormField>
              <UFormField label="邮箱" name="email" required>
                <UInput v-model="formState.email" type="email" placeholder="请输入邮箱" class="w-full" />
              </UFormField>
              <UFormField label="电话" name="phone" required>
                <UInput v-model="formState.phone" placeholder="请输入联系电话" class="w-full" />
              </UFormField>
            </div>
            <UFormField label="合作类型" name="partnerType">
              <USelect v-model="formState.partnerType" :items="partnerTypeOptions" class="w-full" />
            </UFormField>
            <UFormField label="合作意向描述" name="description">
              <UTextarea
                v-model="formState.description"
                placeholder="请简要描述您的公司业务和合作意向"
                :rows="4"
                class="w-full"
              />
            </UFormField>
            <div class="flex justify-end">
              <UButton type="submit" size="lg">
                提交申请
              </UButton>
            </div>
          </UForm>
        </UCard>
      </UPageSection>

      <!-- CTA -->
      <UPageSection class="text-center">
        <h2 class="text-2xl font-bold mb-4">有其他合作想法？</h2>
        <p class="text-muted mb-6">欢迎直接联系我们，探讨更多合作可能</p>
        <UButton to="/contact" size="lg" color="neutral" variant="subtle">
          联系我们
        </UButton>
      </UPageSection>
    </UContainer>
  </div>
</template>
