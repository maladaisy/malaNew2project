import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Adding Proxy To the React App
export default defineConfig({
  // server: {
  //     proxy: {
  //       '/api': "http://localhost:3000",
  //     }
  // },
  plugins: [react()],
})
