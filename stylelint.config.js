module.exports = {
  plugins: [
    'stylelint-scss',
  ],
  extends: 'stylelint-config-recommended',
  rules: {
    'number-max-precision': 4,
    'max-nesting-depth': 2,
    'number-leading-zero': ['always', { severity: 'warning' }],
    'number-no-trailing-zeros': [true, { severity: 'warning' }],
    'string-quotes': 'double',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'property-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': 'always',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-space-before': 'always-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'selector-attribute-quotes': 'always',
    'selector-attribute-brackets-space-inside': 'always',
    'selector-pseudo-class-case': 'lower',
    'selector-type-case': 'lower',
    'comment-whitespace-inside': 'always',
    indentation: 2,
    'max-empty-lines': 2,
    'no-eol-whitespace': true,
    'no-empty-first-line': true,
    'scss/at-else-if-parentheses-space-before': 'always',
  },
};
