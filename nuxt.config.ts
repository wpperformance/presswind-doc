import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',

  //   modules: ['@nuxt/image-edge'],
  components: [
    {
      prefix: '',
      path: resolve('./components/content'),
      global: true,
    },
  ],

  compatibilityDate: '2024-10-30',
})