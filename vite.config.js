import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // allows LAN and external access
    allowedHosts: [
      '91ba-2401-4900-6741-b7f2-6899-a6a1-5800-2e4f.ngrok-free.app' // your ngrok domain
    ]
  }
})
