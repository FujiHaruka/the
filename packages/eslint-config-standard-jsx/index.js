'use strict'

const standardJSX = require('eslint-config-standard-jsx')

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ...standardJSX.parserOptions,
  },
  plugins: [...standardJSX.plugins],
  rules: {
    ...standardJSX.rules,
    'react/jsx-handler-names': 'off',
    'react/jsx-key': 'off',
  },
}
