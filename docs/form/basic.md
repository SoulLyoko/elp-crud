# 基础

## 示例

<form-basic></form-basic>

<details>
<summary>查看代码</summary>

<<< @/.vitepress/components/form/basic/index.vue
<<< @/.vitepress/components/form/defaults.ts

</details>

## Props

| 参数    | 说明         | 类型                                              | 默认值 |
| ------- | ------------ | ------------------------------------------------- | ------ |
| v-model | 表单绑定数据 | object                                            | -      |
| option  | 表单配置     | [FormOption](../typedoc/interfaces/formoption.md) | -      |

## Methods

| 方法名 | 说明 | 参数 |
| ------ | ---- | ---- |


## Events

| 事件名称 | 说明                 | 回调参数                                  |
| -------- | -------------------- | ----------------------------------------- |
| submit   | 点击表单提交按钮触发 | (row:表单数据,done:表单关闭 loading 函数) |
| reset    | 点击表单清空按钮触发 |                                           |
