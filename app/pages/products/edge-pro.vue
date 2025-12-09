<script setup lang="ts">
const { data: page } = await useAsyncData('edge-pro', () => queryCollection('content').path('/products/edge-pro').first())

useSeoMeta({
  title: page.value?.seo?.title,
  description: page.value?.seo?.description
})

const selectedImage = ref(0)
</script>

<template>
  <UContainer>
    <!-- 产品主信息 -->
    <section class="py-12">
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- 产品图片 -->
        <div class="space-y-4">
          <div class="aspect-square bg-muted rounded-2xl flex items-center justify-center">
            <div class="text-center p-8">
              <UIcon name="i-lucide-cpu" class="w-32 h-32 text-primary mx-auto mb-4" />
              <p class="text-2xl font-bold">{{ page?.product?.name }}</p>
            </div>
          </div>
          <!-- 缩略图 -->
          <div class="flex gap-4 justify-center">
            <div
              v-for="(_, index) in 3"
              :key="index"
              class="w-20 h-20 rounded-lg bg-muted flex items-center justify-center cursor-pointer border-2 transition-colors"
              :class="selectedImage === index ? 'border-primary' : 'border-transparent'"
              @click="selectedImage = index"
            >
              <UIcon name="i-lucide-cpu" class="w-8 h-8 text-muted-foreground" />
            </div>
          </div>
        </div>
        
        <!-- 产品信息 -->
        <div>
          <div class="mb-4">
            <span class="inline-block px-3 py-1 bg-red-500/10 text-red-500 text-sm font-medium rounded-full">
              {{ page?.product?.discount }}
            </span>
          </div>
          
          <h1 class="text-4xl font-bold mb-2">{{ page?.product?.name }}</h1>
          <p class="text-xl text-muted mb-4">{{ page?.product?.tagline }}</p>
          <p class="text-lg mb-6">{{ page?.product?.description }}</p>
          
          <div class="flex items-baseline gap-4 mb-8">
            <span class="text-4xl font-bold text-primary">{{ page?.product?.price }}</span>
            <span class="text-xl text-muted line-through">{{ page?.product?.originalPrice }}</span>
          </div>
          
          <div class="flex gap-4 mb-8">
            <UButton
              :label="page?.product?.buyButton?.label"
              :to="page?.product?.buyButton?.to"
              :target="page?.product?.buyButton?.target"
              size="xl"
              icon="i-lucide-shopping-cart"
            />
            <UButton
              :label="page?.product?.consultButton?.label"
              :to="page?.product?.consultButton?.to"
              size="xl"
              color="neutral"
              variant="outline"
              icon="i-lucide-message-circle"
            />
          </div>
          
          <!-- 产品亮点 -->
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="highlight in page?.highlights"
              :key="highlight.title"
              class="p-4 rounded-xl bg-muted"
            >
              <UIcon :name="highlight.icon" class="w-6 h-6 text-primary mb-2" />
              <h4 class="font-semibold mb-1">{{ highlight.title }}</h4>
              <p class="text-sm text-muted">{{ highlight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 详细规格 -->
    <section class="py-16 border-t border-default">
      <h2 class="text-3xl font-bold text-center mb-12">{{ page?.specifications?.title }}</h2>
      
      <div class="grid md:grid-cols-2 gap-8">
        <UCard
          v-for="group in page?.specifications?.groups"
          :key="group.title"
        >
          <template #header>
            <h3 class="text-lg font-semibold">{{ group.title }}</h3>
          </template>
          
          <div class="divide-y divide-default">
            <div
              v-for="item in group.items"
              :key="item.label"
              class="py-3 flex justify-between"
            >
              <span class="text-muted">{{ item.label }}</span>
              <span class="font-medium text-right">{{ item.value }}</span>
            </div>
          </div>
        </UCard>
      </div>
    </section>
    
    <!-- 应用场景 -->
    <section class="py-16 border-t border-default">
      <h2 class="text-3xl font-bold text-center mb-4">{{ page?.useCases?.title }}</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <UCard
          v-for="useCase in page?.useCases?.items"
          :key="useCase.title"
          class="text-center"
        >
          <div class="p-4 rounded-full bg-primary/10 inline-flex mb-4">
            <UIcon :name="useCase.icon" class="w-8 h-8 text-primary" />
          </div>
          <h4 class="text-lg font-semibold mb-2">{{ useCase.title }}</h4>
          <p class="text-sm text-muted">{{ useCase.description }}</p>
        </UCard>
      </div>
    </section>
    
    <!-- 包装清单 -->
    <section class="py-16 border-t border-default">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">{{ page?.package?.title }}</h2>
        
        <UCard>
          <ul class="space-y-3">
            <li
              v-for="item in page?.package?.items"
              :key="item"
              class="flex items-center gap-3"
            >
              <UIcon name="i-lucide-package" class="w-5 h-5 text-primary" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </UCard>
      </div>
    </section>
    
    <!-- FAQ -->
    <section class="py-16 border-t border-default">
      <h2 class="text-3xl font-bold text-center mb-12">{{ page?.faq?.title }}</h2>
      
      <div class="max-w-3xl mx-auto">
        <UAccordion
          :items="page?.faq?.items?.map((item: any) => ({
            label: item.label,
            content: item.content
          }))"
        />
      </div>
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
