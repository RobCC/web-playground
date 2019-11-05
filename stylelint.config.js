module.exports = {
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': true,
    'function-calc-no-invalid': true,
    'unit-no-unknown': true,
    'property-no-unknown': true,
    'keyframe-declaration-no-important': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'comment-no-empty': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': [true, { severity: 'warning' }],
    'no-extra-semicolons': [true, { severity: 'warning' }],
    'no-invalid-double-slash-comments': true,
    'number-max-precision': 2,
    'max-nesting-depth': 2,
    'number-leading-zero': ['always', { severity: 'warning' }],
    'number-no-trailing-zeros': [true, { severity: 'warning' }],
    'string-quotes': 'double',
    'length-zero-no-unit': true,
    'unit-case': 'lower',
    'value-keyword-case': 'lower',
    'property-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-after': 'never',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-space-before': 'always-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'selector-attribute-quotes': 'always',
    'selector-attribute-brackets-space-inside': 'always',
    'selector-attribute-quotes': 'always',
    'selector-pseudo-class-case': 'lower',
    'selector-type-case': 'lower',
    'comment-whitespace-inside': 'always',
    'indentation': 2,
    'max-empty-lines': 2,
    'no-eol-whitespace': true,
    'no-empty-first-line': true,
    'scss/at-else-if-parentheses-space-before': 'always',
  }
};
