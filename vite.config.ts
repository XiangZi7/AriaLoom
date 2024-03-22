import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import AutoImport from "unplugin-auto-import/vite";

// import IconsResolver from "unplugin-icons/resolver";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  AutoImport({
    // imports: ["react", "react-router-dom"],
    dirs: ["src/utils/**", "src/stores/modules/**", "src/hooks/**"],
    dts: "src/auto-import/imports.d.ts",
  }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3355,
    // open: true
  },
  build: {
    rollupOptions: {
      // 静态资源分类打包
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
    minify: "esbuild",
    sourcemap: false,
    target: "es2015",
    reportCompressedSize: false,
  },
})
