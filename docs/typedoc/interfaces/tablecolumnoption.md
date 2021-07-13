[ElpCrud](../README.md) / [Exports](../modules.md) / TableColumnOption

# Interface: TableColumnOption

## Hierarchy

- `TableAndFormColumn`

  ↳ **`TableColumnOption`**

## Indexable

▪ [x: `string`]: `any`

## Table of contents

### Properties

- [addDisabled](tablecolumnoption.md#adddisabled)
- [addDisplay](tablecolumnoption.md#adddisplay)
- [attrs](tablecolumnoption.md#attrs)
- [border](tablecolumnoption.md#border)
- [button](tablecolumnoption.md#button)
- [component](tablecolumnoption.md#component)
- [dictData](tablecolumnoption.md#dictdata)
- [dictOption](tablecolumnoption.md#dictoption)
- [disabled](tablecolumnoption.md#disabled)
- [display](tablecolumnoption.md#display)
- [editDisabled](tablecolumnoption.md#editdisabled)
- [editDisplay](tablecolumnoption.md#editdisplay)
- [format](tablecolumnoption.md#format)
- [formatter](tablecolumnoption.md#formatter)
- [hide](tablecolumnoption.md#hide)
- [multiple](tablecolumnoption.md#multiple)
- [readonly](tablecolumnoption.md#readonly)
- [search](tablecolumnoption.md#search)
- [searchSpan](tablecolumnoption.md#searchspan)
- [span](tablecolumnoption.md#span)
- [viewDisplay](tablecolumnoption.md#viewdisplay)

## Properties

### addDisabled

• `Optional` **addDisabled**: `boolean`

- 说明:新增时是否禁用
- 默认值:false

#### Defined in

[packages/table/src/types.ts:145](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L145)

___

### addDisplay

• `Optional` **addDisplay**: `boolean`

- 说明:新增时是否显示
- 默认值:true

#### Defined in

[packages/table/src/types.ts:150](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L150)

___

### attrs

• `Optional` **attrs**: `Record`<`string`, `any`\>

- 说明:表单项组件的属性

#### Inherited from

TableAndFormColumn.attrs

#### Defined in

[packages/form/src/types.ts:126](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L126)

___

### border

• `Optional` **border**: `boolean`

- 说明:是否显示边框，仅适用于radio和checkbox
- 默认值:false

#### Inherited from

TableAndFormColumn.border

#### Defined in

[packages/form/src/types.ts:131](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L131)

___

### button

• `Optional` **button**: `boolean`

- 说明:是否显示为按钮，仅适用于radio和checkbox
- 默认值:false

#### Inherited from

TableAndFormColumn.button

#### Defined in

[packages/form/src/types.ts:136](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L136)

___

### component

• `Optional` **component**: `string`

- 说明:第三方组件

#### Inherited from

TableAndFormColumn.component

#### Defined in

[packages/form/src/types.ts:140](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L140)

___

### dictData

• `Optional` **dictData**: [`DictData`](../modules.md#dictdata)

- 说明:字典数据

#### Inherited from

TableAndFormColumn.dictData

#### Defined in

[packages/form/src/types.ts:144](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L144)

___

### dictOption

• `Optional` **dictOption**: [`DictOption`](dictoption.md)

- 说明:字典配置

#### Inherited from

TableAndFormColumn.dictOption

#### Defined in

[packages/form/src/types.ts:148](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L148)

___

### disabled

• `Optional` **disabled**: `boolean`

- 说明:是否禁用
- 默认值:false

#### Overrides

TableAndFormColumn.disabled

#### Defined in

[packages/table/src/types.ts:155](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L155)

___

### display

• `Optional` **display**: `boolean`

- 说明:是否显示表单项
- 默认值:true

#### Overrides

TableAndFormColumn.display

#### Defined in

[packages/table/src/types.ts:160](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L160)

___

### editDisabled

• `Optional` **editDisabled**: `boolean`

- 说明:编辑时是否禁用
- 默认值:false

#### Defined in

[packages/table/src/types.ts:165](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L165)

___

### editDisplay

• `Optional` **editDisplay**: `boolean`

- 说明:编辑时是否显示
- 默认值:true

#### Defined in

[packages/table/src/types.ts:170](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L170)

___

### format

• `Optional` **format**: `string`

- 说明:日期时间格式
- 默认值:"YYYY-MM-DD HH:mm:ss"

#### Inherited from

TableAndFormColumn.format

#### Defined in

[packages/form/src/types.ts:163](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L163)

___

### formatter

• `Optional` **formatter**: (`row`: `any`, `col`: [`TableColumnOption`](tablecolumnoption.md)) => `any`

#### Type declaration

▸ (`row`, `col`): `any`

- 说明:格式化函数

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `any` |
| `col` | [`TableColumnOption`](tablecolumnoption.md) |

##### Returns

`any`

#### Overrides

TableAndFormColumn.formatter

#### Defined in

[packages/table/src/types.ts:174](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L174)

___

### hide

• `Optional` **hide**: `boolean`

- 说明:是否隐藏列
- 默认值:false

#### Defined in

[packages/table/src/types.ts:179](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L179)

___

### multiple

• `Optional` **multiple**: `boolean`

- 说明:是否多选，仅适用于select
- 默认值:false

#### Inherited from

TableAndFormColumn.multiple

#### Defined in

[packages/form/src/types.ts:172](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L172)

___

### readonly

• `Optional` **readonly**: `boolean`

- 说明:是否只读
- 默认值:false

#### Inherited from

TableAndFormColumn.readonly

#### Defined in

[packages/form/src/types.ts:181](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L181)

___

### search

• `Optional` **search**: `boolean`

- 说明:是否可搜素
- 默认值:false

#### Defined in

[packages/table/src/types.ts:184](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L184)

___

### searchSpan

• `Optional` **searchSpan**: `number`

- 说明:搜素项占的栅格
- 默认值:6

#### Defined in

[packages/table/src/types.ts:189](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L189)

___

### span

• `Optional` **span**: `number`

- 说明:表单每一项占的栅格
- 默认值:false

#### Inherited from

TableAndFormColumn.span

#### Defined in

[packages/form/src/types.ts:186](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L186)

___

### viewDisplay

• `Optional` **viewDisplay**: `boolean`

- 说明:查看时是否显示
- 默认值:true

#### Defined in

[packages/table/src/types.ts:194](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/table/src/types.ts#L194)
