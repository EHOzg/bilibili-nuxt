// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // 是否开启 ssr 服务端渲染，默认true
  ssr: true,
  // 开启调试工具 默认关闭
  devtools: { enabled: true },
  // 引用模块
  modules: ['@vant/nuxt'],
})
