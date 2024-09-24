import pluginVue from 'eslint-plugin-vue'
import parserVue from 'vue-eslint-parser'
import parserTs from '@typescript-eslint/parser'

export default [
  {
    plugins: {
      vue: pluginVue,
    },
    files: ['**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        parser: {
          ts: parserTs,
          tsx: parserTs,
        },
        sourceType: 'module',
      },
    },
    rules: {
      'vue/attributes-order': 'error',
    },
  },
]
