// defaults.ts
import { defineOption } from "../../../../packages"; //ts环境下可以从elp-crud导入defineOption使用，来获取类型提示

export const dictData = [
  { label: "dict1", value: "1" },
  { label: "dict2", value: "2" },
  { label: "dict3", value: "3" }
];
export const dictDataFunction = () => dictData;
export const dictDataPromise = new Promise(resolve => {
  setTimeout(() => resolve({ data: dictData }), 1000);
});
export const dictDataTree = [
  {
    label: "dict1",
    value: "1",
    children: [{ label: "dict1-1", value: "1-1" }]
  },
  {
    label: "dict2",
    value: "2",
    children: [
      { label: "dict2-1", value: "2-1" },
      { label: "dict2-2", value: "2-2" }
    ]
  },
  {
    label: "dict3",
    value: "3",
    children: [
      { label: "dict3-1", value: "3-1" },
      { label: "dict3-2", value: "3-2" },
      { label: "dict3-3", value: "3-3" }
    ]
  }
];

export const defaultOption = defineOption({
  column: [
    { label: "单选框", prop: "radio", type: "radio", dictData: dictDataPromise },
    { label: "多选框", prop: "checkbox", type: "checkbox", dictData: dictDataFunction },
    { label: "输入框", prop: "input" },
    { label: "密码框", prop: "password", type: "password" },
    { label: "文本域", prop: "textarea", type: "textarea" },
    { label: "计数器", prop: "number", type: "number" },
    { label: "选择器", prop: "select", type: "select", dictData },
    { label: "选择器(多选)", prop: "selectmultiple", type: "select", multiple: true, dictData },
    { label: "级联选择器", prop: "cascader", type: "cascader", dictData: dictDataTree },
    { label: "开关", prop: "switch", type: "switch" },
    { label: "滑块", prop: "slider", type: "slider" },
    { label: "时间选择器", prop: "time", type: "time", format: "HH时mm分ss秒" },
    { label: "日期选择器", prop: "date", type: "date", format: "YYYY年MM月DD日" },
    { label: "日期时间选择器", prop: "datetime", type: "datetime" },
    { label: "评分", prop: "rate", type: "rate" },
    {
      label: "文字",
      prop: "text",
      type: "text",
      formatter(row: any) {
        return row.text + " formatter";
      }
    },
    { label: "自定义插槽", prop: "slot" }
  ]
});

export const defaultData = {
  radio: "1",
  checkbox: ["1", "2"],
  input: "input",
  password: "123456",
  textarea: "textarea",
  number: 123,
  select: "1",
  selectmultiple: ["1", "2"],
  cascader: "1-1",
  switch: true,
  slider: 50,
  time: new Date(),
  date: new Date(),
  datetime: new Date(),
  rate: 3,
  text: "text",
  slot: "自定义插槽"
};
