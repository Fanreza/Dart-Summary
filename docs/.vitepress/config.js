export default {
  base: "/Dart-Summary/",
  lang: "id-ID",
  title: "Dart Summary",
  description: "just a documentation for me when learning dart programming languange",
  editLink: true,
  head: [
    ["meta", { property: "og:description", content: "Panduan refactoring untuk mengatasi code berantakan yang anda buat." }],
    ["meta", { property: "og:image", content: "https://user-images.githubusercontent.com/45036724/184270375-8b25b8fb-fbf8-48fc-8dd8-9162d1ea049a.png" }],
    ["meta", { property: "og:type", content: "article" }],
  ],
  themeConfig: {
    nav: [
      { text: "Mulai", link: "/getting-started/" },
      { text: "Latar Belakang", link: "/about/" },
    ],
    sidebar: [
      {
        text: "Pengenalan",
        items: [
          { text: "Sejarah", link: "/getting-started/history/" },
          { text: "Instalasi", link: "/getting-started/instalasi/" },
          { text: "Hello World", link: "/getting-started/hello_world/" },
        ],
      },

      {
        text: "Dart Dasar",
        items: [
          { text: "Variable", link: "/getting-started/history/" },
          { text: "Operator", link: "/getting-started/instalasi/" },
          { text: "Comment", link: "/" },
          { text: "Conditional", link: "/" },
          { text: "Looping", link: "/" },
          { text: "Function", link: "/" },
        ],
      },

      {
        text: "Dart Object Oriented",
        items: [{ text: "Comming Soon", link: "/" }],
      },
    ],
    editLink: {
      pattern: "https://github.com/fanreza",
      text: "Ubah halaman ini di GitHub",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/zuramai/refactoring" }],
    footer: {
      message: "Created by Fanreza",
    },
    outline: "deep",
  },
};
