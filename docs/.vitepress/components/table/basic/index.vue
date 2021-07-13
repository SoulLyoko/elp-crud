<template>
  <demo-container>
    <elp-table
      v-model="formData"
      v-model:search="searchForm"
      :data="tableData"
      :option="tableOption"
      @rowSave="handleSave"
      @rowUpdate="handleUpdate"
      @rowDel="handleDel"
      @search="handleSearch"
      @searchReset="getData"
    >
    </elp-table>
  </demo-container>
</template>

<script lang="ts">
export default {
  name: "table-basic"
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { defaultOption, defaultData } from "../defaults";

interface Data {
  title: string;
  content: string;
  date: string;
}
const formData = ref<Data>({} as Data);
const searchForm = ref<Data>({} as Data);
const tableOption = ref(defaultOption);
const tableData = ref<Data[]>([]);

getData();

function getData() {
  //模拟搜索
  tableData.value = defaultData.filter(item => {
    return Object.keys(searchForm.value).every(key => {
      return item[key as keyof Data]?.includes(searchForm.value[key as keyof Data]);
    });
  });
}
function handleSave(data: Data, done: () => void) {
  ElMessage.success("提交成功");
  done();
}
function handleUpdate(data: Data, done: () => void) {
  ElMessage.success("提交成功");
  done();
}
async function handleDel(data: Data) {
  await ElMessageBox.confirm("确认删除？", "提示");
  ElMessage.success("删除成功");
}
function handleSearch(search: Data, done: () => void) {
  getData();
  done();
}
</script>
