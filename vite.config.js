import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(),
  // AutoImport({
  //   resolvers:[ElementPlusResolver()]
  // }),
  // Components({
  //   resolvers:[ElementPlusResolver()],
  // })
  ],
  resolve:{
    alias:{
      // '@':resolve(__dirname,'src'),
      '@': fileURLToPath(new URL('./src',import.meta.url))
    },
  },
  server:{
    // 是否开启https
    https: false,
    // 端口号
    port: 3000,
    // 监听所有地址
    host: '0.0.0.0',
    // 服务启动时是否自动打开浏览器
    open: false,
    // 允许跨域
    cors: true,
    // 自定义代理规则
    proxy: {},
  },
  define: {
    'process.env':{}
  },

  // 打包相关配置
  // build:{
  //   // 设置最终构建的浏览器兼容目标
  //   target: 'es2015',
  //   // 构建后是否生成 source map文件
  //   sourcemap: false,
  //   // chunk 大小警告的限制(以 kbs 为单位)
  //   chunkSizeWarningLimit: 2000,
  //   // 启用/禁用 gzip 压缩大小报告
  //   reportCompressedSize: false
  // }
})
