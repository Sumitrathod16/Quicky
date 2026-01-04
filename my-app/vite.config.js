import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core
          if (id.includes('node_modules/react') ||
              id.includes('node_modules/react-dom') ||
              id.includes('node_modules/react-router-dom')) {
            return 'react-vendor'
          }

          // Firebase (modular)
          if (id.includes('node_modules/firebase')) {
            return 'firebase-vendor'
          }
        }
      }
    },

    chunkSizeWarningLimit: 1000
  }
})
