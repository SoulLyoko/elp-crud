import { ref, computed, Ref } from "vue";
import { FormOption } from "../../../form/src/types";
import { TableOption } from "../types";

export function useSearch(tableOption: Ref<TableOption>) {
  const searchFormData = ref({});
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

  const searchShow = ref(tableOption.value.searchShow);
  const onSearchShow = () => {
    searchShow.value = !searchShow.value;
  };

  return {
    searchFormData,
    searchOption,
    searchShow,
    onSearchShow
  };
}
