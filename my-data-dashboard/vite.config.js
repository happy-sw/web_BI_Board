import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  // 插件配置
  plugins: [vue()],

  //模块解析配置
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  // 开发服务器配置
  server: {
    hmr: true,
  },
});
