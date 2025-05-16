/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js}'
  ],
  theme: {
    extend: {
      colors: {
        'regular': 'var(--el-text-color-regular)',
        'primary': 'var(--el-text-color-primary)',
        'secondary': 'var(--el-text-color-secondary)',
        'disabled': 'var(--el-text-color-disabled)',
        'light-25': 'var(--el-text-color-light-25)',
        'light-35': 'var(--el-text-color-light-35)',
        'light-55': 'var(--el-text-color-light-55)',
        'light-90': 'var(--el-text-color-light-90)',
        'selected': 'var(--el-color-primary)',

        'basic-light': 'var(--color-basic-light)',
        'basic-focus': 'var(--color-basic-focus)',
        'basic-disabled': 'var(--color-basic-disabled)',
        'basic-hover': 'var(--color-basic-hover)',
        'basic': 'var(--color-basic)',
        'basic-split-line': 'var(--color-basic-split-line)',
        'basic-border': 'var(--color-basic-border)',
        'basic-border-e7': 'var(--color-basic-border-e7)',
        'basic-1': 'var(--color-basic-1)',
        'basic-2': 'var(--color-basic-2)',
        'basic-3': 'var(--color-basic-3)',
        'basic-4': 'var(--color-basic-4)',
        'basic-5': 'var(--color-basic-5)',
        'basic-6': 'var(--color-basic-6)',
        'basic-7': 'var(--color-basic-7)',
        'basic-8': 'var(--color-basic-8)',
        'basic-9': 'var(--color-basic-9)',

        'bg-gray': 'var(--color-bg-gray)',
        'bg-nav': 'var(--color-nav-bg)',
        'bg-hover': 'var(--el-color-primary-hover)'
      },
      fontFamily: {
        number: '',
        mediumNumber: '',
        regualrNumber: ''
      },
      fontSize: {
        'lv-1': ['1.25rem', { lineHeight: '1.75rem' }],
        'lv-2': ['1.125rem', { lineHeight: '1.625rem' }],
        'lv-3': ['1rem', { lineHeight: '1.5rem' }],
        'lv-4': ['0.875rem', { lineHeight: '1.375rem' }],
        'lv-5': ['0.75rem', { lineHeight: '1.25rem' }],
        'nlv-1': ['2rem', { lineHeight: '2.5rem' }],
        'nlv-2': ['1.5rem', { lineHeight: '2rem' }],
        'nlv-3': ['1.25rem', { lineHeight: '1.75rem' }],
        'nlv-4': ['1.125rem', { lineHeight: '1.625rem' }],
        'nlv-5': ['1rem', { lineHeight: '1.5rem' }]
      },
      spacing: {
        'button-gap': '1rem',
        'normal-gap': '2rem',
        'line-gap': '0.5rem',
        'md-gap': '3rem'
      },
      backgroundSize: {
        100: '100% 100%'
      },
      width: {
        'tree-small': '16.5rem',
        'tree-default': '20rem',
        'tree-large': '25.25rem'
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
