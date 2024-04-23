import react from '@vitejs/plugin-react-swc';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
      {
        find: '@server',
        replacement: resolve(__dirname, './server'),
      },
      {
        find: '@public',
        replacement: resolve(__dirname, './public'),
      },
    ],
  },
  server: {
    /*proxy: {
      '/api': {
        target: 'remote-api-url',
        changeOrigin: true,
      },
    },*/
    cors: false,
  },
  plugins: [react()],
});
