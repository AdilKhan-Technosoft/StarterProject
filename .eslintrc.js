module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': 2,
    'eslint-disable-next-line': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
