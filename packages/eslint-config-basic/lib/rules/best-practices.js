module.exports = {
  rules: {
    // 强制数组方法的回调函数中有 语句return允许隐式使用 不包含任何表达式地返回
    // https://eslint.org/docs/rules/array-callback-return
    'array-callback-return': ['error', { allowImplicit: true }],

    // 强制把变量的使用限制在其定义的作用域范围内
    // https://eslint.org/docs/rules/block-scoped-var
    'block-scoped-var': 'error',

    // 要求 return 语句要么总是指定返回的值，要么不指定
    // https://eslint.org/docs/rules/consistent-return
    'consistent-return': 'off',

    // 强制所有控制语句使用一致的括号风格,允许在单行中省略大括号
    // https://eslint.org/docs/rules/curly
    curly: ['error', 'multi-line'], 

    // 强制尽可能地使用点号而不是[属性]
    // https://eslint.org/docs/rules/dot-notation
    'dot-notation': ['error', { allowKeywords: true }],

    // 要求点操作符和属性放在同一行
    // https://eslint.org/docs/rules/dot-location
    'dot-location': ['error', 'property'],

    // 禁用 alert、confirm 和 prompt
    // https://eslint.org/docs/rules/no-alert
    'no-alert': 'warn',

    //禁用 arguments.caller 或 arguments.callee
    // https://eslint.org/docs/rules/no-caller
    'no-caller': 'error',

    //禁止出现空函数
    // https://eslint.org/docs/rules/no-empty-function
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // 禁止使用空解构模式
    // https://eslint.org/docs/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // 禁止在没有类型检查操作符的情况下与 null 进行比较（不使用==和!=，而是使用===和!==）
    // https://eslint.org/docs/rules/no-eq-null
    'no-eq-null': 'warn',

    // 禁用 eval()
    // https://eslint.org/docs/rules/no-eval
    'no-eval': 'error',

    // 禁止不必要的 .bind() 调用
    // https://eslint.org/docs/rules/no-extra-bind
    'no-extra-bind': 'error',

    // 禁止使用类似 eval() 的方法
    // https://eslint.org/docs/rules/no-implied-eval
    'no-implied-eval': 'error',

    // 禁用 __iterator__ 属性
    // https://eslint.org/docs/rules/no-iterator
    'no-iterator': 'error',

    // 禁用不必要的嵌套块
    // https://eslint.org/docs/rules/no-lone-blocks
    'no-lone-blocks': 'error',

    // 禁止在循环语句中出现包含不安全引用的函数声明
    // https://eslint.org/docs/rules/no-loop-func
    'no-loop-func': 'error',

    // 禁止使用多个空格,"ignoreEOLComments": true (默认 false) 忽略行尾注释前的多个空格
    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],

    // 禁止使用 new 关键字调用构造函数但却不将结果赋值给一个变量
    // https://eslint.org/docs/rules/no-new
    'no-new': 'error',

    // 禁止对 Function 对象使用 new 操作符
    // https://eslint.org/docs/rules/no-new-func
    'no-new-func': 'error',

    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    // https://eslint.org/docs/rules/no-new-wrappers
    'no-new-wrappers': 'error',

    // 禁用八进制字面量
    // https://eslint.org/docs/rules/no-octal
    'no-octal': 'error',

    // 禁止在字符串中使用八进制转义序列
    // https://eslint.org/docs/rules/no-octal-escape
    'no-octal-escape': 'error',

    // 禁止多次声明同一变量
    // https://eslint.org/docs/rules/no-redeclare
    'no-redeclare': 'error',

    // 此选项禁止 return 中所有的赋值。所有的赋值均被认为是有问题的。
    // https://eslint.org/docs/rules/no-return-assign
    'no-return-assign': ['error', 'always'],

    // 禁用不必要的 return await
    // https://eslint.org/docs/rules/no-return-await
    'no-return-await': 'error',

    // 	禁止自我赋值
    // https://eslint.org/docs/rules/no-self-assign
    'no-self-assign': ['error', {
      props: true,
    }],

    // 禁止自身比较
    // https://eslint.org/docs/rules/no-self-compare
    'no-self-compare': 'error',

    // 禁用逗号操作符
    // https://eslint.org/docs/rules/no-sequences
    'no-sequences': 'error',

    // 禁止不必要的 catch 子句
    // https://eslint.org/docs/rules/no-useless-catch
    'no-useless-catch': 'error',

    // 禁止不必要的字符串字面量或模板字面量的连接
    // https://eslint.org/docs/rules/no-useless-concat
    'no-useless-concat': 'error',

    // 禁用 with 语句
    // https://eslint.org/docs/rules/no-with
    'no-with': 'error',

    // 强制在 parseInt() 使用基数参数
    // https://eslint.org/docs/rules/radix
    "radix": 'error',

    // 需要把立即执行的函数包裹起来
    // https://eslint.org/docs/rules/wrap-iife.html
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],
  }
};
