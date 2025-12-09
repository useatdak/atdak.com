// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image'
  ],

  ui: {
    fonts: false
  },

  app: {
    head: {
      title: '艾塔达克 - 智能 AI 云服务平台',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { name: 'description', content: '艾塔达克 (atdak) 提供企业级 AI 云服务和专业硬件设备，包括大语言模型、图像识别、语音处理等 AI 能力。' },
        { name: 'keywords', content: 'AI, 人工智能, 大语言模型, LLM, API, 边缘计算, 艾塔达克, atdak' },
        { property: 'og:title', content: '艾塔达克 - 智能 AI 云服务平台' },
        { property: 'og:description', content: '为开发者和企业提供强大的 AI 能力和专业硬件设备' },
        { property: 'og:site_name', content: '艾塔达克' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/docs': { redirect: '/docs/getting-started', prerender: false },
    '/products': { prerender: true }
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
