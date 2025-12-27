import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- यह लाइन जोड़ें

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <--- और यह लाइन यहाँ जोड़ें
  ],
})