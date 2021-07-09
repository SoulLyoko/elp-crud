import { cloneDeep } from "lodash";
import { ref, computed, Ref } from "vue";
import { FormOption } from "../../../form/src/types";
import { TableProps, TableEmit, TableOption } from "../types";

export function useSearch({
  props,
  emit,
  tableOption
}: {
  props: TableProps;
  emit: TableEmit;
  tableOption: Ref<TableOption>;
}) {
  const searchOption = computed(() => {
    return {
      size: tableOption.value.size,
      menuSpan: 6,
      column: tableOption.value.column
        .filter(col => col.search)
        .map(col => {
          let type = "input";
          if (["radio", "checkbox", "select"].includes(col.type || "")) {
            type = "select";
          } else if (["date", "time", "datetime"].includes(col.type || "")) {
            type = col.type || "input";
          }
          const span = col.searchSpan ?? 6;
          return {
            label: col.label,
            prop: col.prop,
            type,
            span,
            attrs: {
              clearable: true,
              placeholder: type === "input" ? "请输入 " + col.label : "请选择 " + col.label
            }
          };
        })
    } as FormOption;
  });

  const defaultSearchFormData = cloneDeep({ ...props.search });
  const searchFormData = computed<any>({
    get() {
      return props.search;
    },
    set(val) {
      emit("update:search", val);
    }
  });

  searchFormData.value = defaultSearchFormData;

  const searchShow = ref(tableOption.value.searchShow);
  const onSearchShow = () => {
    searchShow.value = !searchShow.value;
  };

  function handleSearch(data: any, done: () => void) {
    emit("search", data, done);
  }
  function handleSearchReset(data: any, done: () => void) {
    searchFormData.value = {};
    emit("searchReset", data, done);
  }

  return {
    searchFormData,
    searchOption,
    searchShow,
    onSearchShow,
    handleSearch,
    handleSearchReset
  };
}
