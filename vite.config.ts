import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Is path ko apni repository name ke mutabiq sahi rakhein
  base: '/supreme-v1000-hybrid/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
});
