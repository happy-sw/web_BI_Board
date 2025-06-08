import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import svgLoader from "vite-svg-loader";

// https://vite.dev/config/
export default defineConfig({
  // 插件配置
  plugins: [vue(), svgLoader()],

  //css预处理器
  css: {
    postcss: {},
  },

  //模块解析配置
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  // 开发服务器配置
  server: {
    hmr: true,
  },
});
