import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      'b617-2401-4900-6763-4d2-41d-a739-fd4d-28bd.ngrok-free.app'
    ]
  }
})
