# Elp Crud

A Crud Lib Build On ElementPlus Using Vite + Vue3 + Typescript

## Use

- To use elp-crud,you need to install element-plus first.

```sh
yarn add element-plus elp-crud
```

- main.ts

```ts
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
import ElpCrud from "elp-crud";
import "elp-crud/lib/style.css";

const app = createApp(App);
app.use(ElementPlus, { locale });
app.use(ElpCrud);
app.mount("#app");
```

- App.vue

```html
<template>
  <elp-table
    v-model="formData"
    :data="tableData"
    :option="tableOption"
    @rowSave="handleSave"
    @rowUpdate="handleUpdate"
    @rowDel="handleDel"
  ></elp-table>
</template>

<script lang="ts" setup>
  import { ref } from "vue";

  const formData = ref({});
  const tableData = ref([{ name: "name", content: "content" }]);
  const tableOption = ref({
    column: [
      { label: "nameLabel", prop: "name" },
      { label: "contentLabel", prop: "content" }
    ]
  });
  function handleSave(data, done) {
    console.log(data);
    done();
  }
  function handleUpdate(data, done) {
    console.log(data);
    done();
  }
  function handleDel(data) {
    console.log(data);
  }
</script>
```
