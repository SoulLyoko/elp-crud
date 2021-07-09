module.exports = {
  base: "/elp-crud/",
  lang: "zh-CN",
  title: "ElpCrud",
  description: "A Crud Lib Build On ElementPlus Using Vite + Vue3 + Typescript",
  themeConfig: {
    repo: "SoulLyoko/elp-crud",
    sidebar: {
      "/": [
        { text: "更新日志", link: "/log/log" },
        { text: "开始", link: "/" },
        { text: "类型定义", link: "/typedoc/modules" },
        {
          text: "表格",
          children: [{ text: "基础", link: "/table/basic" }]
        }
      ]
    }
  }
};
