import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import vitePlugCesium from 'vite-plugin-cesium'

// import requireTransform from 'vite-plugin-require-transform'
// https://vitejs.dev/config/

export default defineConfig({
  base: './',
  outDir: 'dist',
  server: {
    host: '0.0.0.0',
    port: 8080,
    hmr: true,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api\/v1/, '')
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    viteCompression(),
    vitePlugCesium()
  ],
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  chainWebpack(config) {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  }
})
