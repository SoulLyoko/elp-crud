<template>
  <el-form ref="elFormRef" class="elp-form" v-bind="formOption" :model="formData">
    <el-row :gutter="20">
      <el-col :span="col.span" v-for="col in formOption.column" :key="col.prop">
        <el-form-item class="elp-form-item" v-bind="col">
          <!-- label -->
          <template #label>
            <template v-if="$slots[col.prop + 'Label']">
              <slot :name="col.prop + 'Label'"></slot>
            </template>
            <template v-else>
              <span>{{ col.label }}</span>
            </template>
          </template>
          <!-- slot -->
          <template v-if="$slots[col.prop + 'Form']">
            <slot :name="col.prop + 'Form'"></slot>
          </template>
          <!-- custom component -->
          <template v-else-if="col.component">
            <component
              class="elp-form-item__component"
              :is="col.component"
              v-model="formData[col.prop]"
              v-bind="col.attrs || {}"
            ></component>
          </template>
          <!-- text -->
          <template v-else-if="col.type === 'text'">
            <span>{{ formData[col.prop] }}</span>
          </template>
          <!-- pure component -->
          <component
            class="elp-form-item__component"
            :is="formItemCompnentName(col)"
            v-model="formData[col.prop]"
            v-bind="formItemComponentAttrs(col)"
            v-else
          >
            <!-- render: cascader label,select option,radio,radio-button,checkbox,checkbox-button -->
            <template #default="{data}">
              <template v-if="col.type === 'cascader'">
                {{ data.label }}
              </template>
              <template v-else-if="['radio', 'checkbox'].includes(col.type || '')">
                <component
                  :is="formItemRadioCheckbox(col)"
                  v-for="dict in getDictStorage(col.prop)"
                  :key="dict.value"
                  v-bind="dict"
                  :label="dict.value"
                  :border="col.border"
                >
                  {{ dict.label }}
                </component>
              </template>
              <template v-else-if="col.type === 'select'">
                <el-option
                  v-for="dict in getDictStorage(col.prop)"
                  :key="dict.value"
                  v-bind="dict"
                  :label="dict.label"
                  :value="dict.value"
                >
                </el-option>
              </template>
            </template>
          </component>
        </el-form-item>
      </el-col>
      <el-col
        class="elp-form__menu"
        :class="'elp-form__menu--' + formOption?.menuPosition"
        :span="formOption.menuSpan"
        v-if="formOption.formMenu"
      >
        <div>
          <el-button
            type="primary"
            :size="formOption.size"
            :icon="formOption.submitBtnIcon"
            :loading="submitLoading"
            @click="handleSubmit"
            v-if="formOption.submitBtn"
          >
            {{ formOption.submitBtnText }}
          </el-button>
          <el-button
            type="default"
            :size="formOption.size"
            :icon="formOption.resetBtnIcon"
            @click="handleReset"
            v-if="formOption.resetBtn"
          >
            {{ formOption.resetBtnText }}
          </el-button>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts">
import { defineProps, defineEmits, inject, defineComponent } from "vue";
import { ElForm, ElFormItem } from "element-plus";
import { useDict, RefDictStorage } from "~/dict";
import { useForm } from "./use/form";
import { useRender } from "./use/render";
import { FORM_PROPS, FORM_EMITS } from "./defaults";

export default defineComponent({
  name: "elp-form",
  components: { ElForm, ElFormItem },
  props: FORM_PROPS,
  emits: FORM_EMITS,
  setup(props, { emit }) {
    const dictStorageInject = inject<RefDictStorage>("dictStorage");
    const dict = useDict(dictStorageInject);
    const { formItemCompnentName, formItemComponentAttrs, formItemRadioCheckbox } = useRender(dict);
    const { elFormRef, formOption, formData, handleSubmit, handleReset, submitLoading } = useForm({
      props,
      emit,
      dict
    });

    const { getDictStorage, setDictStorage } = dict;
    const getDict = getDictStorage;
    const setDict = setDictStorage;

    return {
      formItemCompnentName,
      formItemComponentAttrs,
      formItemRadioCheckbox,
      elFormRef,
      formOption,
      formData,
      handleSubmit,
      handleReset,
      submitLoading,
      getDictStorage,
      getDict,
      setDict
    };
  }
});

/**
 * setup sugar
 */
// const props = defineProps(FORM_PROPS);
// const emit = defineEmits(FORM_EMITS);

// const dictStorageInject = inject<any>("dictStorage");
// const dict = useDict(dictStorageInject);
// const { formItemCompnentName, formItemComponentAttrs, formItemRadioCheckbox } = useRender(dict);
// const { elFormRef, formOption, formData, handleSubmit, handleReset, submitLoading } = useForm({ props, emit, dict });

// const { getDictStorage, setDictStorage } = dict;
// const getDict = getDictStorage;
// const setDict = setDictStorage;
</script>

<style lang="scss">
.elp-form {
  .elp-form-item {
    .elp-form-item__component {
      width: 100%;
    }
  }
  .elp-form__menu {
    display: flex;
    &--left {
      justify-content: flex-start;
    }
    &--center {
      justify-content: center;
    }
    &--right {
      justify-content: flex-end;
    }
  }
}
</style>
