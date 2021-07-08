import { ref, Ref } from "vue";
import { get as ObjectGet } from "lodash";
import { FormColumnOption } from "~/form/src/types";
import { DICT_OPTION } from "./defaults";
import { DictItem, DictOption } from "./types";

export type DictStorage = Record<string, DictItem[]>;
export type RefDictStorage = Ref<DictStorage>;

export const useDict = (dictStorageInject?: Ref<DictStorage>) => {
  const dictStorage = dictStorageInject || ref<DictStorage>({});

  const setDictStorage = (prop: string, data: (DictItem & { [x: string]: any })[], option?: Partial<DictOption>) => {
    const dictOption = {
      ...DICT_OPTION,
      ...(option || {})
    };
    dictStorage.value[prop] = data.map(item => {
      const dictItem: DictItem = {
        label: item[dictOption.label],
        value: item[dictOption.value]
      };
      if (item[dictOption.children]) {
        dictItem.children = item[dictOption.children];
      }
      return dictItem;
    });
  };

  const getDictStorage = (prop: string) => {
    return dictStorage.value[prop];
  };

  const handleDictData = (col: FormColumnOption) => {
    const dictOption = {
      ...DICT_OPTION,
      ...(col.dictOption || {})
    };
    dictStorage.value[col.prop] = [];
    const dictDataType = Object.prototype.toString.call(col.dictData);
    if (dictDataType.includes("Function")) {
      const dictDataFunction = col.dictData as () => DictItem[];
      setDictStorage(col.prop, dictDataFunction(), dictOption);
    } else if (dictDataType.includes("Promise")) {
      const dictDataPromise = col.dictData as Promise<any>;
      dictDataPromise
        .then(res => {
          const data = ObjectGet({ res }, dictOption.res, []);
          setDictStorage(col.prop, data, dictOption);
        })
        .catch(err => console.error("请求字典错误:" + err));
    } else if (dictDataType.includes("Array")) {
      setDictStorage(col.prop, col.dictData as DictItem[], dictOption);
    }
  };

  return {
    dictStorage,
    setDictStorage,
    getDictStorage,
    handleDictData
  };
};
