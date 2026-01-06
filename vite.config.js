import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    // 启用生产构建优化（使用默认的 esbuild，更快）
    minify: 'esbuild',
    // 代码分割优化
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue']
        }
      }
    },
    // 优化资源大小
    assetsInlineLimit: 4096, // 小于 4kb 的资源内联为 base64
    // 启用 CSS 代码分割
    cssCodeSplit: true,
    // 生成 source map（生产环境可关闭以减小文件大小）
    sourcemap: false,
    // 压缩选项
    target: 'es2015', // 目标浏览器，提高兼容性
    cssMinify: true // 压缩 CSS
  }
})
