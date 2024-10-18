import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './public/assets'),
      '@fonts': path.resolve(__dirname, './public/fonts'),
    },
  },
});
