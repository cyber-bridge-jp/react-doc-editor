import path from 'path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve("src", 'DocumentEditor.tsx'),
            name: 'react-doc-editor',
            fileName: (format) => `react-doc-editor.${format}.ts`
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
    plugins: [react(), dts({insertTypesEntry: true})]
})
