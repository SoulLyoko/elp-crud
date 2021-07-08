import { App } from "vue";
import { TableOption } from "./table/src/types";
import { FormOption } from "./form/src/types";
import * as components from "./components";

type Option = {
  tableOption?: TableOption;
  formOption?: FormOption;
};

export default {
  install: (app: App, options: Option) => {
    Object.keys(components).forEach((key: string) => {
      const component = components[key as keyof typeof components];
      app.component(component.name, component);
    });
    app.config.globalProperties.$ELPCRUD = {
      tableOption: options?.tableOption ?? {},
      formOption: options?.formOption ?? {}
    };
  }
};
