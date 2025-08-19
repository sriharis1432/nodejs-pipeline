// eslint.config.js (Flat Config)

import { FlatConfig } from 'eslint';

export default new FlatConfig({
  languageOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    globals: {
      node: true, // Define global variables for Node.js
    },
  },
  extends: ['eslint:recommended'],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
});
