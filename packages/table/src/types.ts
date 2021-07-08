import { ElTable, ElTableColumn } from "element-plus";
import { FormColumnOption, FormOption } from "../../form/src/types";
import { TABLE_PROPS, TABLE_EMITS } from "./defaults";
import { DefineEmit } from "../../utils";

type ElTableProps = InstanceType<typeof ElTable>["$props"];
type ElTableColumnProps = InstanceType<typeof ElTableColumn>["$props"];
type TableAndForm = ElTableProps & FormOption;
type TableAndFormColumn = ElTableColumnProps & FormColumnOption;

export interface TableOption extends TableAndForm {
  /**
   * - 描述:新增按钮
   * - 默认:true
   */
  addBtn?: true;
  /**
   * - 描述:新增按钮文字
   * - 默认:新增
   */
  addBtnText?: string;
  /**
   * - 描述:新增按钮图标
   * - 默认:el-icon-plus
   */
  addBtnIcon?: string;
  /**
   * - 描述:列配置
   */
  column: TableColumnOption[];
  /**
   * - 描述:删除按钮
   * - 默认:true
   */
  delBtn?: boolean;
  /**
   * - 描述:删除按钮文字
   * - 默认:删除
   */
  delBtnText?: string;
  /**
   * - 描述:删除按钮图标
   * - 默认:el-icon-delete
   */
  delBtnIcon?: string;
  /**
   * - 描述:编辑按钮
   * - 默认:true
   */
  editBtn?: boolean;
  /**
   * - 描述:编辑按钮文字
   * - 默认:编辑
   */
  editBtnText?: string;
  /**
   * - 描述:编辑按钮图标
   * - 默认:el-icon-edit
   */
  editBtnIcon?: string;
  /**
   * - 描述:是否显示序号列
   * - 默认:true
   */
  index?: boolean;
  /**
   * - 描述:序号列的标题
   * - 默认:#
   */
  indexLabel?: string;
  /**
   * - 描述:是否显示菜单列
   * - 默认:true
   */
  menu?: boolean;
  /**
   * - 描述:菜单列宽度
   * - 默认:260px
   */
  menuWidth?: string;
  /**
   * - 描述:是否显示菜单栏，即新增按钮所在栏
   * - 默认:true
   */
  menuBar?: boolean;
  /**
   * - 描述:表单弹窗类型
   * - 可选:"dialog" | "drawer"
   * - 默认:dialog
   */
  modalType?: "dialog" | "drawer";
  /**
   * - 描述:搜索栏清空按钮
   * - 默认:true
   */
  refreshBtn?: boolean;
  /**
   * - 描述:搜索栏搜索按钮
   * - 默认:true
   */
  searchBtn?: boolean;
  /**
   * - 描述:搜索栏按钮占的栅格
   * - 默认:6
   */
  searchMenuSpan?: number;
  /**
   * - 描述:是否显示搜索栏
   * - 默认:true
   */
  searchShow?: boolean;
  /**
   * - 描述:搜索栏每一项占的栅格
   * - 默认:6
   */
  searchSpan?: number;
  /**
   * - 描述:是否显示选择列
   * - 默认:false
   */
  selection?: boolean;
  /**
   * - 描述:查看按钮
   * - 默认:true
   */
  viewBtn?: boolean;
  /**
   * - 描述:查看按钮文字
   * - 默认:查看
   */
  viewBtnText?: string;
  /**
   * - 描述:查看按钮图标
   * - 默认:el-icon-view
   */
  viewBtnIcon?: string;
  [x: string]: any;
}

export interface TableColumnOption extends TableAndFormColumn {
  /**
   * - 描述:新增时是否禁用
   * - 默认:false
   */
  addDisabled?: boolean;
  /**
   * - 描述:新增时是否显示
   * - 默认:true
   */
  addDisplay?: boolean;
  /**
   * - 描述:是否禁用
   * - 默认:false
   */
  disabled?: boolean;
  /**
   * - 描述:是否显示表单项
   * - 默认:true
   */
  display?: boolean;
  /**
   * - 描述:编辑时是否禁用
   * - 默认:false
   */
  editDisabled?: boolean;
  /**
   * - 描述:编辑时是否显示
   * - 默认:true
   */
  editDisplay?: boolean;
  /**
   * - 描述:格式化函数
   */
  formatter?: (row: any, col: TableColumnOption) => any;
  /**
   * - 描述:是否隐藏列
   * - 默认:false
   */
  hide?: boolean;
  /**
   * - 描述:是否可搜素
   * - 默认:false
   */
  search?: boolean;
  /**
   * - 描述:搜素项占的栅格
   * - 默认:6
   */
  searchSpan?: number;
  /**
   * - 描述:查看时是否显示
   * - 默认:true
   */
  viewDisplay?: boolean;
  [x: string]: any;
}

// export const tableProps = defineProps(TABLE_PROPS);
// export const tableEmits = defineEmits(TABLE_EMITS);

export type TableProps = {
  modelValue: Record<string, any>;
  data: any[];
  option: TableOption;
};
export type TableEmit = DefineEmit<typeof TABLE_EMITS>;
