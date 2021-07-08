import dayjs from "dayjs";
import { getDictLabel, useDict } from "../../../dict";
import { FormColumnOption } from "../../../form/src/types";
import { DATE_FORMAT } from "../defaults";

export function useRender(dict: ReturnType<typeof useDict>) {
  const { getDictStorage, handleDictData } = dict;

  const renderIndex = (index: number) => {
    return index + 1;
  };

  const renderColumn = (row: any, col: FormColumnOption) => {
    if (col.formatter instanceof Function) {
      return col.formatter(row, col);
    } else if (["select", "radio", "checkbox", "cascader"].includes(col.type || "") && col.dictData) {
      if (col.dictData && !getDictStorage(col.prop)) {
        handleDictData(col);
      }
      return renderByDictData(row, col);
    } else if (["date", "time", "datetime"].includes(col.type || "")) {
      return renderByDateFormat(row, col);
    }
    return row[col.prop];
  };

  const renderByDictData = (row: any, col: FormColumnOption) => {
    const value = row[col.prop];
    const result = getDictLabel(value, getDictStorage(col.prop));
    return result;
  };

  const renderByDateFormat = (row: any, col: FormColumnOption) => {
    const value = row[col.prop];
    const result = dayjs(value).format(col.format || DATE_FORMAT[col.type as keyof typeof DATE_FORMAT]);
    return result;
  };

  return {
    renderIndex,
    renderColumn
  };
}
