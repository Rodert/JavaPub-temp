/*
 * @Author: JavaPub
 * @Date: 2023-07-24 08:00:08
 * @LastEditors: your name
 * @LastEditTime: 2023-08-12 14:27:12
 * @Description: Here is the JavaPub code base. Search JavaPub on the whole web.
 * @FilePath: \JavaPub-temp\docs\src\.vuepress\sidebar\en.ts
 */
import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    // "", // 栏目添加首页
    {
      icon: "discover",
      text: "Demo",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
    "slides",
  ],
});
