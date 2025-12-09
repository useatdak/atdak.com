<script setup lang="ts">
const route = useRoute()

const items = computed(() => [{
  label: '产品',
  to: '/products',
  active: route.path.startsWith('/products')
}, {
  label: '文档',
  to: '/docs',
  active: route.path.startsWith('/docs')
}, {
  label: '定价',
  to: '/pricing'
}, {
  label: '博客',
  to: '/blog'
}])
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
      </NuxtLink>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UColorModeButton />

      <UButton
        icon="i-lucide-layout-dashboard"
        color="neutral"
        variant="ghost"
        to="https://console.atdak.com"
        target="_blank"
        class="lg:hidden"
      />

      <UButton
        label="登录"
        color="neutral"
        variant="outline"
        to="/login"
        class="hidden lg:inline-flex"
      />

      <UButton
        label="控制台"
        color="neutral"
        trailing-icon="i-lucide-arrow-right"
        class="hidden lg:inline-flex"
        to="https://console.atdak.com"
        target="_blank"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />

      <USeparator class="my-6" />

      <UButton
        label="登录"
        color="neutral"
        variant="subtle"
        to="/login"
        block
        class="mb-3"
      />
      <UButton
        label="进入控制台"
        color="neutral"
        to="https://console.atdak.com"
        target="_blank"
        block
      />
    </template>
  </UHeader>
</template>
