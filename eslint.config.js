// eslint.config.js (Flat Config without "extends")

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        node: true,
      },
    },
    rules: {
      // Manually include ESLint recommended rules
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'eqeqeq': 'error',
      'curly': 'error',
      'no-magic-numbers': 'warn',
      // Add other recommended rules here or from eslint:recommended
    },
  },
];
