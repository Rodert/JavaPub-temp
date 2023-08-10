import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  // "/",
  { text: "面试指南", icon: "discover", link: "/guides/" },
  { text: "开源项目", icon: "discover", link: "/demo/" },
  { text: "技术书籍", icon: "discover", link: "/guide/" },
  { text: "知识星球", icon: "discover", link: "/star/" },
  {
    text: "前沿",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "AI",
        icon: "creative",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "区块链",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "副业",
        icon: "config",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
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
    text: "学习路线",
    icon: "note",
    link: "http://luxian.javapub.net.cn/",
  },
]);
