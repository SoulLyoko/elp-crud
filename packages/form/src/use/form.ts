import { ref, computed } from "vue";
import { cloneDeep } from "lodash";
import { useDict } from "../../../dict";
import { FORM_OPTION, FORM_COLUMN_OPTION } from "../defaults";
import { FormProps, FormEmit } from "../types";

export function useForm({ props, emit, dict }: { props: FormProps; emit: FormEmit; dict: ReturnType<typeof useDict> }) {
  const { getDictStorage, handleDictData } = dict;

  const elFormRef = ref();
  const formOption = computed(() => {
    return {
      ...FORM_OPTION,
      ...props.option,
      column: props.option?.column.map(column => {
        if (column.dictData && !getDictStorage(column.prop)) {
          handleDictData(column);
        }
        return {
          ...FORM_COLUMN_OPTION,
          ...column
        };
      })
    };
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

  const submitLoading = ref(false);
  function handleSubmit() {
    submitLoading.value = true;
    emit("submit", formData, () => {
      submitLoading.value = false;
    });
  }
  const handleReset = () => {
    elFormRef.value?.resetFields();
    formData.value = defaultFormData;
    emit("reset");
  };

  return {
    elFormRef,
    formOption,
    formData,
    submitLoading,
    handleSubmit,
    handleReset
  };
}
