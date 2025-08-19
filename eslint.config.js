// eslint.config.js (Flat Config with ESLint)

// Import the ESLint package
import eslint from 'eslint';

// Define the ESLint flat config
export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        node: true,
      },
    },
    extends: ['eslint:recommended'],
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];
