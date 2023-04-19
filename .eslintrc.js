const is_development = process.env.NODE_ENV === 'development'
const error = is_development ? 'warn' : 'error'

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  ignorePatterns: [
    '__mocks__',
    '__snapshots__',
    './*.js',
    '**/*.js',
    '**/*.d.ts',
    "vitest.*.ts"
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2022,
    project: [
      'package/*/tsconfig.json',
    ],
    sourceType: 'module',
  },
  plugins: [
    'vitest',
    'eslint-plugin-import',
    'eslint-plugin-prefer-arrow',
    '@typescript-eslint',
  ],
  rules: {
    'array-bracket-spacing': [error, 'never'],
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'computed-property-spacing': [error, 'never'],
    'eol-last': ['error', 'always'],
    indent: 'off',
    'jsx-quotes': [error, 'prefer-double'],
    'keyword-spacing': [error, { after: true }],
    'linebreak-style': ['error', 'unix'],
    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-console': [error],
    'no-multi-spaces': [error],
    'no-multiple-empty-lines': error,
    'no-void': ['error', { allowAsStatement: true }],
    'no-warning-comments': [error],
    'object-curly-spacing': 'off',
    'padded-blocks': [error, 'never'],
    'padding-line-between-statements': 'off',
    quotes: 'off',
    semi: 'off',
    'space-in-parens': [error, 'never'],
    'space-unary-ops': [error, { words: true, nonwords: false }],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/brace-style': ['error', '1tbs', { "allowSingleLine": true }],
    '@typescript-eslint/comma-dangle': [
      error,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    '@typescript-eslint/comma-spacing': [error, { before: false, after: true }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-floating-promises': ['off'],
    '@typescript-eslint/no-unsafe-assignment': ['off'],
    '@typescript-eslint/no-unsafe-call': ['off'],
    '@typescript-eslint/no-unsafe-member-access': ['off'],
    '@typescript-eslint/no-unsafe-return': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { argsIgnorePattern: '([_]+[w]*)' },
    ],
    "@typescript-eslint/object-curly-spacing": [error, 'always'],
    '@typescript-eslint/padding-line-between-statements': [
      error,
      { blankLine: 'always', prev: '*', next: 'multiline-expression' },
      { blankLine: 'always', prev: '*', next: 'multiline-block-like' },
      { blankLine: 'always', prev: 'multiline-expression', next: '*' },
      { blankLine: 'always', prev: 'multiline-block-like', next: '*' },
    ],
    '@typescript-eslint/parser': ['off'],
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/restrict-plus-operands': ['off'],
    '@typescript-eslint/restrict-template-expressions': ['off'],
    '@typescript-eslint/semi': ['error', 'never'],
    '@typescript-eslint/unbound-method': ['off'],
    'no-restricted-imports': ['error', {
      paths: [{
        name: 'lodash',
        message: 'lodash modules should be imported from lodash/[module]'
      }],
    }],
  },
}
