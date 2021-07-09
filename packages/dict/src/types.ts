export interface DictItem {
  label?: string;
  value?: string | number;
  children?: DictItem[];
  [x: string]: any;
}

/**
 * - 字典配置
 * ```
 * {
 *   label: "label",
 *   value: "value",
 *   children: "children",
 *   res: "res.data"
 * }
 * ```
 */
export interface DictOption {
  label?: string;
  value?: string;
  children?: string;
  /**
   * - 说明:请求返回的数据格式
   * - 默认值:res.data
   */
  res?: string;
}

/**
 * - 字典数据，有三种类型：
 * - DictItem数组
 * - 返回DictItem数组的函数
 * - Promise
 */
export type DictData = DictItem[] | ((...arg: any) => DictItem[]) | Promise<any>;
