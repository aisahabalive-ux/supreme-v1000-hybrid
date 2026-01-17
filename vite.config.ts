import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // Ye batata hai ki files bina extension ke bhi mil jayein
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  build: {
    outDir: 'dist'
  }
})
