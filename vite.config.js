import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  define: {
    'process.env.NODE_ENV': '"development"',
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    open: true, // Automatically open the app in the browser when the server starts
  },
  optimizeDeps: {
    include: ['vue'], // Ensure Vue is included for optimization
  },
})
