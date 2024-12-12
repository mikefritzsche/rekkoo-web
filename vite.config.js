import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

const getGitBranch = () => {
  try {
    // First try CircleCI specific environment variable
    if (process.env.CIRCLE_BRANCH) {
      return process.env.CIRCLE_BRANCH;
    }

    // Fallback to git command for local development
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()
    return branch
  } catch (error) {
    console.warn('Unable to get git branch:', error)
    return 'unknown'
  }
}

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: '0.0.0.0',
    port: 5174,
    strictPort: true,
  },
  define: {
    '__GIT_BRANCH__': JSON.stringify(getGitBranch()),
    '__MODE__': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  build: {
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})
