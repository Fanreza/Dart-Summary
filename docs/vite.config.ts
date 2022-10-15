import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    SearchPlugin({
      //Add a wildcard at the end of the search
      wildcard: false,
      //The length of the result search preview item
      previewLength: 62,
    }),
  ],
});
