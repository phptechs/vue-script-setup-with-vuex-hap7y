/// <reference types="node" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')
const projectRootDir = path.resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: /^@\/(.+)/,
                replacement: path.resolve(projectRootDir, 'src') + '/$1',
            },
        ],
    },
})
