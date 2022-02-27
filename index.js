module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ['meteor'],
  extends: ['airbnb', 'plugin:meteor/recommended'],
  settings: {
    'import/resolver': 'meteor',
  },
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    'import/no-absolute-path': 0,
    'import/extensions': 0,
    // disabled so that we're not expecting to find 'meteor' within
    // our dependencies.
    // XXX: this *should* be taken care of by eslint-import-resolver-meteor, investigate.
    'import/no-extraneous-dependencies': 0,
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_id', '_ensureIndex'],
      },
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: false,
      },
    ],
    'space-before-function-paren': 0,
    // for Meteor API's that rely on `this` context, e.g. Template.onCreated and publications
    'func-names': 0,
    'prefer-arrow-callback': 0,
    'quote-props': 0,
    'no-restricted-syntax': 0,
    'no-shadow': ['warn'],
    'comma-dangle': ['warn'],
    'spaced-comment': 0,
    'max-len': 0,
    'object-curly-newline': 0,
    'object-shorthand': 0,
    'dot-notation': 0,
    'import/prefer-default-export': 0,
    'global-require': 0,
    'no-else-return': 0,
    'no-plusplus': 0,
    'no-await-in-loop': ['warn'],
    'arrow-parens': [
      'warn',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 5,
      },
    ],
    'padded-blocks': [
      'error',
      {
        classes: 'always',
      },
    ],
    'lines-between-class-members': [
      'warn',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'class-methods-use-this': 0,
    'no-unused-expressions': 0,
  },
  globals: {
    'Assets': 'readonly',
    'Package': 'readonly',
    'Npm': 'readonly',
    'describe': 'readonly',
    'it': 'readonly',
    'test': 'readonly',
    'before': 'readonly',
    'beforeEach': 'readonly',
    'afterEach': 'readonly',
    'after': 'readonly'
  }
}
