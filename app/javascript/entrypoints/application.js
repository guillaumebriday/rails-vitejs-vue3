import '@hotwired/turbo'

import '@/stylesheets/application.scss'

import { createApp, defineAsyncComponent } from 'vue'

const createMyApp = () => createApp({
  performance: true
})
  .component('DatePicker', defineAsyncComponent(() => import(`@/components/DatePicker.vue`)))
  .component('ColorPicker', defineAsyncComponent(() => import('@/components/ColorPicker.vue')))


let app
document.addEventListener('turbo:load', () => {
  app = createMyApp()

  app.mount('#vue-app')
})

document.addEventListener('turbo:before-visit', () => {
  app.unmount()
})
