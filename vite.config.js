import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    base: '/', // or '/SmartAxis/' if deployed to github.io/SmartAxis/
    plugins: [react()],
});
