<template>
  <container>
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
    ></elp-table>
  </container>
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

const formData = ref({});
const searchForm = ref({});
const tableOption = ref(defaultOption);
const tableData = ref([]);

getData();

function getData() {
  //模拟搜索
  tableData.value = defaultData.filter(item => {
    return Object.keys(searchForm.value).every(key => {
      return item[key]?.includes(searchForm.value[key]);
    });
  });
}
function handleSave(data, done) {
  ElMessage.success("提交成功");
  done();
}
function handleUpdate(data, done) {
  ElMessage.success("提交成功");
  done();
}
async function handleDel(data) {
  await ElMessageBox.confirm("确认删除？", "提示");
  ElMessage.success("删除成功");
}
function handleSearch(search, done) {
  getData();
  done();
}
</script>
