import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      'f269-2401-4900-4e0c-8522-f45b-bba9-11e8-aa83.ngrok-free.app'
    ]
  }
})
