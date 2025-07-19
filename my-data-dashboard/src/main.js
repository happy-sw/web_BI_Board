import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/main.scss";
import "normalize.css";
import router from "./route";
// 导入 vue-echarts 组件
import VueECharts from "vue-echarts";

const app = createApp(App);
app.use(router);
app.component("v-chart", VueECharts);
app.mount("#app");
