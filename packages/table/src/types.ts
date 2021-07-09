import { ElTable, ElTableColumn } from "element-plus";
import { FormColumnOption, FormOption } from "../../form/src/types";
import { TABLE_PROPS, TABLE_EMITS } from "./defaults";
import { DefineProps, DefineEmits } from "../../utils";

type ElTableProps = InstanceType<typeof ElTable>["$props"];
type ElTableColumnProps = InstanceType<typeof ElTableColumn>["$props"];
type TableAndForm = ElTableProps & FormOption;
type TableAndFormColumn = ElTableColumnProps & FormColumnOption;

export interface TableOption extends TableAndForm {
  /**
   * - 说明:新增按钮
   * - 默认值:true
   */
  addBtn?: true;
  /**
   * - 说明:新增按钮文字
   * - 默认值:新增
   */
  addBtnText?: string;
  /**
   * - 说明:新增按钮图标
   * - 默认值:el-icon-plus
   */
  addBtnIcon?: string;
  /**
   * - 说明:列配置
   */
  column: TableColumnOption[];
  /**
   * - 说明:删除按钮
   * - 默认值:true
   */
  delBtn?: boolean;
  /**
   * - 说明:删除按钮文字
   * - 默认值:删除
   */
  delBtnText?: string;
  /**
   * - 说明:删除按钮图标
   * - 默认值:el-icon-delete
   */
  delBtnIcon?: string;
  /**
   * - 说明:编辑按钮
   * - 默认值:true
   */
  editBtn?: boolean;
  /**
   * - 说明:编辑按钮文字
   * - 默认值:编辑
   */
  editBtnText?: string;
  /**
   * - 说明:编辑按钮图标
   * - 默认值:el-icon-edit
   */
  editBtnIcon?: string;
  /**
   * - 说明:是否显示序号列
   * - 默认值:true
   */
  index?: boolean;
  /**
   * - 说明:序号列的标题
   * - 默认值:#
   */
  indexLabel?: string;
  /**
   * - 说明:是否显示菜单列
   * - 默认值:true
   */
  menu?: boolean;
  /**
   * - 说明:菜单列宽度
   * - 默认值:260px
   */
  menuWidth?: string;
  /**
   * - 说明:是否显示菜单栏，即新增按钮所在栏
   * - 默认值:true
   */
  menuBar?: boolean;
  /**
   * - 说明:表单弹窗类型
   * - 可选:"dialog" | "drawer"
   * - 默认值:dialog
   */
  modalType?: "dialog" | "drawer";
  /**
   * - 说明:搜索栏清空按钮
   * - 默认值:true
   */
  refreshBtn?: boolean;
  /**
   * - 说明:搜索栏搜索按钮
   * - 默认值:true
   */
  searchBtn?: boolean;
  /**
   * - 说明:搜索栏按钮占的栅格
   * - 默认值:6
   */
  searchMenuSpan?: number;
  /**
   * - 说明:是否显示搜索栏
   * - 默认值:true
   */
  searchShow?: boolean;
  /**
   * - 说明:搜索栏每一项占的栅格
   * - 默认值:6
   */
  searchSpan?: number;
  /**
   * - 说明:是否显示选择列
   * - 默认值:false
   */
  selection?: boolean;
  /**
   * - 说明:查看按钮
   * - 默认值:true
   */
  viewBtn?: boolean;
  /**
   * - 说明:查看按钮文字
   * - 默认值:查看
   */
  viewBtnText?: string;
  /**
   * - 说明:查看按钮图标
   * - 默认值:el-icon-view
   */
  viewBtnIcon?: string;
  [x: string]: any;
}

export interface TableColumnOption extends TableAndFormColumn {
  /**
   * - 说明:新增时是否禁用
   * - 默认值:false
   */
  addDisabled?: boolean;
  /**
   * - 说明:新增时是否显示
   * - 默认值:true
   */
  addDisplay?: boolean;
  /**
   * - 说明:是否禁用
   * - 默认值:false
   */
  disabled?: boolean;
  /**
   * - 说明:是否显示表单项
   * - 默认值:true
   */
  display?: boolean;
  /**
   * - 说明:编辑时是否禁用
   * - 默认值:false
   */
  editDisabled?: boolean;
  /**
   * - 说明:编辑时是否显示
   * - 默认值:true
   */
  editDisplay?: boolean;
  /**
   * - 说明:格式化函数
   */
  formatter?: (row: any, col: TableColumnOption) => any;
  /**
   * - 说明:是否隐藏列
   * - 默认值:false
   */
  hide?: boolean;
  /**
   * - 说明:是否可搜素
   * - 默认值:false
   */
  search?: boolean;
  /**
   * - 说明:搜素项占的栅格
   * - 默认值:6
   */
  searchSpan?: number;
  /**
   * - 说明:查看时是否显示
   * - 默认值:true
   */
  viewDisplay?: boolean;
  [x: string]: any;
}

export type TableProps = DefineProps<typeof TABLE_PROPS>;
export type TableEmit = DefineEmits<typeof TABLE_EMITS>;
