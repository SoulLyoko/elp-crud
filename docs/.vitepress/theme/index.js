import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
import ElpCrud from "../../../";
import "../../../lib/style.css";
import exTable from "../components/table/index.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus, { locale });
    app.use(ElpCrud);
    app.component("ex-elp-table", exTable);
  }
};
