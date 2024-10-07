import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        background: 'background.js',
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});