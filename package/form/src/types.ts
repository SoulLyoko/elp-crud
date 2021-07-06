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
import { DictOption, DictData } from "~/dict/src/types";
import { FORM_EMITS, FORM_PROPS } from "./defaults";

export type ElFormProps = InstanceType<typeof ElForm>["$props"];
export type ElFormItemProps = InstanceType<typeof ElFormItem>["$props"];

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
type Attrs = ElInputProps &
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
   * - 描述:表单菜单按钮
   * - 默认:true
   */
  formMenu?: boolean;
  /**
   * - 描述:菜单按钮排列方式
   * - 可选: "left" | "center" | "right"
   * - 默认:24
   */
  menuPosition?: "left" | "center" | "right";
  /**
   * - 描述:菜单按钮占的栅格
   * - 默认:24
   */
  menuSpan?: number;
  /**
   * - 描述:清空按钮
   * - 默认:true
   */
  resetBtn?: boolean;
  /**
   * - 描述:清空按钮图标
   * - 默认:el-icon-delete
   */
  resetBtnIcon?: string;
  /**
   * - 描述:清空按钮文字
   * - 默认:清空
   */
  resetBtnText?: string;
  /**
   * - 描述:提交按钮
   * - 默认:true
   */
  submitBtn?: boolean;
  /**
   * - 描述:提交按钮图标
   * - 默认:el-icon-check
   */
  submitBtnIcon?: string;
  /**
   * - 描述:提交按钮文字
   * - 默认:提交
   */
  submitBtnText?: string;
}

export interface FormColumnOption extends ElFormItemProps {
  /**
   * - 描述:表单项组件的属性
   */
  attrs?: any;
  /**
   * - 描述:是否显示边框，仅适用于radio和checkbox
   * - 默认:false
   */
  border?: boolean;
  /**
   * - 描述:是否显示为按钮，仅适用于radio和checkbox
   * - 默认:false
   */
  button?: boolean;
  /**
   * - 描述:第三方组件
   */
  component?: string;
  /**
   * - 描述:字典数据
   */
  dictData?: DictData;
  /**
   * - 描述:字典配置
   */
  dictOption?: DictOption;
  /**
   * - 描述:是否禁用
   * - 默认:false
   */
  disabled?: boolean;
  /**
   * - 描述:是否显示
   * - 默认:true
   */
  display?: boolean;
  /**
   * - 描述:日期时间格式
   * - 默认:"YYYY-MM-DD HH:mm:ss"
   */
  format?: string;
  /**
   * - 描述:格式化函数
   */
  formatter?: (row: any, col: FormColumnOption) => any;
  /**
   * - 描述:是否多选，仅适用于select
   * - 默认:false
   */
  multiple?: boolean;
  /**
   * - 描述:字段名
   */
  prop: string;
  /**
   * - 描述:是否只读
   * - 默认:false
   */
  readonly?: boolean;
  /**
   * - 描述:表单每一项占的栅格
   * - 默认:false
   */
  span?: number;
  /**
   * - 描述:表单项类型
   * - 默认:input
   */
  type?: FormItemType;
}

export type ElFormContext = InstanceType<typeof ElForm>;

const props = defineProps(FORM_PROPS);
const emit = defineEmits(FORM_EMITS);
export type FormProps = typeof props;
export type FormEmits = typeof emit;
