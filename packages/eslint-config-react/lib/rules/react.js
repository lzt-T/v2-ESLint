module.exports = {
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    "ecmaVersion": 2021,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },

  plugins: [
    "react",
    //专门用来检查 Hooks 是否正确被使用
    "react-hooks",
  ],
  extends: [
    "plugin:react/recommended",
    "@mored/eslint-config-basic",
    "eslint-config-airbnb"
  ],
  settings: {
    react: {
      //从` package.json '中检测当前的 React 版本
      version: "detect"
    }
  },
  globals: {
    React: true,
    ReactDOM: true,
  },
  rules: {
    // 检查 Hooks 的使用规则
    "react-hooks/rules-of-hooks": "error",
    'react/prop-types': "off",
    'react/display-name': "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  }
};