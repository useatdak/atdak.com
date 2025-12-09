<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: '登录',
  description: '登录您的艾塔达克账号'
})

const toast = useToast()

const fields = [{
  name: 'email',
  type: 'text' as const,
  label: '邮箱',
  placeholder: '请输入邮箱地址',
  required: true
}, {
  name: 'password',
  label: '密码',
  type: 'password' as const,
  placeholder: '请输入密码'
}, {
  name: 'remember',
  label: '记住我',
  type: 'checkbox' as const
}]

const providers = [{
  label: '微信登录',
  icon: 'i-simple-icons-wechat',
  onClick: () => {
    toast.add({ title: '微信', description: '正在跳转微信登录...' })
  }
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => {
    toast.add({ title: 'GitHub', description: '正在跳转 GitHub 登录...' })
  }
}]

const schema = z.object({
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
    title="欢迎回来"
    icon="i-lucide-lock"
    :submit="{ label: '登录' }"
    @submit="onSubmit"
  >
    <template #description>
      还没有账号？<ULink
        to="/signup"
        class="text-primary font-medium"
      >立即注册</ULink>
    </template>

    <template #password-hint>
      <ULink
        to="/"
        class="text-primary font-medium"
        tabindex="-1"
      >忘记密码？</ULink>
    </template>

    <template #footer>
      By signing in, you agree to our <ULink
        to="/"
        class="text-primary font-medium"
      >Terms of Service</ULink>.
    </template>
  </UAuthForm>
</template>
