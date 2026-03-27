import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    // 模拟浏览器环境（自动提供 document / window）
    environment: 'happy-dom',
    // 支持全局 API，不用每次 import
    globals: true,
    // 全局引入 jest-dom 扩展
    setupFiles: ['./src/setupTests.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    // 只匹配 src 下的测试文件
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}']
  }
})
