// eslint.config.js
import { defineConfig } from 'eslint';

export default defineConfig({
  extends: ['eslint:recommended'],  // Extend from the recommended rules
  parserOptions: {
    ecmaVersion: 2020,  // Set ECMAScript version
    sourceType: 'module',  // Enable ES Modules
  },
  env: {
    node: true,  // For Node.js environments
    es2020: true,  // For ECMAScript 2020
  },
  rules: {
    // Define custom rules or override defaults here
    'no-console': 'off',  // Example: allow console statements
  },
});
