import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jwlibrary-merge-web/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['sql.js']
  },
  server: {
    port: 5173
  }
});
