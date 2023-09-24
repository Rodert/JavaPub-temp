/*
 * @Author: JavaPub
 * @Date: 2023-08-11 23:35:12
 * @LastEditors: your name
 * @LastEditTime: 2023-09-24 23:22:11
 * @Description: Here is the JavaPub code base. Search JavaPub on the whole web.
 * @FilePath: \JavaPub-temp\docs\src\.vuepress\config.ts
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "JavaPub（面试学习一条龙）",
      description: "一个面试学习一条龙的网站。",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  shouldPrefetch: false,
});
