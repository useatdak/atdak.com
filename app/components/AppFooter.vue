<script setup lang="ts">
const columns = [{
  label: '产品服务',
  children: [{
    label: 'AI 服务',
    to: '/products'
  }, {
    label: 'AI 硬件',
    to: '/products/edge-pro'
  }, {
    label: 'API 文档',
    to: '/docs'
  }, {
    label: '定价方案',
    to: '/pricing'
  }]
}, {
  label: '资源支持',
  children: [{
    label: '帮助中心',
    to: '/docs/getting-started'
  }, {
    label: '技术博客',
    to: '/blog'
  }, {
    label: '更新日志',
    to: '/changelog'
  }, {
    label: '服务状态',
    to: 'https://status.atdak.com',
    target: '_blank'
  }]
}, {
  label: '关于我们',
  children: [{
    label: '公司介绍',
    to: '/about'
  }, {
    label: '联系我们',
    to: '/contact'
  }, {
    label: '加入我们',
    to: '/careers'
  }, {
    label: '合作伙伴',
    to: '/partners'
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  toast.add({
    title: '订阅成功！',
    description: '您已成功订阅我们的新闻通讯。'
  })
}
</script>

<template>
  <USeparator
    icon="i-lucide-cpu"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField
                name="email"
                label="订阅我们的新闻通讯"
                size="lg"
              >
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  placeholder="请输入您的邮箱"
                >
                  <template #trailing>
                    <UButton
                      type="submit"
                      size="xs"
                      color="neutral"
                      label="订阅"
                    />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-muted text-sm">
        © {{ new Date().getFullYear() }} 艾塔达克 atdak.com 版权所有
      </p>
    </template>

    <template #right>
      <UButton
        to="https://github.com/useatdak"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="atdak on GitHub"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://twitter.com/atdak"
        target="_blank"
        icon="i-simple-icons-x"
        aria-label="atdak on X"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
