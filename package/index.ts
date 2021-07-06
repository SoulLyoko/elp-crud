import { App } from "vue";
import ElpTable from "./table";
import ElpForm from "./form";
import { TableOption } from "./elp-crud";
import { FormOption } from "./elp-crud";

export { ElpTable, ElpForm };

type Option = {
  tableOption: TableOption;
  formOption: FormOption;
};

export default {
  install: (app: App, options: Option) => {
    app.component("elp-table", ElpTable);
    app.component("elp-form", ElpForm);
    app.config.globalProperties.defaults = {};
    app.config.globalProperties.defaults.tableOption = options?.tableOption ?? {};
    app.config.globalProperties.defaults.formOption = options?.formOption ?? {};
  }
};
