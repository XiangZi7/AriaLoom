import path from 'path';

import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite';

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const Env = loadEnv(mode, process.cwd());
  console.log(`当前：${Env.VITE_USER_NODE_ENV} 环境,API：${Env.VITE_API_URL}`);
  return defineConfig({
    plugins: [
      react(),
      AutoImport({
        // imports: ["react", "react-router-dom"],
        dirs: ['src/utils/**', 'src/stores/**', 'src/hooks/**'],
        dts: 'src/auto-import/imports.d.ts',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3355,
      // open: true
    },
    build: {
      rollupOptions: {
        // 静态资源分类打包
        output: {
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom', 'zustand'],
          },
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
      },
      minify: 'esbuild',
      sourcemap: false,
      target: 'es2015',
      reportCompressedSize: false,
    },
  });
};
