<script setup lang="ts">
const { data: page } = await useAsyncData('products', () => queryCollection('products').first())

useSeoMeta({
  title: page.value?.seo?.title,
  description: page.value?.seo?.description
})

// 当前选中的分类
const activeCategory = ref('all')

// 过滤产品
const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') {
    return page.value?.products || []
  }
  return (page.value?.products || []).filter((p: any) => p.category === activeCategory.value)
})
</script>

<template>
  <div v-if="page">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-linear-to-b from-primary/5 to-transparent py-20">
      <UContainer>
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            AI 能力，触手可及
          </h1>
          <p class="text-xl text-muted mb-8">
            从云端服务到边缘设备，艾塔达克为您提供完整的 AI 解决方案
          </p>
        </div>
      </UContainer>
    </section>

    <!-- 产品分类标签 -->
    <section class="sticky top-16 z-40 bg-background/80 backdrop-blur-xl border-b border-default">
      <UContainer>
        <div class="flex items-center justify-center gap-2 py-4 overflow-x-auto">
          <UButton
            v-for="category in page?.categories"
            :key="category.id"
            :label="category.label"
            :icon="category.icon"
            :variant="activeCategory === category.id ? 'soft' : 'ghost'"
            :color="activeCategory === category.id ? 'primary' : 'neutral'"
            size="md"
            @click="activeCategory = category.id"
          />
        </div>
      </UContainer>
    </section>

    <!-- 产品网格 - Apple 风格 -->
    <section class="py-16">
      <UContainer>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="group relative bg-muted rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <!-- 徽章 -->
            <div v-if="product.badge" class="absolute top-4 left-4 z-10">
              <span class="inline-block px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                {{ product.badge }}
              </span>
            </div>

            <!-- 产品图标/图片区域 -->
            <div class="aspect-square flex items-center justify-center p-8 relative overflow-hidden">
              <div 
                class="w-32 h-32 rounded-3xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                :class="product.colors?.[0]?.class || 'bg-primary/10'"
              >
                <UIcon :name="product.icon" class="w-16 h-16 text-white" />
              </div>
              <!-- 背景装饰 -->
              <div class="absolute inset-0 bg-linear-to-t from-muted to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <!-- 产品颜色选项 -->
            <div v-if="product.colors?.length > 1" class="flex justify-center gap-2 -mt-4 mb-4 relative z-10">
              <div
                v-for="(color, idx) in product.colors"
                :key="idx"
                class="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                :class="color.class"
                :title="color.name"
              />
            </div>

            <!-- 产品信息 -->
            <div class="p-6 pt-2 text-center">
              <h3 class="text-2xl font-bold mb-1">{{ product.name }}</h3>
              <p class="text-sm text-primary font-medium mb-2">{{ product.tagline }}</p>
              <p class="text-muted text-sm mb-4 line-clamp-2">{{ product.description }}</p>

              <!-- 产品特性 -->
              <div class="flex flex-wrap justify-center gap-2 mb-4">
                <span
                  v-for="feature in product.features?.slice(0, 3)"
                  :key="feature"
                  class="inline-block px-2 py-1 bg-background rounded-full text-xs text-muted"
                >
                  {{ feature }}
                </span>
              </div>

              <!-- 价格 -->
              <div class="mb-4">
                <span class="text-2xl font-bold">{{ product.price }}</span>
                <span v-if="product.originalPrice" class="ml-2 text-muted line-through">{{ product.originalPrice }}</span>
                <p v-if="product.priceNote" class="text-xs text-primary mt-1">{{ product.priceNote }}</p>
              </div>

              <!-- 操作按钮 -->
              <div class="flex flex-col gap-2">
                <UButton
                  v-for="link in product.links"
                  :key="link.label"
                  :label="link.label"
                  :to="link.to"
                  :target="link.target"
                  :variant="link === product.links[0] ? 'soft' : 'ghost'"
                  block
                  trailing-icon="i-lucide-arrow-right"
                />
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 视频展示区 - 你想得出，AI 助你做得到 -->
    <section class="py-20 bg-linear-to-b from-transparent via-primary/5 to-transparent">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">{{ page?.showcase?.title }}</h2>
          <p class="text-lg text-muted">{{ page?.showcase?.description }}</p>
        </div>

        <!-- 演示场景 -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div
            v-for="demo in page?.showcase?.demos"
            :key="demo.title"
            class="group p-6 rounded-2xl bg-muted hover:bg-primary/10 transition-colors cursor-pointer text-center"
          >
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <UIcon :name="demo.icon" class="w-8 h-8 text-primary" />
            </div>
            <h4 class="font-semibold mb-2">{{ demo.title }}</h4>
            <p class="text-sm text-muted">{{ demo.description }}</p>
          </div>
        </div>

        <!-- 视频占位 -->
        <div class="aspect-video bg-muted rounded-3xl flex items-center justify-center overflow-hidden relative group cursor-pointer">
          <div class="absolute inset-0 bg-linear-to-br from-primary/20 to-primary/5" />
          <div class="relative z-10 text-center">
            <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <UIcon name="i-lucide-play" class="w-10 h-10 text-primary ml-1" />
            </div>
            <p class="text-lg font-medium">观看产品演示</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 购买优势 -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">{{ page?.benefits?.title }}</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="benefit in page?.benefits?.items"
            :key="benefit.title"
            class="flex items-start gap-4 p-6 rounded-2xl hover:bg-muted transition-colors"
          >
            <div class="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <UIcon :name="benefit.icon" class="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 class="font-semibold mb-1">{{ benefit.title }}</h4>
              <p class="text-sm text-muted">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 了解 AI -->
    <section class="py-20 bg-muted">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">{{ page?.knowAI?.title }}</h2>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div
            v-for="item in page?.knowAI?.items"
            :key="item.title"
            class="group p-6 rounded-2xl bg-background hover:shadow-lg transition-all text-center cursor-pointer"
          >
            <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
              <UIcon :name="item.icon" class="w-6 h-6 text-primary group-hover:text-white transition-colors" />
            </div>
            <h4 class="font-semibold text-sm mb-1">{{ item.title }}</h4>
            <p class="text-xs text-muted">{{ item.description }}</p>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 生态互联 -->
    <section class="py-20">
      <UContainer>
        <div class="text-center mb-4">
          <h2 class="text-4xl font-bold mb-4">{{ page?.ecosystem?.title }}</h2>
          <p class="text-lg text-muted max-w-2xl mx-auto">{{ page?.ecosystem?.description }}</p>
        </div>

        <div class="mt-16 space-y-16">
          <div
            v-for="(item, index) in page?.ecosystem?.items"
            :key="item.title"
            class="grid lg:grid-cols-2 gap-12 items-center"
            :class="{ 'lg:flex-row-reverse': index % 2 === 1 }"
          >
            <div :class="{ 'lg:order-2': index % 2 === 1 }">
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <UIcon :name="item.icon" class="w-4 h-4" />
                {{ item.title }}
              </div>
              <p class="text-lg text-muted leading-relaxed">{{ item.description }}</p>
            </div>
            <div 
              class="aspect-4/3 bg-muted rounded-3xl flex items-center justify-center"
              :class="{ 'lg:order-1': index % 2 === 1 }"
            >
              <UIcon :name="item.icon" class="w-24 h-24 text-primary/30" />
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- 配件与服务 -->
    <section class="py-20 bg-muted">
      <UContainer>
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">{{ page?.accessories?.title }}</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <UCard
            v-for="item in page?.accessories?.items"
            :key="item.title"
            class="text-center hover:shadow-lg transition-shadow"
          >
            <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
              <UIcon :name="item.icon" class="w-8 h-8 text-primary" />
            </div>
            <h4 class="text-lg font-semibold mb-2">{{ item.title }}</h4>
            <p class="text-sm text-muted mb-4">{{ item.description }}</p>
            <UButton
              :label="item.link.label"
              :to="item.link.to"
              :target="item.link.target"
              variant="ghost"
              trailing-icon="i-lucide-arrow-right"
            />
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- CTA -->
    <section class="py-20">
      <UContainer>
        <UPageCTA
          :title="page?.cta?.title"
          :description="page?.cta?.description"
          :links="page?.cta?.links"
        />
      </UContainer>
    </section>
  </div>
</template>
