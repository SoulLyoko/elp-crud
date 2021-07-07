import { ref, computed } from "vue";
import { ElForm } from "element-plus";
import { cloneDeep } from "lodash";
import { useDict } from "~/dict";
import { formProps, formEmits } from "../types";
import { FORM_OPTION, FORM_COLUMN_OPTION } from "../defaults";

type ElFormContext = InstanceType<typeof ElForm>;

export function useForm({
  props,
  emit,
  dict
}: {
  props: typeof formProps;
  emit: typeof formEmits;
  dict: ReturnType<typeof useDict>;
}) {
  const { getDictStorage, handleDictData } = dict;

  const elFormRef = ref<ElFormContext>();
  const formOption = computed(() => {
    return {
      ...FORM_OPTION,
      ...props.option,
      column: props.option.column.map(column => {
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
