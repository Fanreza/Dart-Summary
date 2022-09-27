export default {
  base: "/Dart-Summary/",
  lang: "id-ID",
  title: "Dart Summary",
  description: "just a documentation for me when learning dart programming languange",
  editLink: true,
  head: [
    ["meta", { property: "og:description", content: "Dokumentasi belajar Dart, dibuat sebagai pengingat" }],
    // ["meta", { property: "og:image", content: "https://user-images.githubusercontent.com/45036724/184270375-8b25b8fb-fbf8-48fc-8dd8-9162d1ea049a.png" }],
    ["meta", { property: "og:type", content: "article" }],
  ],
  themeConfig: {
    nav: [
      { text: "Mulai", link: "/getting-started/history/" },
      { text: "Latar Belakang", link: "/about.html" },
    ],
    sidebar: [
      {
        text: "Dart Pengenalan",
        items: [
          { text: "Sejarah", link: "/getting-started/history/" },
          { text: "Instalasi", link: "/getting-started/instalasi/" },
          { text: "Hello World", link: "/getting-started/hello_world/" },
        ],
      },

      {
        text: "Dart Dasar",
        items: [
          { text: "Pengenalan", link: "/dasar/" },
          { text: "Variable dan Tipe Data", link: "/dasar/variables/" },
          { text: "Operator", link: "/dasar/operator/" },
          { text: "Comment", link: "/dasar/comment/" },
          { text: "Conditional", link: "/dasar/conditional/" },
          { text: "Looping", link: "/dasar/looping/" },
          { text: "Function", link: "/dasar/function/" },
          { text: "Null Safety", link: "/dasar/null-safe/" },
          { text: "Scope", link: "/dasar/scope/" },
        ],
      },

      {
        text: "Dart Object Oriented",
        items: [
          { text: "Pengenalan", link: "/oop/" },
          { text: "Class", link: "/oop/class/" },
          { text: "Object", link: "/oop/object/" },
          { text: "Property", link: "/oop/property/" },
          { text: "Method", link: "/oop/method/" },
          { text: "Contructor", link: "/oop/constructor/" },
          { text: "Shadowing", link: "/oop/shadowing/" },
          { text: "Inheritance", link: "/oop/inheritance/" },
          { text: "Polymorphism", link: "/oop/polymorphism/" },
          { text: "Import", link: "/oop/import/" },
        ],
      },
    ],

    algolia: {
      // appId: "8J64VVRP8K",
      // apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },

    editLink: {
      pattern: "https://github.com/Fanreza/Dart-Summary/edit/main/docs/:path",
      text: "Ubah halaman ini di GitHub",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/fanreza" }],
    footer: {
      message: "Created by Fanreza",
    },
    outline: "deep",
  },
};
