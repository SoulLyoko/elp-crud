import { createApp } from "vue";
import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import "element-plus/packages/theme-chalk/src/index.scss";
import "dayjs/locale/zh-cn";
import locale from "element-plus/lib/locale/lang/zh-cn";
import ElpCrud from "../lib";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus, { locale });
app.use(ElpCrud);
app.mount("#app");
