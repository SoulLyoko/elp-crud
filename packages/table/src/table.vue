<template>
  <div class="elp-table__search">
    <elp-form v-model="searchFormData" :option="searchOption" ref="elpFormRef">
      <template v-slot:[name] v-for="name in Object.keys($slots).filter(key => key.includes('Search'))">
        <slot :name="name.replace('Search', 'Form')"></slot>
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

  <el-table v-bind="tableOption" :data="data" ref="ElTableRef">
    <el-table-column type="selection" fixed="left" v-if="tableOption.selection"></el-table-column>
    <el-table-column
      type="index"
      fixed="left"
      :label="tableOption.indexLabel"
      :index="renderIndex"
      v-if="tableOption.index"
    ></el-table-column>

    <el-table-column v-for="col in tableOption.column" :key="col.prop" v-bind="col" ref="ElTableColumnRef">
      <template #default="{ row }">
        <template v-if="$slots[col.prop]">
          <slot :name="col.prop"></slot>
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
    <elp-form ref="elpFormRef" v-model="formData" :option="formOption" @submit="rowSubmit" @reset="rowReset">
      <template v-slot:[name] v-for="name in Object.keys($slots)">
        <slot :name="name"></slot>
      </template>
    </elp-form>
  </component>
</template>

<script lang="ts">
import { defineProps, defineEmits, provide, defineComponent } from "vue";
import { ElpForm } from "~/form";
import { useDict } from "~/dict";
import { useRender, useSearch, useTable } from "./use";
import { TABLE_PROPS, TABLE_EMITS } from "./defaults";

export default defineComponent({
  name: "elp-table",
  component: { ElpForm },
  props: TABLE_PROPS,
  emits: TABLE_EMITS,
  setup(props, { emit }) {
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
    const { searchOption, searchFormData, searchShow, onSearchShow } = useSearch(tableOption);

    const { dictStorage, getDictStorage, setDictStorage } = dict;
    provide("dictStorage", dictStorage);
    const getDict = getDictStorage;
    const setDict = setDictStorage;

    return {
      renderIndex,
      renderColumn,
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
      onRefresh,
      searchOption,
      searchFormData,
      searchShow,
      onSearchShow,
      getDict,
      setDict
    };
  }
});

/**
 * setup sugar
 */
// const props = defineProps(TABLE_PROPS);
// const emit = defineEmits(TABLE_EMITS);

// const dict = useDict();
// const { renderIndex, renderColumn } = useRender(dict);
// const {
//   tableOption,
//   formOption,
//   formData,
//   modalTitle,
//   modalVisible,
//   rowAdd,
//   rowEdit,
//   rowView,
//   rowDel,
//   rowSubmit,
//   rowReset,
//   onRefresh
// } = useTable({
//   props,
//   emit,
//   dict
// });
// const { searchOption, searchFormData, searchShow, onSearchShow } = useSearch(tableOption);

// const { dictStorage, getDictStorage, setDictStorage } = dict;
// provide("dictStorage", dictStorage);
// const setDict = setDictStorage;
// const getDict = getDictStorage;
</script>

<style lang="scss">
.elp-table__menu {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>
