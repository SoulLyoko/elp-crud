import { useDict } from "../../../dict";
import { FormColumnOption } from "../types";

export function useRender(dict: ReturnType<typeof useDict>) {
  const { getDictStorage } = dict;

  function formItemCompnentName(col: FormColumnOption) {
    switch (col.type) {
      case "radio":
      case "checkbox":
        return "el-" + col.type + "-group";
      case "textarea":
        return "el-input";
      case "number":
        return "el-input-number";
      case "time":
      case "date":
        return "el-" + col.type + "-picker";
      case "datetime":
        return "el-date-picker";
      default:
        return "el-" + col.type;
    }
  }
  function formItemComponentAttrs(col: FormColumnOption) {
    const attrs = col.attrs ?? {};
    switch (col.type) {
      case "cascader":
        attrs.options = getDictStorage(col.prop);
        break;
      case "textarea":
        attrs.type = col.type;
        break;
      case "select":
        if (col.multiple) {
          attrs.multiple = col.multiple;
        }
      case "time":
      case "date":
      case "datetime":
        attrs.type = attrs.type || col.type;
        if (attrs.format || col.format) {
          attrs.format = attrs.format || col.format;
        }
        break;
      default:
        break;
    }
    return attrs;
  }
  function formItemRadioCheckbox(col: FormColumnOption) {
    const name = "el-" + col.type + (col.button ? "-button" : "");
    return name;
  }

  return {
    formItemCompnentName,
    formItemComponentAttrs,
    formItemRadioCheckbox
  };
}
