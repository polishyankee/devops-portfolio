import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'devops-portfolio' with your repository name if different
export default defineConfig({
  plugins: [react()],
  base: '/devops-portfolio/'
})
