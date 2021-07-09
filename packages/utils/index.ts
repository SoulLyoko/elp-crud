import { FormOption } from "../form/src/types";
import { TableOption } from "../table/src/types";
import { DefineComponent } from "vue";

export function flatTree(tree: any[], childrenKey: string = "children"): any[] {
  return tree
    .map(item => {
      if (item[childrenKey]?.length) {
        return [item, flatTree(item[childrenKey])];
      } else {
        return item;
      }
    })
    .flat(Infinity);
}
/**
 * 定义Table或Form的配置
 */
export function defineOption(option: TableOption | FormOption) {
  return option;
}

export function tupleArray<T extends string[]>(...v: T) {
  return v;
}

export type DefineProps<P> = InstanceType<DefineComponent<P>>["$props"];

export type DefineEmits<E extends string[]> = InstanceType<DefineComponent<{}, {}, {}, {}, {}, {}, {}, E>>["$emit"];

export type ComponentInstance<P, E extends string[]> = InstanceType<DefineComponent<P, {}, {}, {}, {}, {}, {}, E>>;
