import { defineConfig } from 'vite'
import react from '@vitejs/react-vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Kismat Ki Property',
        short_name: 'Kismat Property',
        description: 'Best Property App',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/assets/kkplogo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/assets/kkplogo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})