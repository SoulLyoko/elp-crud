// defaults.ts
import { defineOption } from "../../../../packages"; //ts环境下可以从elp-crud导入defineOption使用，来获取类型提示

export const defaultOption = defineOption({
  column: [
    { label: "标题", prop: "title", search: true },
    { label: "内容", prop: "content", type: "textarea" },
    { label: "日期", prop: "date", type: "date" }
  ]
});

export const defaultData = [
  { title: "夏夜晚风", content: "不知道怎么搞得最老是做这个梦", date: "1996-06-18" },
  { title: "挪威的森林", content: "让我将你心儿摘下", date: "1996-06-18" },
  { title: "LastDance", content: "所以暂时将你眼睛闭了起来", date: "1996-06-18" }
];
