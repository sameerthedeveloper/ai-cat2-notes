import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

// Two pages in one site: "/" is the AI notes, "/toc/" is the Theory of Computation notes (original UI).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        toc: resolve(__dirname, 'toc/index.html'),
      },
    },
  },
});
