import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Yeh line Vite ko batati hai ki types.ts ko kaise dhundhna hai
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build: {
    // Vercel ke liye output folder sahi hona chahiye
    outDir: 'dist',
  }
})
