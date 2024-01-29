import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入插件
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  plugins: [
    vue(),
    // 配置插件
    AutoImport({
      imports:['vue','vue-router']
    })
  ],
  resolve: {
    
  }
})
