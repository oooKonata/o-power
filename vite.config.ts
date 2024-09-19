import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'
// 图片压缩
import Imagemin from 'vite-plugin-imagemin'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/o-power/',
  plugins: [uni(), Imagemin({ webp: { quality: 90 } })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
