[ElpCrud](README.md) / Exports

# ElpCrud

## Table of contents

### References

- [ElpForm](modules.md#elpform)

### Interfaces

- [DictItem](interfaces/dictitem.md)
- [DictOption](interfaces/dictoption.md)
- [FormColumnOption](interfaces/formcolumnoption.md)
- [FormOption](interfaces/formoption.md)
- [TableColumnOption](interfaces/tablecolumnoption.md)
- [TableOption](interfaces/tableoption.md)

### Type aliases

- [DictData](modules.md#dictdata)
- [FormEmit](modules.md#formemit)
- [FormItemType](modules.md#formitemtype)
- [FormProps](modules.md#formprops)
- [TableEmit](modules.md#tableemit)
- [TableProps](modules.md#tableprops)

### Properties

- [default](modules.md#default)

### Variables

- [ElpTable](modules.md#elptable)

### Functions

- [defineOption](modules.md#defineoption)

## References

### ElpForm

Renames and exports: [ElpTable](modules.md#elptable)

## Type aliases

### DictData

Ƭ **DictData**: [`DictItem`](interfaces/dictitem.md)[] \| (...`arg`: `any`) => [`DictItem`](interfaces/dictitem.md)[] \| `Promise`<`any`\>

- 字典数据，有三种类型：
- DictItem数组
- 返回DictItem数组的函数
- Promise

#### Defined in

[packages/dict/src/types.ts:36](https://github.com/SoulLyoko/elp-crud/blob/5f79ebc/packages/dict/src/types.ts#L36)

___

### FormEmit

Ƭ **FormEmit**: `DefineEmits`<typeof `FORM_EMITS`\>

#### Defined in

[packages/form/src/types.ts:195](https://github.com/SoulLyoko/elp-crud/blob/5f79ebc/packages/form/src/types.ts#L195)

___

### FormItemType

Ƭ **FormItemType**: ``"radio"`` \| ``"checkbox"`` \| ``"text"`` \| ``"input"`` \| ``"password"`` \| ``"textarea"`` \| ``"number"`` \| ``"select"`` \| ``"cascader"`` \| ``"switch"`` \| ``"slider"`` \| ``"time"`` \| ``"date"`` \| ``"datetime"`` \| ``"rate"`` \| ``"color"``

#### Defined in

[packages/form/src/types.ts:51](https://github.com/SoulLyoko/elp-crud/blob/5f79ebc/packages/form/src/types.ts#L51)

___

### FormProps

Ƭ **FormProps**: `DefineProps`<typeof `FORM_PROPS`\>

#### Defined in

[packages/form/src/types.ts:194](https://github.com/SoulLyoko/elp-crud/blob/5f79ebc/packages/form/src/types.ts#L194)

___

### TableEmit

Ƭ **TableEmit**: `DefineEmits`<typeof `TABLE_EMITS`\>

#### Defined in

[packages/table/src/types.ts:199](https://github.com/SoulLyoko/elp-crud/blob/5f79ebc/packages/table/src/types.ts#L199)

___

### TableProps

Ƭ **TableProps**: `DefineProps`<typeof `TABLE_PROPS`\>

#### Defined in

[packages/table/src/types.ts:198](https://github.com/SoulLyoko/elp-crud/blob/5f79ebc/packages/table/src/types.ts#L198)

## Properties

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `install` | (`app`: `App`<`any`\>, `options`: `Option`) => `void` |

## Variables

### ElpTable

• `Const` **ElpTable**: `DefineComponent`<`Object`, `Object`, `any`\>

#### Defined in

[src/shims-vue.d.ts:3](https://github.com/SoulLyoko/elp-crud/blob/5f79ebc/src/shims-vue.d.ts#L3)

## Functions

### defineOption

▸ **defineOption**(`option`): [`TableOption`](interfaces/tableoption.md) \| [`FormOption`](interfaces/formoption.md)

定义Table或Form的配置

#### Parameters

| Name | Type |
| :------ | :------ |
| `option` | [`TableOption`](interfaces/tableoption.md) \| [`FormOption`](interfaces/formoption.md) |

#### Returns

[`TableOption`](interfaces/tableoption.md) \| [`FormOption`](interfaces/formoption.md)

#### Defined in

[packages/utils/index.ts:19](https://github.com/SoulLyoko/elp-crud/blob/5f79ebc/packages/utils/index.ts#L19)
