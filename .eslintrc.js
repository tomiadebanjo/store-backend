module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'max-len': ['warn', { code: 100, ignoreUrls: true }],
    'consistent-return': 0,
    'comma-dangle': 0,
    'no-fallthrough': 0,
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'no-underscore-dangle': 'error',
    'eol-last': ['error', 'always'],
    camelcase: 0
  }
};
