<script setup lang="ts">
const { data: page } = await useAsyncData('products', () => queryCollection('content').path('/products').first())

useSeoMeta({
  title: page.value?.seo?.title,
  description: page.value?.seo?.description
})
</script>

<template>
  <UContainer>
    <UPageHero
      :title="page?.hero?.title"
      :description="page?.hero?.description"
      orientation="horizontal"
    />

    <!-- AI 云服务 -->
    <section class="py-16">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">{{ page?.services?.title }}</h2>
        <p class="text-lg text-muted max-w-2xl mx-auto">{{ page?.services?.description }}</p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <UCard
          v-for="service in page?.services?.items"
          :key="service.title"
          class="hover:shadow-lg transition-shadow"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div class="p-3 rounded-lg bg-primary/10">
                <UIcon :name="service.icon" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-semibold">{{ service.title }}</h3>
            </div>
          </template>
          
          <p class="text-muted mb-4">{{ service.description }}</p>
          
          <ul class="space-y-2 mb-4">
            <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2">
              <UIcon name="i-lucide-check" class="w-4 h-4 text-primary shrink-0" />
              <span class="text-sm">{{ feature }}</span>
            </li>
          </ul>
          
          <template #footer>
            <UButton
              :label="service.link.label"
              :to="service.link.to"
              variant="ghost"
              trailing-icon="i-lucide-arrow-right"
            />
          </template>
        </UCard>
      </div>
    </section>

    <!-- AI 硬件 -->
    <section class="py-16 border-t border-default">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-4">{{ page?.hardware?.title }}</h2>
        <p class="text-lg text-muted max-w-2xl mx-auto">{{ page?.hardware?.description }}</p>
      </div>
      
      <UCard class="overflow-hidden">
        <div class="grid lg:grid-cols-2 gap-8 items-center p-6">
          <!-- 产品图片占位 -->
          <div class="aspect-square bg-muted rounded-xl flex items-center justify-center">
            <div class="text-center p-8">
              <UIcon name="i-lucide-cpu" class="w-24 h-24 text-primary mx-auto mb-4" />
              <p class="text-2xl font-bold">{{ page?.hardware?.featured?.title }}</p>
              <p class="text-muted">{{ page?.hardware?.featured?.subtitle }}</p>
            </div>
          </div>
          
          <!-- 产品信息 -->
          <div>
            <div class="mb-2">
              <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                热销产品
              </span>
            </div>
            <h3 class="text-3xl font-bold mb-2">{{ page?.hardware?.featured?.title }}</h3>
            <p class="text-lg text-muted mb-4">{{ page?.hardware?.featured?.subtitle }}</p>
            <p class="mb-6">{{ page?.hardware?.featured?.description }}</p>
            
            <div class="text-3xl font-bold text-primary mb-6">
              {{ page?.hardware?.featured?.price }}
            </div>
            
            <ul class="space-y-3 mb-8">
              <li v-for="feature in page?.hardware?.featured?.features" :key="feature" class="flex items-start gap-3">
                <UIcon name="i-lucide-check-circle" class="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{{ feature }}</span>
              </li>
            </ul>
            
            <div class="flex gap-4">
              <UButton
                :label="page?.hardware?.featured?.link?.label"
                :to="page?.hardware?.featured?.link?.to"
                size="lg"
                trailing-icon="i-lucide-arrow-right"
              />
              <UButton
                label="立即购买"
                to="https://console.atdak.com/order/edge-pro"
                target="_blank"
                size="lg"
                color="neutral"
                variant="outline"
                icon="i-lucide-shopping-cart"
              />
            </div>
          </div>
        </div>
      </UCard>
    </section>

    <!-- CTA -->
    <section class="py-16">
      <UPageCTA
        :title="page?.cta?.title"
        :description="page?.cta?.description"
        :links="page?.cta?.links"
      />
    </section>
  </UContainer>
</template>
