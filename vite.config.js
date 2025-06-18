import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Exporta diretamente a configuração usando defineConfig
export default defineConfig({
  plugins: [react()],
  // As configurações abaixo são úteis para garantir que o Vite encontra seus ficheiros
  root: '.', // O Vite deve considerar a pasta raiz do seu projeto como base
  build: {
    outDir: 'dist', // A pasta de saída para o build final (HTML, CSS, JS)
    emptyOutDir: true, // Limpa a pasta 'dist' antes de cada build
  },
  publicDir: 'public', // Informa ao Vite que a pasta 'public' é onde estão os assets estáticos como o index.html
});
