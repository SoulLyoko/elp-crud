[ElpCrud](../README.md) / [Exports](../modules.md) / TableOption

# Interface: TableOption

## Hierarchy

- `TableAndForm`

  ↳ **`TableOption`**

## Indexable

▪ [x: `string`]: `any`

## Table of contents

### Properties

- [addBtn](tableoption.md#addbtn)
- [addBtnIcon](tableoption.md#addbtnicon)
- [addBtnText](tableoption.md#addbtntext)
- [column](tableoption.md#column)
- [delBtn](tableoption.md#delbtn)
- [delBtnIcon](tableoption.md#delbtnicon)
- [delBtnText](tableoption.md#delbtntext)
- [editBtn](tableoption.md#editbtn)
- [editBtnIcon](tableoption.md#editbtnicon)
- [editBtnText](tableoption.md#editbtntext)
- [formMenu](tableoption.md#formmenu)
- [index](tableoption.md#index)
- [indexLabel](tableoption.md#indexlabel)
- [menu](tableoption.md#menu)
- [menuBar](tableoption.md#menubar)
- [menuPosition](tableoption.md#menuposition)
- [menuSpan](tableoption.md#menuspan)
- [menuWidth](tableoption.md#menuwidth)
- [modalType](tableoption.md#modaltype)
- [refreshBtn](tableoption.md#refreshbtn)
- [resetBtn](tableoption.md#resetbtn)
- [resetBtnIcon](tableoption.md#resetbtnicon)
- [resetBtnText](tableoption.md#resetbtntext)
- [searchBtn](tableoption.md#searchbtn)
- [searchMenuSpan](tableoption.md#searchmenuspan)
- [searchShow](tableoption.md#searchshow)
- [searchSpan](tableoption.md#searchspan)
- [selection](tableoption.md#selection)
- [submitBtn](tableoption.md#submitbtn)
- [submitBtnIcon](tableoption.md#submitbtnicon)
- [submitBtnText](tableoption.md#submitbtntext)
- [viewBtn](tableoption.md#viewbtn)
- [viewBtnIcon](tableoption.md#viewbtnicon)
- [viewBtnText](tableoption.md#viewbtntext)

## Properties

### addBtn

• `Optional` **addBtn**: ``true``

- 说明:新增按钮
- 默认值:true

#### Defined in

[packages/table/src/types.ts:16](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L16)

___

### addBtnIcon

• `Optional` **addBtnIcon**: `string`

- 说明:新增按钮图标
- 默认值:el-icon-plus

#### Defined in

[packages/table/src/types.ts:26](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L26)

___

### addBtnText

• `Optional` **addBtnText**: `string`

- 说明:新增按钮文字
- 默认值:新增

#### Defined in

[packages/table/src/types.ts:21](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L21)

___

### column

• **column**: [`TableColumnOption`](tablecolumnoption.md)[]

- 说明:列配置

#### Overrides

TableAndForm.column

#### Defined in

[packages/table/src/types.ts:30](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L30)

___

### delBtn

• `Optional` **delBtn**: `boolean`

- 说明:删除按钮
- 默认值:true

#### Defined in

[packages/table/src/types.ts:35](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L35)

___

### delBtnIcon

• `Optional` **delBtnIcon**: `string`

- 说明:删除按钮图标
- 默认值:el-icon-delete

#### Defined in

[packages/table/src/types.ts:45](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L45)

___

### delBtnText

• `Optional` **delBtnText**: `string`

- 说明:删除按钮文字
- 默认值:删除

#### Defined in

[packages/table/src/types.ts:40](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L40)

___

### editBtn

• `Optional` **editBtn**: `boolean`

- 说明:编辑按钮
- 默认值:true

#### Defined in

[packages/table/src/types.ts:50](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L50)

___

### editBtnIcon

• `Optional` **editBtnIcon**: `string`

- 说明:编辑按钮图标
- 默认值:el-icon-edit

#### Defined in

[packages/table/src/types.ts:60](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L60)

___

### editBtnText

• `Optional` **editBtnText**: `string`

- 说明:编辑按钮文字
- 默认值:编辑

#### Defined in

[packages/table/src/types.ts:55](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L55)

___

### formMenu

• `Optional` **formMenu**: `boolean`

- 说明:表单菜单按钮
- 默认值:true

#### Inherited from

TableAndForm.formMenu

#### Defined in

[packages/form/src/types.ts:78](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L78)

___

### index

• `Optional` **index**: `boolean`

- 说明:是否显示序号列
- 默认值:true

#### Defined in

[packages/table/src/types.ts:65](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L65)

___

### indexLabel

• `Optional` **indexLabel**: `string`

- 说明:序号列的标题
- 默认值:#

#### Defined in

[packages/table/src/types.ts:70](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L70)

___

### menu

• `Optional` **menu**: `boolean`

- 说明:是否显示菜单列
- 默认值:true

#### Defined in

[packages/table/src/types.ts:75](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L75)

___

### menuBar

• `Optional` **menuBar**: `boolean`

- 说明:是否显示菜单栏，即新增按钮所在栏
- 默认值:true

#### Defined in

[packages/table/src/types.ts:85](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L85)

___

### menuPosition

• `Optional` **menuPosition**: ``"left"`` \| ``"center"`` \| ``"right"``

- 说明:菜单按钮排列方式
- 可选:"left" | "center" | "right"
- 默认值:center

#### Inherited from

TableAndForm.menuPosition

#### Defined in

[packages/form/src/types.ts:84](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L84)

___

### menuSpan

• `Optional` **menuSpan**: `number`

- 说明:菜单按钮占的栅格
- 默认值:24

#### Inherited from

TableAndForm.menuSpan

#### Defined in

[packages/form/src/types.ts:89](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L89)

___

### menuWidth

• `Optional` **menuWidth**: `string`

- 说明:菜单列宽度
- 默认值:260px

#### Defined in

[packages/table/src/types.ts:80](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L80)

___

### modalType

• `Optional` **modalType**: ``"dialog"`` \| ``"drawer"``

- 说明:表单弹窗类型
- 可选:"dialog" | "drawer"
- 默认值:dialog

#### Defined in

[packages/table/src/types.ts:91](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L91)

___

### refreshBtn

• `Optional` **refreshBtn**: `boolean`

- 说明:搜索栏清空按钮
- 默认值:true

#### Defined in

[packages/table/src/types.ts:96](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L96)

___

### resetBtn

• `Optional` **resetBtn**: `boolean`

- 说明:清空按钮
- 默认值:true

#### Inherited from

TableAndForm.resetBtn

#### Defined in

[packages/form/src/types.ts:94](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L94)

___

### resetBtnIcon

• `Optional` **resetBtnIcon**: `string`

- 说明:清空按钮图标
- 默认值:el-icon-delete

#### Inherited from

TableAndForm.resetBtnIcon

#### Defined in

[packages/form/src/types.ts:99](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L99)

___

### resetBtnText

• `Optional` **resetBtnText**: `string`

- 说明:清空按钮文字
- 默认值:清空

#### Inherited from

TableAndForm.resetBtnText

#### Defined in

[packages/form/src/types.ts:104](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L104)

___

### searchBtn

• `Optional` **searchBtn**: `boolean`

- 说明:搜索栏搜索按钮
- 默认值:true

#### Defined in

[packages/table/src/types.ts:101](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L101)

___

### searchMenuSpan

• `Optional` **searchMenuSpan**: `number`

- 说明:搜索栏按钮占的栅格
- 默认值:6

#### Defined in

[packages/table/src/types.ts:106](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L106)

___

### searchShow

• `Optional` **searchShow**: `boolean`

- 说明:是否显示搜索栏
- 默认值:true

#### Defined in

[packages/table/src/types.ts:111](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L111)

___

### searchSpan

• `Optional` **searchSpan**: `number`

- 说明:搜索栏每一项占的栅格
- 默认值:6

#### Defined in

[packages/table/src/types.ts:116](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L116)

___

### selection

• `Optional` **selection**: `boolean`

- 说明:是否显示选择列
- 默认值:false

#### Defined in

[packages/table/src/types.ts:121](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L121)

___

### submitBtn

• `Optional` **submitBtn**: `boolean`

- 说明:提交按钮
- 默认值:true

#### Inherited from

TableAndForm.submitBtn

#### Defined in

[packages/form/src/types.ts:109](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L109)

___

### submitBtnIcon

• `Optional` **submitBtnIcon**: `string`

- 说明:提交按钮图标
- 默认值:el-icon-check

#### Inherited from

TableAndForm.submitBtnIcon

#### Defined in

[packages/form/src/types.ts:114](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L114)

___

### submitBtnText

• `Optional` **submitBtnText**: `string`

- 说明:提交按钮文字
- 默认值:提交

#### Inherited from

TableAndForm.submitBtnText

#### Defined in

[packages/form/src/types.ts:119](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L119)

___

### viewBtn

• `Optional` **viewBtn**: `boolean`

- 说明:查看按钮
- 默认值:true

#### Defined in

[packages/table/src/types.ts:126](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L126)

___

### viewBtnIcon

• `Optional` **viewBtnIcon**: `string`

- 说明:查看按钮图标
- 默认值:el-icon-view

#### Defined in

[packages/table/src/types.ts:136](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L136)

___

### viewBtnText

• `Optional` **viewBtnText**: `string`

- 说明:查看按钮文字
- 默认值:查看

#### Defined in

[packages/table/src/types.ts:131](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L131)
