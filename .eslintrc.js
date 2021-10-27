module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['ts', 'tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'no-use-before-define': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'arrow-body-style': ['error', 'always'],
    'no-alert': 'off',
    'no-unused-expressions': 'error',
    'no-shadow': 'off',
    'max-len': 'off',
    'react/no-array-index-key': 'off',
    'no-restricted-globals': 'off',
    'use-isnan': 'off',
    'react/jsx-props-no-spreading': 'off',
    'consistent-return': 'off',
    'linebreak-style': 0,
  },
};
