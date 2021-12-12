import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const host = 'www.dawnswwwww.com'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true
      }, 
  },
  rollupOptions: {
    output: {
      manualChunks: {
        'codemirror': ['codemirror'],
        'html2canvas': ['html2canvas'],
        'clipboard-polyfill': ['clipboard-polyfill'],
      }
    }
  }
  },
  server: {
    port: 8821,
    host,
    https: {
      key: fs.readFileSync(`./.cert/key.pem`),
      cert: fs.readFileSync(`./.cert/cert.pem`),
    }
  }
})
