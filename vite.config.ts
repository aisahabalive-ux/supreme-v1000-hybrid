import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages ke liye sahi base path
  base: '/supreme-v1000-hybrid/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
});
