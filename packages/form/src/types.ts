import {
  ElForm,
  ElFormItem,
  ElInput,
  ElRadioGroup,
  ElCheckboxGroup,
  ElInputNumber,
  ElSelect,
  ElCascader,
  ElSwitch,
  ElSlider,
  ElDatePicker,
  ElTimePicker,
  ElTimeSelect,
  ElRate,
  ElColorPicker
} from "element-plus";
import { DictOption, DictData } from "../../dict/src/types";
import { FORM_EMITS, FORM_PROPS } from "./defaults";
import { DefineProps, DefineEmits } from "../../utils";

type ElFormProps = InstanceType<typeof ElForm>["$props"];
type ElFormItemProps = InstanceType<typeof ElFormItem>["$props"];
type ElInputProps = InstanceType<typeof ElInput>["$props"];
type ElRadioGroupProps = InstanceType<typeof ElRadioGroup>["$props"];
type ElCheckboxGroupProps = InstanceType<typeof ElCheckboxGroup>["$props"];
type ElInputNumberProps = InstanceType<typeof ElInputNumber>["$props"];
type ElSelectProps = InstanceType<typeof ElSelect>["$props"];
type ElCascaderProps = InstanceType<typeof ElCascader>["$props"];
type ElSwitchProps = InstanceType<typeof ElSwitch>["$props"];
type ElSliderProps = InstanceType<typeof ElSlider>["$props"];
type ElDatePickerProps = InstanceType<typeof ElDatePicker>["$props"];
type ElTimePickerProps = InstanceType<typeof ElTimePicker>["$props"];
type ElTimeSelectProps = InstanceType<typeof ElTimeSelect>["$props"];
type ElRateProps = InstanceType<typeof ElRate>["$props"];
type ElColorPickerProps = InstanceType<typeof ElColorPicker>["$props"];
type ComponentAttrs = ElInputProps &
  ElRadioGroupProps &
  ElCheckboxGroupProps &
  ElInputNumberProps &
  ElSelectProps &
  ElCascaderProps &
  ElSwitchProps &
  ElSliderProps &
  ElDatePickerProps &
  ElTimePickerProps &
  ElTimeSelectProps &
  ElRateProps &
  ElColorPickerProps;

export type FormItemType =
  | "radio"
  | "checkbox"
  | "text"
  | "input"
  | "password"
  | "textarea"
  | "number"
  | "select"
  | "cascader"
  | "switch"
  | "slider"
  | "time"
  | "date"
  | "datetime"
  | "rate"
  | "color";

export interface FormOption extends ElFormProps {
  /**
   * - 表单项配置
   */
  column: FormColumnOption[];
  /**
   * - 说明:表单菜单按钮
   * - 默认值:true
   */
  formMenu?: boolean;
  /**
   * - 说明:菜单按钮排列方式
   * - 可选:"left" | "center" | "right"
   * - 默认值:center
   */
  menuPosition?: "left" | "center" | "right";
  /**
   * - 说明:菜单按钮占的栅格
   * - 默认值:24
   */
  menuSpan?: number;
  /**
   * - 说明:清空按钮
   * - 默认值:true
   */
  resetBtn?: boolean;
  /**
   * - 说明:清空按钮图标
   * - 默认值:el-icon-delete
   */
  resetBtnIcon?: string;
  /**
   * - 说明:清空按钮文字
   * - 默认值:清空
   */
  resetBtnText?: string;
  /**
   * - 说明:提交按钮
   * - 默认值:true
   */
  submitBtn?: boolean;
  /**
   * - 说明:提交按钮图标
   * - 默认值:el-icon-check
   */
  submitBtnIcon?: string;
  /**
   * - 说明:提交按钮文字
   * - 默认值:提交
   */
  submitBtnText?: string;
}

export interface FormColumnOption extends ElFormItemProps {
  /**
   * - 说明:表单项组件的属性
   */
  attrs?: Record<string, any>;
  /**
   * - 说明:是否显示边框，仅适用于radio和checkbox
   * - 默认值:false
   */
  border?: boolean;
  /**
   * - 说明:是否显示为按钮，仅适用于radio和checkbox
   * - 默认值:false
   */
  button?: boolean;
  /**
   * - 说明:第三方组件
   */
  component?: string;
  /**
   * - 说明:字典数据
   */
  dictData?: DictData;
  /**
   * - 说明:字典配置
   */
  dictOption?: DictOption;
  /**
   * - 说明:是否禁用
   * - 默认值:false
   */
  disabled?: boolean;
  /**
   * - 说明:是否显示
   * - 默认值:true
   */
  display?: boolean;
  /**
   * - 说明:日期时间格式
   * - 默认值:"YYYY-MM-DD HH:mm:ss"
   */
  format?: string;
  /**
   * - 说明:格式化函数
   */
  formatter?: (row: any, col: FormColumnOption) => any;
  /**
   * - 说明:是否多选，仅适用于select
   * - 默认值:false
   */
  multiple?: boolean;
  /**
   * - 说明:字段名
   */
  prop: string;
  /**
   * - 说明:是否只读
   * - 默认值:false
   */
  readonly?: boolean;
  /**
   * - 说明:表单每一项占的栅格
   * - 默认值:false
   */
  span?: number;
  /**
   * - 说明:表单项类型
   * - 默认值:input
   */
  type?: FormItemType;
}

export type FormProps = DefineProps<typeof FORM_PROPS>;
export type FormEmit = DefineEmits<typeof FORM_EMITS>;
