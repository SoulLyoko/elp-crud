<template>
  <div class="elp-table__search" v-if="searchShow && searchOption.column && searchOption.column.length">
    <elp-form v-model="searchFormData" :option="searchOption" @submit="handleSearch" @reset="handleSearchReset">
      <template
        v-slot:[name]="{ row, col }"
        v-for="name in Object.keys($slots)
          .filter(key => key.includes('Search'))
          .map(key => key.replace('Search', 'Form'))"
      >
        <slot :name="name.replace('Form', 'Search')" :row="row" :col="col" :dict="getDictStorage(col.prop)"></slot>
      </template>
    </elp-form>
  </div>
  <div class="elp-table__menu" v-if="tableOption.menuBar">
    <div class="elp-table__menu--left">
      <el-button
        type="primary"
        :size="tableOption.size"
        :icon="tableOption.addBtnIcon"
        @click="rowAdd"
        v-if="tableOption.addBtn"
      >
        {{ tableOption.addBtnText }}
      </el-button>
      <slot name="menuLeft"></slot>
    </div>
    <div class="elp-table__menu--right">
      <slot name="menuRight"></slot>
      <el-button
        type="default"
        :size="tableOption.size"
        icon="el-icon-refresh"
        circle
        @click="onRefresh"
        v-if="tableOption.refreshBtn"
      ></el-button>
      <el-button
        type="default"
        :size="tableOption.size"
        icon="el-icon-search"
        circle
        @click="onSearchShow"
        v-if="tableOption.searchBtn && searchOption.column && searchOption.column.length"
      ></el-button>
    </div>
  </div>

  <el-table v-bind="tableOption" :data="data" ref="elTableRef">
    <el-table-column type="selection" fixed="left" v-if="tableOption.selection"></el-table-column>
    <el-table-column
      type="index"
      fixed="left"
      :label="tableOption.indexLabel"
      :index="renderIndex"
      v-if="tableOption.index"
    ></el-table-column>

    <el-table-column v-for="col in tableOption.column" :key="col.prop" v-bind="col" ref="elTableColumnRef">
      <template #default="{ row }">
        <template v-if="$slots[col.prop]">
          <slot :name="col.prop" :row="row" :col="col" :dict="getDictStorage(col.prop)"></slot>
        </template>
        <template v-else>
          <span>{{ renderColumn(row, col) }}</span>
        </template>
      </template>
    </el-table-column>
    <el-table-column label="操作" :width="tableOption.menuWidth" fixed="right" v-if="tableOption.menu">
      <template #default="{ row }">
        <el-button type="default" :size="tableOption.size" :icon="tableOption.viewBtnIcon" @click="rowView(row)">
          {{ tableOption.viewBtnText }}
        </el-button>
        <el-button type="primary" :size="tableOption.size" :icon="tableOption.editBtnIcon" @click="rowEdit(row)">
          {{ tableOption.editBtnText }}
        </el-button>
        <el-button type="danger" :size="tableOption.size" :icon="tableOption.delBtnIcon" @click="rowDel(row)">
          {{ tableOption.delBtnText }}
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <component :title="modalTitle" :is="'el-' + tableOption.modalType" v-model="modalVisible">
    <elp-form v-model="formData" :option="formOption" @submit="rowSubmit" @reset="rowReset">
      <template v-slot:[name] v-for="name in Object.keys($slots)">
        <slot :name="name"></slot>
      </template>
    </elp-form>
  </component>
</template>

<script lang="ts">
export default {
  name: "elp-table"
};
</script>
<script lang="ts" setup>
import { defineProps, defineEmits, provide, ref } from "vue";
import { ElpForm } from "../../form";
import { useDict } from "../../dict";
import { useRender, useSearch, useTable } from "./use";
import { TABLE_PROPS, TABLE_EMITS } from "./defaults";

const elTableRef = ref();
const elTableColumnRef = ref();

const props = defineProps(TABLE_PROPS);
const emit = defineEmits(TABLE_EMITS);

const dict = useDict();
const { renderIndex, renderColumn } = useRender(dict);
const {
  tableOption,
  formOption,
  formData,
  modalTitle,
  modalVisible,
  rowAdd,
  rowEdit,
  rowView,
  rowDel,
  rowSubmit,
  rowReset,
  onRefresh
} = useTable({
  props,
  emit,
  dict
});
const { searchOption, searchFormData, searchShow, onSearchShow, handleSearch, handleSearchReset } = useSearch({
  props,
  emit,
  tableOption
});

const { dictStorage, getDictStorage, setDictStorage } = dict;
provide("dictStorage", dictStorage);
const setDict = setDictStorage;
const getDict = getDictStorage;
</script>

<style lang="scss">
.elp-table__menu {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
