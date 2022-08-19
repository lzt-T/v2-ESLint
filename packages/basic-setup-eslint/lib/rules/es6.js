module.exports = {
  env: {
    es6: true
  },
    /** 解析器 */
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false, // 不允许在全局作用域下使用 return 语句
      objectLiteralDuplicateProperties: false
    }
  },

  rules: {
    // 要求箭头函数体使用大括号,当大括号是可以省略的，强制不使用它们 (默认)
    'arrow-body-style': ['error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    }],

    // 要求箭头函数的参数使用圆括号
    // https://eslint.org/docs/rules/arrow-parens
    'arrow-parens': ['error', 'always'],

    // 强制箭头函数的箭头前后使用一致的空格
    // https://eslint.org/docs/rules/arrow-spacing
    'arrow-spacing': ['error', { before: true, after: true }],

    //要求在构造函数中有 super() 的调用
    'constructor-super': 'error',

    // 不允许修改类声明的变量 
    // https://eslint.org/docs/rules/no-class-assign
    'no-class-assign': 'error',

    // 禁止在可能与比较操作符相混淆的地方使用箭头函数(var x = a => 1 ? 2 : 3;)
    // https://eslint.org/docs/rules/no-confusing-arrow
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // 禁止修改 const 声明的变量 
    'no-const-assign': 'error',

    // 禁止类成员中出现重复的名称
    // https://eslint.org/docs/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // 禁止重复模块导入
    // https://eslint.org/docs/rules/no-duplicate-imports
    'no-duplicate-imports': 'warn',

    // 禁止 Symbolnew 操作符和 new 一起使用
    // https://eslint.org/docs/rules/no-new-symbol
    'no-new-symbol': 'error',

    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    // https://eslint.org/docs/rules/no-this-before-super
    'no-this-before-super': 'error',

    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    // https://eslint.org/docs/rules/no-useless-rename
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',

    // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量 
    // https://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-numeric-literals': 'error',

    // 要求使用剩余参数而不是 arguments
    // https://eslint.org/docs/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // 要求使用扩展运算符而非 .apply()
    // https://eslint.org/docs/rules/prefer-spread
    'prefer-spread': 'error',

    // 要求 symbol 描述
    // https://eslint.org/docs/rules/symbol-description
    'symbol-description': 'error',

    // 强制模板字符串中空格的使用
    // https://eslint.org/docs/rules/template-curly-spacing
    'template-curly-spacing': 'error',
  }
};
