import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.IS_PREACT": process.env.IS_PREACT,
  },
  build: {
    lib: {
      entry: path.resolve("src", 'DocumentEditor.tsx'),
      name: 'react-doc-editor',
      fileName: (format) => `react-doc-editor.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'katex', 'lexical', '@lexical/react', '@excalidraw/excalidraw'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react()],
})
