import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "编程", icon: "discover", link: "/demo/" },
  { text: "开源项目", icon: "discover", link: "/demo/" },
  { text: "技术书籍", icon: "discover", link: "/demo/" },
  { text: "知识星球", icon: "discover", link: "/demo/" },
  { text: "AI", icon: "discover", link: "/demo/" },
  { text: "区块链", icon: "discover", link: "/demo/" },
  { text: "副业", icon: "discover", link: "/demo/" },
  { text: "关于网站", icon: "discover", link: "/demo/" },
  {
    text: "关于网站",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "作者",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "更新历史",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "Guide",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "Foo",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
  {
    text: "V2 Docs",
    icon: "note",
    link: "https://theme-hope.vuejs.press/",
  },
]);
