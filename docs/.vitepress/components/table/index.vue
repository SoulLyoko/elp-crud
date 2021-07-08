<template>
  <elp-table
    v-model="formData"
    :data="tableData"
    :option="tableOption"
    @rowSave="handleSave"
    @rowUpdate="handleUpdate"
    @rowDel="handleDel"
  ></elp-table>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({});
const tableData = ref([{ name: "name", content: "content" }]);
const tableOption = ref({
  column: [
    { label: "nameLabel", prop: "name" },
    { label: "contentLabel", prop: "content" }
  ]
});
function handleSave(data, done) {
  console.log(data);
  done();
}
function handleUpdate(data, done) {
  console.log(data);
  done();
}
function handleDel(data) {
  console.log(data);
}
</script>
