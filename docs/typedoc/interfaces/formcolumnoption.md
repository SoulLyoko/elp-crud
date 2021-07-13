[ElpCrud](../README.md) / [Exports](../modules.md) / FormColumnOption

# Interface: FormColumnOption

## Hierarchy

- `ElFormItemProps`

  ↳ **`FormColumnOption`**

## Table of contents

### Properties

- [attrs](formcolumnoption.md#attrs)
- [border](formcolumnoption.md#border)
- [button](formcolumnoption.md#button)
- [component](formcolumnoption.md#component)
- [dictData](formcolumnoption.md#dictdata)
- [dictOption](formcolumnoption.md#dictoption)
- [disabled](formcolumnoption.md#disabled)
- [display](formcolumnoption.md#display)
- [format](formcolumnoption.md#format)
- [formatter](formcolumnoption.md#formatter)
- [multiple](formcolumnoption.md#multiple)
- [prop](formcolumnoption.md#prop)
- [readonly](formcolumnoption.md#readonly)
- [span](formcolumnoption.md#span)
- [type](formcolumnoption.md#type)

## Properties

### attrs

• `Optional` **attrs**: `Record`<`string`, `any`\>

- 说明:表单项组件的属性

#### Defined in

[packages/form/src/types.ts:126](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L126)

___

### border

• `Optional` **border**: `boolean`

- 说明:是否显示边框，仅适用于radio和checkbox
- 默认值:false

#### Defined in

[packages/form/src/types.ts:131](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L131)

___

### button

• `Optional` **button**: `boolean`

- 说明:是否显示为按钮，仅适用于radio和checkbox
- 默认值:false

#### Defined in

[packages/form/src/types.ts:136](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L136)

___

### component

• `Optional` **component**: `string`

- 说明:第三方组件

#### Defined in

[packages/form/src/types.ts:140](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L140)

___

### dictData

• `Optional` **dictData**: [`DictData`](../modules.md#dictdata)

- 说明:字典数据

#### Defined in

[packages/form/src/types.ts:144](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L144)

___

### dictOption

• `Optional` **dictOption**: [`DictOption`](dictoption.md)

- 说明:字典配置

#### Defined in

[packages/form/src/types.ts:148](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L148)

___

### disabled

• `Optional` **disabled**: `boolean`

- 说明:是否禁用
- 默认值:false

#### Defined in

[packages/form/src/types.ts:153](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L153)

___

### display

• `Optional` **display**: `boolean`

- 说明:是否显示
- 默认值:true

#### Defined in

[packages/form/src/types.ts:158](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L158)

___

### format

• `Optional` **format**: `string`

- 说明:日期时间格式
- 默认值:"YYYY-MM-DD HH:mm:ss"

#### Defined in

[packages/form/src/types.ts:163](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L163)

___

### formatter

• `Optional` **formatter**: (`row`: `any`, `col`: [`FormColumnOption`](formcolumnoption.md)) => `any`

#### Type declaration

▸ (`row`, `col`): `any`

- 说明:格式化函数

##### Parameters

| Name | Type |
| :------ | :------ |
| `row` | `any` |
| `col` | [`FormColumnOption`](formcolumnoption.md) |

##### Returns

`any`

#### Defined in

[packages/form/src/types.ts:167](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L167)

___

### multiple

• `Optional` **multiple**: `boolean`

- 说明:是否多选，仅适用于select
- 默认值:false

#### Defined in

[packages/form/src/types.ts:172](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L172)

___

### prop

• **prop**: `string`

- 说明:字段名

#### Overrides

ElFormItemProps.prop

#### Defined in

[packages/form/src/types.ts:176](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L176)

___

### readonly

• `Optional` **readonly**: `boolean`

- 说明:是否只读
- 默认值:false

#### Defined in

[packages/form/src/types.ts:181](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L181)

___

### span

• `Optional` **span**: `number`

- 说明:表单每一项占的栅格
- 默认值:false

#### Defined in

[packages/form/src/types.ts:186](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L186)

___

### type

• `Optional` **type**: [`FormItemType`](../modules.md#formitemtype)

- 说明:表单项类型
- 默认值:input

#### Defined in

[packages/form/src/types.ts:191](https://github.com/SoulLyoko/elp-crud/blob/dcd3593/packages/form/src/types.ts#L191)
