// eslint.config.js (ES Modules)

import eslint from 'eslint';
const { defineConfig } = eslint;

export default defineConfig({
  // Your ESLint rules here
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Add your rules here
    'no-unused-vars': 'warn',
    'no-console': 'off',
  }
});
