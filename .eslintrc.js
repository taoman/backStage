module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    "eslint:recommended",
    // "standard",
    "plugin:vue/vue3-recommended",
    // "plugin:vue/recommended" // Use this if you are using Vue.js 2.x.
  ],
  plugins: ["html"],
  // parser: "vue-eslint-parser",
  parser: "babel-eslint",
  rules: {
    "vue/max-attributes-per-line": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-v-model-argument": "off",
    "vue/singleline-html-element-content-newline": "off",
  },
};
