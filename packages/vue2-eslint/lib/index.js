
module.exports = {
    extends: ["plugin:vue/recommended", "eslint-config-basic-eslint"],
    rules: {
        "vue/no-reserved-props": ["error", {
            "vueVersion": 2,
        }],
        "vue/attributes-order": "off",
        'vue/max-attributes-per-line': 'off',
        'vue/no-v-html': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-setup-props-destructure': 'off',
    }
};