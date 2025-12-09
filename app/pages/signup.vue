<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: '注册',
  description: '创建您的艾塔达克账号'
})

const toast = useToast()

const fields = [{
  name: 'name',
  type: 'text' as const,
  label: '姓名',
  placeholder: '请输入您的姓名'
}, {
  name: 'email',
  type: 'text' as const,
  label: '邮箱',
  placeholder: '请输入邮箱地址'
}, {
  name: 'password',
  label: '密码',
  type: 'password' as const,
  placeholder: '请输入密码（至少 8 位）'
}]

const providers = [{
  label: '微信注册',
  icon: 'i-simple-icons-wechat',
  onClick: () => {
    toast.add({ title: '微信', description: '正在跳转微信授权...' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: '正在跳转 GitHub 授权...' })
  }
}]

const schema = z.object({
  name: z.string().min(1, '请输入姓名'),
  email: z.string().email('邮箱格式不正确'),
  password: z.string().min(8, '密码至少需要 8 个字符')
})

type Schema = z.output<typeof schema>

function onSubmit(payload: FormSubmitEvent<Schema>) {
  console.log('Submitted', payload)
}
</script>

<template>
  <UAuthForm
    :fields="fields"
    :schema="schema"
    :providers="providers"
    title="创建账号"
    :submit="{ label: '立即注册' }"
    @submit="onSubmit"
  >
    <template #description>
      已有账号？<ULink
        to="/login"
        class="text-primary font-medium"
      >立即登录</ULink>
    </template>

    <template #footer>
      注册即表示您同意我们的 <ULink
        to="/"
        class="text-primary font-medium"
      >服务条款</ULink>。
    </template>
  </UAuthForm>
</template>
