module.exports = {
  // 待定写什么
  rules: {
    /** 在数组开括号后和闭括号前强制换行 */
    "array-bracket-newline": ["error", { "multiline": true }],
    /** 禁止或强制在括号内使用空格 */
    "array-bracket-spacing": ["error", "always"],
    /** 强制在代码块中开括号前和闭括号后有空格 */
    "block-spacing": "error",
    /** 大括号风格要求  */
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    /** 变量名称以驼峰的形式书写 */
    camelcase: "error",
    /** 要求使用拖尾逗号 */
    "comma-dangle": ["error", "always"],
    /** 逗号之后有一个空个，前没有空格 */
    "comma-spacing": ["error", { "before": false, "after": true }],
    /** 禁止在计算属性中使用空格 */
    "computed-property-spacing": ["error", "never"],
    /** 要求一致的 This */
    "consistent-this": ["error", "that"],
    /** 该规则要求在非空文件末尾至少存在一行空行 */
    "eol-last": ["error", "always"],
    /** 禁止在函数标识符和其调用之间有空格 */
    "func-call-spacing": ["error", "never"],
    /** 函数的任一参数有换行，则要求在函数括号内换行。否则禁止换行。 */
    "function-paren-newline": ["error", "multiline"],
    /** 强制标识符的最大和最小长度 */
    "id-length": ["error", { "min": 2 }],
    /** 强制隐式返回的箭头函数体的位置 */
    "implicit-arrow-linebreak": ["error", "beside"],
    /** 强制使用一致的缩进  */
    "indent": ["error", 2],
    /**  强制在 JSX 属性中使用一致的单引号或双引号  */
    "jsx-quotes": ["error", "prefer-double"],
    /** 强制在对象字面量的键和值之间使用一致的空格  */
    "key-spacing": "error",
    /** 强制关键字周围空格的一致性 */
    "keyword-spacing": "error",
    /** 强制行注释的位置 */
    "line-comment-position": ["error", { "position": "above" }],
    /** 强制使用一致的换行符风格 */
    "linebreak-style": ["error", "unix"],
    /** 强制注释周围有空行 */
    "lines-around-comment": ["error", { "beforeBlockComment": true }],
    /**  要求或禁止在类成员之间出现空行 */
    "lines-between-class-members": ["error", "never"],
    /** 强制块语句的最大可嵌套深度 */
    "max-depth": ["error", 4],
    /** 强制行的最大长度  */
    "max-len": ["error", { "code": 80 }],
    /** 强制对多行注释使用特定风格 */
    "multiline-comment-style": ["error", "bare-block"],
    /**  要求在三元操作数中间换行 */
    "multiline-ternary": ["error", "always"],
    /** 要求构造函数首字母大写 */
    "new-cap": "error",
    /** 要求调用无参构造函数时带括号 */
    "new-parens": "error",
    /** 要求方法链中每个调用都有一个换行符 */
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
    /** 禁止使用 Array 构造函数 */
    "no-array-constructor": "error",
    /** 禁用 continue */
    "no-continue": "error",
    /** 禁止注释和代码出现在同一行 */
    "no-inline-comments": "error",
    /** 禁止 if 语句作为唯一语句出现在 else 语句块中 */
    "no-lonely-if": "error",
    /** 禁止使用 空格 和 tab 混合缩进 */
    "no-mixed-spaces-and-tabs": "error",
    /** 禁止连续赋值 */
    "no-multi-assign": "error",
    /** 不允许多个空行*/
    "no-multiple-empty-lines": "error",
    /** 禁用否定表达式 */
    "no-negated-condition": "error",
    /** 禁止使用嵌套的三元表达式 */
    "no-nested-ternary": "error",
    /** 禁止使用 Object 构造函数 */
    "no-new-object": "error",
    /** 禁用 tab  */
    "no-tabs": "error",
    /** 禁用行尾空白 */
    "no-trailing-spaces": "error",
    /** 禁止标识符中有悬空下划线 */
    "no-underscore-dangle": "error",
    /** 禁止可以表达为更简单结构的三元操作符 */
    "no-unneeded-ternary": "error",
    /** 禁止属性前有空白 */
    "no-whitespace-before-property": "error",
    /** 强制单个语句的位置 */
    "nonblock-statement-body-position": ["error", "beside"],
    /** 强制在花括号内使用一致的换行符,属性内部或属性之间有换行符，就要求有换行符*/
    "object-curly-newline": ["error", { "multiline": true }],
    /** 强制在花括号中使用一致的空格 */
    "object-curly-spacing": ["error", "always"],
    /** 强制函数中的变量在一起声明或分开声明 */
    "one-var": ["error", "never"],
    /** 要求或禁止尽可能地简化赋值操作 */
    "operator-assignment": ["error", "always"],
    /** 强制操作符使用一致的换行符风格 */
    "operator-linebreak": ["error", "before"],
    /** 要求或禁止块内填充 */
    "padded-blocks": ["error", "never"],
    /** 优先使用对象扩展而不是 Object.assign */
    "prefer-object-spread": "error",
    /** 要求对象字面量属性名称使用引号 */
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],
    /** 强制使用一致的反勾号、双引号或单引号 */
    quotes: ["error", "double"],
    /** 要求或禁止使用分号代替 ASI */
    semi: ['error', 'never'],
    /** 要求对象属性按序排列  */
    "sort-keys": "error",
    /** 要求或禁止语句块之前的空格 */
    "space-before-blocks": "error",
    /**  要求函数圆括号之前有一个空格 */
    "space-before-function-paren": ["error", "never"],
    /** 强制圆括号内的空格*/
    "space-in-parens": ["error", "always"],
    /** 要求中缀操作符周围有空格 */
    "space-infix-ops": "error",
    /** 要求或禁止在一元操作符之前或之后存在空格 */
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {
      },
    }], 
    /** 强制在 switch 的冒号左右有空格 */
    "switch-colon-spacing": ["error", { "after": true, "before": false }],
    /** 要求或禁止在模板标记和它们的字面量之间有空格 */
    "template-tag-spacing": ["error", "never"]
  }
};
