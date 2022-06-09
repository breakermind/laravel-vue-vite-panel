import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { resolve } = require('path')
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // Laravel
    outDir: resolve(__dirname, '../public'),
    rollupOptions: {
      output: {
        // Laravel
        dir: '../public',
        // Multi dir
        assetFileNames: 'vue/[ext]/[name][extname]',
        chunkFileNames: 'vue/chunks/[name].js',
        entryFileNames: 'vue/js/[name].js', // 'vue/chunks/[name].[hash].js',
        // Settings
        manualChunks: undefined,
      }
    }
  }
})