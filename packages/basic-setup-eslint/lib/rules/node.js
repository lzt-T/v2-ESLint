module.exports = {
  env: {
    node: true
  },

  rules: {
    // 要求 require() 出现在顶层模块作用域中
    // https://eslint.org/docs/rules/global-require
    'global-require': 'error',

    // 禁用 Buffer() 构造函数
    // https://eslint.org/docs/rules/no-buffer-constructor
    'no-buffer-constructor': 'error',

    // 禁止调用 require 时使用 new 操作符
    'no-new-require': 'error',
  }
};
