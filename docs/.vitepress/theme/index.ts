import DefaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
import ElpCrud from "../../../";
import "../../../lib/style.css";
import components from "../components";
import "./index.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus, { locale });
    app.use(ElpCrud);
    components.forEach(component => {
      app.component(component.name, component);
    });
  }
};
