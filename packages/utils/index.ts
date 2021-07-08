import { FormOption } from "../form/src/types";
import { TableOption } from "../table/src/types";

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

export interface DefineEmit<T> {
  <K extends keyof T>(e: T[K], ...args: any[]): void;
}
