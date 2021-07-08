import { PropType } from "vue";
import { TableOption } from "../../table/src/types";
import { FormColumnOption, FormOption } from "./types";

export const FORM_OPTION: Partial<FormOption> = {
  formMenu: true,
  menuPosition: "center",
  menuSpan: 24,
  labelWidth: "100px",
  resetBtn: true,
  resetBtnIcon: "el-icon-delete",
  resetBtnText: "清空",
  size: "small",
  submitBtn: true,
  submitBtnIcon: "el-icon-check",
  submitBtnText: "提交"
};

export const FORM_COLUMN_OPTION: Partial<FormColumnOption> = {
  span: 12
};

export const FORM_PROPS = {
  modelValue: { type: Object, default: () => ({}) },
  option: { type: Object as PropType<FormOption & TableOption>, default: () => ({}) }
};

export const FORM_EMITS = ["update:modelValue", "submit", "reset"];
