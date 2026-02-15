import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/supreme-v1000-hybrid/', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
