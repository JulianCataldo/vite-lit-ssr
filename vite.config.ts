import { defineConfig } from "vite";
import { standardCssModules } from "vite-plugin-standard-css-modules";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    standardCssModules({
      transformationMode: "CSSResult",
      log: true,
      filter: ({ id }) => {
        if (id === "./src/index.css") return false;
        return true;
      },
    }),
  ],
});
