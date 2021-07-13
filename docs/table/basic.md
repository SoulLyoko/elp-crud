# 基础

## 示例

<table-basic></table-basic>

<details>
<summary>查看代码</summary>

<<< @/.vitepress/components/table/basic/index.vue
<<< @/.vitepress/components/table/defaults.ts

</details>

## Props

| 参数           | 说明             | 类型                                                | 默认值 |
| -------------- | ---------------- | --------------------------------------------------- | ------ |
| v-model        | 表单绑定数据     | object                                              | -      |
| v-model:search | 搜索表单绑定数据 | object                                              | -      |
| data           | 表格数据         | array                                               | -      |
| option         | 表格配置         | [TableOption](../typedoc/interfaces/tableoption.md) | -      |

## Methods

| 方法名  | 说明             | 参数             |
| ------- | ---------------- | ---------------- |
| rowAdd  | 打开新增表单弹窗 | -                |
| rowEdit | 打开编辑表单弹窗 | (row:表格行数据) |
| rowView | 打开查看表单弹窗 | (row:表格行数据) |

## Events

| 事件名称    | 说明                       | 回调参数                                           |
| ----------- | -------------------------- | -------------------------------------------------- |
| refresh     | 点击刷新图标按钮触发       |                                                    |
| rowDel      | 点击操作菜单的删除按钮触发 | (row:表单数据)                                     |
| rowSave     | 新增表单提交后触发         | (row:表单数据,done:表单弹窗关闭函数)               |
| rowUpdate   | 编辑表单提交后触发         | (row:表单数据,done:表单弹窗关闭函数)               |
| rowReset    | 点击表单的清空按钮触发     |                                                    |
| search      | 点击搜索按钮触发           | (form:搜索表单数据,done:搜索表单关闭 loading 函数) |
| searchReset | 点击搜索栏的清空按钮触发   |                                                    |
