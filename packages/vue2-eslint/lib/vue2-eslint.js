'use strict';


module.exports = {
    root: true,
    extends: ["eslint-config-basic-eslint"],
    rules: {
        // 算引号和分号结尾
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
};