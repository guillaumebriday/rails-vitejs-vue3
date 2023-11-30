import { defineConfig } from 'vite'
import RailsPlugin from 'vite-plugin-rails'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    RailsPlugin(),
    vue()
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler'
    }
  }
})
