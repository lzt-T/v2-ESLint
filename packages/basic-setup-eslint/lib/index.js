module.exports = {
    /** 环境 */
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    /** 解析器 */
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',  //  设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
        ecmaFeatures: {
            generators: false,  // 不允许在全局作用域下使用 return 语句
            objectLiteralDuplicateProperties: false
        }
    },
    // 插件
    plugins: [],
    // 在某一类问文件中使用规则
    overrides: [
        {
            files: ["*-test.js", "*.spec.js"],
            rules: {
                "no-unused-expressions": "off"
            }
        }
    ],
    extends: [
        './rules/best-practices',
        './rules/errors',
    ].map(require.resolve),
    rules: {

    }
};