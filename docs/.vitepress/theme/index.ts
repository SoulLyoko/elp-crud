import { App } from "vue";
// import DefaultTheme from "vitepress/theme";
import defaultTheme from "vitepress/dist/client/theme-default";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
import ElpCrud from "../../../packages";
import components from "../components";
import "./index.css";

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ElementPlus, { locale });
    app.use(ElpCrud);
    components.forEach(component => {
      app.component(component.name, component);
    });
  }
};
