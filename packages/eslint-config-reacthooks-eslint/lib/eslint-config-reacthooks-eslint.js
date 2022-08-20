module.exports = {
    extends: ["eslint-config-basic-eslint", 'plugin:@typescript-eslint/recommended'],
    // 解析TS
    parser: '@typescript-eslint/parser',
    // 这允许您在代码库中使用typescript-eslint的规则
    plugins: ['@typescript-eslint'],
    rules: {
        // 
        "@typescript-eslint/adjacent-overload-signatures": "off"
    }
};