import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // or 'build'
  },
  plugins: [react(), tailwindcss()],
})
