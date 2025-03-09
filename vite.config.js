import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"development"'
  },
  plugins: [
    vue(),
  ],
  base: process.env.NODE_ENV === 'production' ? '/kbeauty_web/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
