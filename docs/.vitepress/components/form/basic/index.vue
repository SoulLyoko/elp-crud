<template>
  <demo-container>
    <elp-form v-model="formData" :option="formOption" @submit="handleSubmit">
      <template #slotForm="{row}">
        <el-button type="primary">{{ row.slot }}</el-button>
      </template>
    </elp-form>
  </demo-container>
</template>

<script lang="ts">
export default {
  name: "form-basic"
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { defaultOption, defaultData } from "../defaults";

const formData = ref(defaultData);
const formOption = ref(defaultOption);

function handleSubmit(data: any, done: () => void) {
  ElMessage.success("提交成功");
  done();
}
</script>
