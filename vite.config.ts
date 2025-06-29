import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    publicDir: './public',
    plugins: [react()],
    define: {
      'process.env': { ...process.env, ...loadEnv(mode, process.cwd()) },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:8080', // Replace with your backend port
          changeOrigin: true,
        },
      },
    },
    build: {
      chunkSizeWarningLimit: 1500,
    },
  });
};
