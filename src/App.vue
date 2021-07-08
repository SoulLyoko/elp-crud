<template>
  <div style="padding: 10px">
    <elp-table
      v-model="formData"
      :data="tableData"
      :option="tableOption"
      @rowDel="handleDel"
      @rowSave="handleSave"
      @rowUpdate="handleUpdate"
      @rowReset="handleReset"
    >
      <template #slot>
        <span>自定义列</span>
      </template>
      <template #slotForm>
        <el-button type="primary">自定义表单</el-button>
      </template>
    </elp-table>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch, onMounted } from "vue";
import { defineOption } from "../packages";

const dictData = new Promise(resolve => {
  const data = [
    { label: "dict1", value: "1" },
    { label: "dict2", value: "2" },
    { label: "dict3", value: "3" },
    { label: "dict4", value: "4" }
  ];
  setTimeout(() => {
    resolve({ data });
  }, 1000);
});

const casDictData = new Promise(resolve => {
  const data = [
    {
      label: "dict1",
      value: "1",
      children: [
        { label: "dict1-1", value: "1-1" },
        { label: "dict1-2", value: "1-2" }
      ]
    },
    { label: "dict2", value: "2" },
    { label: "dict3", value: "3" },
    { label: "dict4", value: "4" }
  ];
  setTimeout(() => {
    resolve({ data });
  }, 1000);
});

const formData = ref<any>({ checkbox: ["1", "2"] });

const tableData = [
  {
    radio: "1",
    checkbox: ["1", "2"],
    input: "input",
    password: "123456",
    textarea: "textarea",
    number: 123,
    select: "1",
    selectmultiple: ["1", "2"],
    cascader: "1",
    switch: true,
    slider: 50,
    time: new Date(),
    date: new Date(),
    datetime: new Date(),
    rate: 3,
    text: "text"
  },
  {
    radio: "1",
    password: "123456",
    checkbox: ["1", "2"],
    input: "",
    textarea: "textarea",
    number: 123,
    select: "1",
    selectmultiple: ["1", "2"],
    cascader: "1",
    switch: true,
    slider: 50,
    time: new Date(),
    date: new Date(),
    datetime: new Date(),
    rate: 5,
    text: "text"
  }
];
const tableOption = computed(() => {
  return defineOption({
    viewBtn: true,
    column: [
      {
        label: "单选框",
        prop: "radio",
        type: "radio",
        search: true,
        button: true,
        // hide: true,
        // addDisplay: false,
        dictData
      },
      {
        label: "多选框",
        prop: "checkbox",
        type: "checkbox",
        search: true,
        border: !formData.value.input,
        dictData
        // editDisabled: true
      },
      { label: "输入框", prop: "input", type: "input", search: true },
      { label: "密码框", prop: "password", type: "input" },
      { label: "文本域", prop: "textarea", type: "textarea" },
      { label: "计数器", prop: "number", type: "number" },
      { label: "选择器", prop: "select", type: "select", dictData },
      { label: "选择器(多选)", prop: "selectmultiple", type: "select", multiple: true, dictData },
      { label: "级联选择器", prop: "cascader", type: "cascader", dictData: casDictData },
      { label: "开关", prop: "switch", type: "switch" },
      { label: "滑块", prop: "slider", type: "slider" },
      { label: "时间选择器", prop: "time", type: "time" },
      { label: "日期选择器", prop: "date", type: "date" },
      { label: "日期时间选择器", prop: "datetime", type: "datetime", format: "YYYY年MM月DD日 HH时mm分ss秒" },
      { label: "评分", prop: "rate", type: "rate" },
      {
        label: "文字",
        prop: "text",
        type: "text",
        formatter() {
          return "text formatter";
        }
      },
      { label: "自定义插槽", prop: "slot" }
    ]
  });
});
const handleDel = (row: any) => {
  console.log("🚀 ~ file: App.vue ~ line 17 ~ handleDel ~ row", row);
};
const handleSave = (row: any, done: () => any) => {
  console.log("🚀 ~ file: App.vue ~ line 139 ~ handleSave ~ row", row);
  done();
};
const handleUpdate = (row: any, done: () => any) => {
  console.log("🚀 ~ file: App.vue ~ line 143 ~ handleUpdate ~ row", row);
  done();
};
const handleReset = () => {
  // formData.value = { checkbox: [] };
};
</script>

<style>
#app,
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
