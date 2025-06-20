module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['dist/'],
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
};
