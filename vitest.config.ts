import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./setupTests.ts'], // path to your setup file
    environment: 'happy-dom'
  },
});
