import { defineConfig } from 'vite';

export default defineConfig({
  root: './', // Serving from the root folder
  build: {
    outDir: 'dist', // Output directory for the build
    assetsDir: 'assets', // Directory for assets in the build
    rollupOptions: {
      input: 'index.html', // Ensure Vite uses index.html from the root
    },
  },
  resolve: {
    alias: {
      '@js': '/src/assets/js', // Alias for the JS folder
    },
  },
});
