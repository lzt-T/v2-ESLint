
module.exports = {
    extends: ["plugin:vue/recommended", "@mored/eslint-config-basic"],
    rules: {
        "vue/no-reserved-props": ["error", {
            "vueVersion": 2,
        }],
        "vue/attributes-order": "off",
        'vue/max-attributes-per-line': 'off',
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-setup-props-destructure': 'off',
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 5
            },
            "multiline": {
                "max": 5
            }
        }]
    }
};