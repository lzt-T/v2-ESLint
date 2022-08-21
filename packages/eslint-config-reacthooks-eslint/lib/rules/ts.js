module.exports = {
  extends: ['plugin:@typescript-eslint/recommended',"eslint-config-basic-eslint"],
  // 解析TS
  parser: '@typescript-eslint/parser',
  // 这允许您在代码库中使用typescript-eslint的规则
  plugins: ['@typescript-eslint'],
  rules: {
    "@typescript-eslint/adjacent-overload-signatures": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    '@typescript-eslint/ban-types': 'off',
    "@typescript-eslint/no-floating-promises": "off",
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  }
};
