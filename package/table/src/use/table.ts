import { cloneDeep } from "lodash";
import { computed, nextTick, ref } from "vue";
import { useDict } from "~/dict/src";
import { TableOption } from "~/elp-crud";
import { TABLE_OPTION, TABLE_COLUMN_OPTION } from "../defaults";
import { TableProps, TableEmits } from "../types";

export function useTable({
  props,
  emit,
  dict
}: {
  props: TableProps;
  emit: TableEmits;
  dict: ReturnType<typeof useDict>;
}) {
  const { getDictStorage, handleDictData } = dict;

  const tableOption = computed(() => {
    return {
      ...TABLE_OPTION,
      ...props.option,
      column: props.option.column
        .filter(column => {
          const col = { ...TABLE_COLUMN_OPTION, ...column };
          return !col.hide;
        })
        .map(column => {
          if (column.dictData && !getDictStorage(column.prop)) {
            handleDictData(column);
          }
          const col = { ...TABLE_COLUMN_OPTION, attrs: {}, ...column };
          return col;
        })
    } as TableOption;
  });

  const formOption = computed(() => {
    const option = {
      ...TABLE_OPTION,
      ...props.option,
      column: props.option.column
        .filter(column => {
          const col = { ...TABLE_COLUMN_OPTION, ...column };
          const displayFlags = [];
          displayFlags.push(col.display);
          formType.value === "add" && displayFlags.push(col.addDisplay);
          formType.value === "edit" && displayFlags.push(col.editDisplay);
          const display = displayFlags.every(b => b);
          return display;
        })
        .map(column => {
          const col = { ...TABLE_COLUMN_OPTION, attrs: {}, ...column };
          const disabledFlags = [];
          disabledFlags.push(column.disabled);
          disabledFlags.push(formType.value === "view");
          formType.value === "add" && disabledFlags.push(col.addDisabled);
          formType.value === "edit" && disabledFlags.push(col.editDisabled);
          const disabled = disabledFlags.some(b => b);
          col.attrs.disabled = disabled;
          return col;
        })
    };
    if (formType.value === "view") {
      option.formMenu = false;
    }
    return option as TableOption;
  });

  const elpFormRef = ref();
  const modalVisible = ref(false);
  const formType = ref<"add" | "edit" | "view">("add");
  const modalTitle = computed<string>(() => {
    const modalTitleMap = {
      add: tableOption.value.addTitle,
      edit: tableOption.value.editTitle,
      view: tableOption.value.viewTitle
    };
    return modalTitleMap[formType.value];
  });
  const defaultFormData = cloneDeep({ ...props.modelValue });
  const formData = computed<any>({
    get() {
      return props.modelValue;
    },
    set(val) {
      emit("update:modelValue", val);
    }
  });

  function rowAdd() {
    formData.value = cloneDeep(defaultFormData);
    formType.value = "add";
    modalVisible.value = true;
    nextTick(() => {
      formData.value = cloneDeep(defaultFormData);
    });
  }
  function rowEdit(row: any) {
    formType.value = "edit";
    formData.value = cloneDeep(defaultFormData);
    modalVisible.value = true;
    nextTick(() => {
      formData.value = cloneDeep(row);
    });
  }
  function rowView(row: any) {
    formType.value = "view";
    formData.value = cloneDeep(defaultFormData);
    modalVisible.value = true;
    nextTick(() => {
      formData.value = cloneDeep(row);
    });
  }
  function rowDel(row: any) {
    emit("rowDel", row);
  }
  function rowSave(data: any, done: () => void) {
    emit("rowSave", data, () => {
      modalVisible.value = false;
      done();
    });
  }
  function rowUpdate(data: any, done: () => void) {
    emit("rowUpdate", data, () => {
      done();
      modalVisible.value = false;
    });
  }
  function rowSubmit(data: any, done: () => void) {
    const submitEvent = {
      add: rowSave,
      edit: rowUpdate
    };
    submitEvent[formType.value as "add" | "edit"]?.(data, done);
  }
  function rowReset() {
    emit("rowReset");
  }
  function onRefresh() {
    emit("refresh");
  }

  return {
    elpFormRef,
    tableOption,
    formOption,
    formData,
    modalVisible,
    modalTitle,
    formType,
    rowAdd,
    rowEdit,
    rowView,
    rowDel,
    rowSubmit,
    rowReset,
    onRefresh
  };
}
