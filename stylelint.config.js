module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'no-empty-source': null,
    'no-extra-semicolons': null,
    'no-invalid-double-slash-comments': null,
    'no-missing-end-of-source-newline': null,
    'no-unknown-animations': null,
    'no-unused-selectors': null,
    'no-unused-vars': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}

