import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 支持内联 javascript
        modifyVars: {
          // 更改主题
        },
      },
    },
  },
});
