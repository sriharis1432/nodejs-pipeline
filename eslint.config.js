// eslint.config.js (CommonJS)

const { defineConfig } = require('eslint');

module.exports = defineConfig({
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
