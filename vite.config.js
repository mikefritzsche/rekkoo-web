import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

const getGitBranch = () => {
  try {
    // Log environment for debugging
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('CIRCLE_BRANCH:', process.env.CIRCLE_BRANCH);

    // If we're in production, assume main branch
    if (process.env.NODE_ENV === 'production') {
      return 'main';
    }

    // Try CircleCI variable
    if (process.env.CIRCLE_BRANCH) {
      console.log('Using CircleCI branch:', process.env.CIRCLE_BRANCH);
      return process.env.CIRCLE_BRANCH;
    }

    // Try git command
    const branch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
    console.log('Git command returned branch:', branch);
    return branch;
  } catch (error) {
    console.warn('Error getting git branch:', error);
    // In production, default to main instead of unknown
    return process.env.NODE_ENV === 'production' ? 'main' : 'unknown';
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
