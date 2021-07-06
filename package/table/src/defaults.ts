import { PropType } from "vue";
import { TableOption } from "./types";

export const TABLE_OPTION = {
  addBtn: true,
  addBtnText: "新增",
  addBtnIcon: "el-icon-plus",
  addTitle: "新增",
  delBtn: true,
  delBtnText: "删除",
  delBtnIcon: "el-icon-delete",
  editBtn: true,
  editBtnText: "编辑",
  editBtnIcon: "el-icon-edit",
  editTitle: "编辑",
  index: true,
  indexLabel: "#",
  menu: true,
  menuWidth: "260px",
  menuBar: true,
  modalType: "dialog",
  refreshBtn: true,
  selection: true,
  searchShow: true,
  searchBtn: true,
  size: "small",
  viewBtn: false,
  viewBtnText: "查看",
  viewBtnIcon: "el-icon-view",
  viewTitle: "查看"
};

export const TABLE_COLUMN_OPTION = {
  addDisplay: true,
  addDisabled: false,
  display: true,
  disabled: false,
  editDisplay: true,
  editDisabled: false,
  hide: false,
  search: false,
  viewDisplay: true
};

export const DATE_FORMAT = {
  date: "YYYY-MM-DD",
  time: "HH:mm:ss",
  datetime: "YYYY-MM-DD HH:mm:ss"
};

export const TABLE_PROPS = {
  modelValue: { type: Object, default: () => ({}) },
  data: { type: Array, default: () => [] },
  option: { type: Object as PropType<TableOption>, default: () => ({}) }
};

export const TABLE_EMITS = ["update:modelValue", "rowDel", "rowSave", "rowUpdate", "rowReset", "refresh"];
