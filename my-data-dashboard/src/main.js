import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/main.scss";
import "normalize.css";
import router from "./route";

const app = createApp(App);
app.use(router);
app.mount("#app");
