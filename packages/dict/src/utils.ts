import { flatTree } from "elp-crud/utils";
import { DictItem } from "./types";

export function getDictLabel(value: DictItem["value"], options: DictItem[], join = ",") {
  if (Array.isArray(value)) {
    return (
      flatTree(options)
        .filter(item => value.some(val => val === item.value))
        .map(item => item.label)
        .join(join) || value
    );
  } else {
    return flatTree(options).find(item => item.value === value)?.label || value;
  }
}
