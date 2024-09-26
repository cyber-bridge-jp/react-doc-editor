import path from 'path'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import * as packageJson from './package.json'

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            include: ['src/components/'],
            outDir: 'dist/types'
        })
    ],
    build: {
        lib: {
            entry: path.resolve("src", 'components/index.ts'),
            name: 'react-doc-editor',
            formats: ['es', 'umd'],
            fileName: (format) => `react-doc-editor.${format}.js`
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies)],
        }
    }
})
