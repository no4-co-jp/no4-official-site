/** @type {import('stylelint').Config} */
const config = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-html',
  ],
  rules: {
    // セレクタの重複を許可しない
    'no-duplicate-selectors': true,
    // セレクタ属性に引用符を用いる [target="_blank"] {}
    'selector-attribute-quotes': 'always',
    // !importantを許可しない
    'declaration-no-important': true,
    // 色関数の書き方（config-standardでmodernが指定されている）
    // 'color-function-notation': 'legacy'
  },
};

module.exports = config;
