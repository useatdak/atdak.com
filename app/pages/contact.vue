<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

useSeoMeta({
  title: '联系我们',
  description: '联系艾塔达克团队，获取技术支持或商务合作'
})

const toast = useToast()

const state = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  subject: 'technical',
  message: ''
})

const subjects = [
  { label: '技术支持', value: 'technical' },
  { label: '商务合作', value: 'business' },
  { label: '产品咨询', value: 'product' },
  { label: '其他问题', value: 'other' }
]

const schema = z.object({
  name: z.string().min(1, '请输入姓名'),
  email: z.string().email('邮箱格式不正确'),
  company: z.string().optional(),
  phone: z.string().optional(),
  subject: z.string(),
  message: z.string().min(10, '留言内容至少 10 个字符')
})

type Schema = z.output<typeof schema>

function onSubmit(event: FormSubmitEvent<Schema>) {
  console.log('Submitted', event.data)
  toast.add({
    title: '提交成功',
    description: '我们会尽快与您联系！',
    color: 'success'
  })
}
</script>

<template>
  <UContainer class="py-16">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">联系我们</h1>
        <p class="text-lg text-muted">有任何问题或合作意向，欢迎与我们联系</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-12">
        <UCard class="text-center">
          <UIcon name="i-lucide-mail" class="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 class="font-semibold mb-1">邮箱</h3>
          <p class="text-muted text-sm">contact@atdak.com</p>
        </UCard>
        <UCard class="text-center">
          <UIcon name="i-lucide-phone" class="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 class="font-semibold mb-1">电话</h3>
          <p class="text-muted text-sm">400-xxx-xxxx</p>
        </UCard>
        <UCard class="text-center">
          <UIcon name="i-lucide-map-pin" class="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 class="font-semibold mb-1">地址</h3>
          <p class="text-muted text-sm">中国 · 深圳</p>
        </UCard>
      </div>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">发送留言</h2>
        </template>

        <UForm :schema="schema" :state="state" class="space-y-6" @submit="onSubmit">
          <div class="grid md:grid-cols-2 gap-6">
            <UFormField label="姓名" name="name" required>
              <UInput v-model="state.name" placeholder="请输入姓名" class="w-full" />
            </UFormField>
            <UFormField label="邮箱" name="email" required>
              <UInput v-model="state.email" type="email" placeholder="请输入邮箱" class="w-full" />
            </UFormField>
            <UFormField label="公司" name="company">
              <UInput v-model="state.company" placeholder="请输入公司名称（选填）" class="w-full" />
            </UFormField>
            <UFormField label="电话" name="phone">
              <UInput v-model="state.phone" placeholder="请输入联系电话（选填）" class="w-full" />
            </UFormField>
          </div>

          <UFormField label="咨询类型" name="subject">
            <USelect v-model="state.subject" :items="subjects" class="w-full" />
          </UFormField>

          <UFormField label="留言内容" name="message" required>
            <UTextarea v-model="state.message" placeholder="请详细描述您的问题或需求..." :rows="5" class="w-full" />
          </UFormField>

          <UButton type="submit" size="lg">
            提交留言
          </UButton>
        </UForm>
      </UCard>
    </div>
  </UContainer>
</template>
