import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';

// https://vitejs.dev/config/
export default defineConfig({
    root: './src',
    plugins: [solidPlugin()],
    build: {
        target: 'esnext',
    },
});
