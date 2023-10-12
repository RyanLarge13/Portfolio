import { defineConfig } from 'vite'
import sitemap from 'vite-plugin-sitemap';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), sitemap({
      baseURL: 'https://yourdomain.com',
      routes: [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
      ],
    }), ],
})
