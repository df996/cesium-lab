javascript
module.exports = {
  // 标记为根配置文件，停止向上查找其他配置文件
  'root': true,

  // 继承的规则集配置
  'extends': [
    // Alloy基础规则集
    'alloy',
    // Alloy的Vue规则扩展
    'alloy/vue',
    // Vue官方推荐的Vue3规则
    'plugin:vue/vue3-recommended',
    // Prettier格式化规则
    'prettier'
  ],

  // 启用全局环境变量
  'env': {
    // 浏览器环境全局变量
    'browser': true
    // 'node': true,           // Node.js环境（已注释）
    // 其他环境配置...
  },

  // 解析器配置选项
  'parserOptions': {
    // 使用ES模块语法
    'sourceType': 'module',
    'ecmaFeatures': {
      // 启用JSX语法支持
      'jsx': true
    }
  },

  // 自定义全局变量配置
  'globals': {
    // 示例：'myGlobal': false  // 声明不可修改的全局变量
  },

  // 自定义规则配置
  'rules': {
    // Vue相关规则
    // 限制单行标签最多5个属性，多行标签每行最多1个属性
    'vue/max-attributes-per-line': [
      2,
      {
        'singleline': 5,
        'multiline': {
          'max': 1
        }
      }
    ],
    // 关闭单行HTML元素内容换行规则
    'vue/singleline-html-element-content-newline': 'off',
    // 关闭多行HTML元素内容换行规则
    'vue/multiline-html-element-content-newline': 'off',
    // 关闭多单词组件名规则
    'vue/multi-word-component-names': 'off',
    // 关闭禁止修改props规则
    'vue/no-mutating-props': 'off',
    // 关闭禁止使用v-html指令规则
    'vue/no-v-html': 'off',

    // 通用JavaScript规则
    // 函数参数最多6个
    'max-params': ['error', 6],
    // 最大循环复杂度40
    'complexity': ['error', 40],
    // 禁止重新赋值参数（允许props）
    'no-param-reassign': ['error', { 'props': false }],
    // 强制getter/setter成对出现
    'accessor-pairs': 2,
    // 箭头函数箭头前后空格
    'arrow-spacing': [
      2,
      { 'before': true, 'after': true }
    ],
    // 强制代码块前后空格
    'block-spacing': [2, 'always'],
    // 大括号风格配置
    'brace-style': [
      2,
      '1tbs',
      { 'allowSingleLine': true }
    ],
    // 驼峰命名规则配置
    'camelcase': [
      0,
      { 'properties': 'always' }
    ],
    // 禁止行尾逗号
    'comma-dangle': [2, 'never'],
    // 逗号前后空格配置
    'comma-spacing': [
      2,
      { 'before': false, 'after': true }
    ],
    // 逗号风格（行尾）
    'comma-style': [2, 'last'],
    // 强制super()在构造函数中调用
    'constructor-super': 2,
    // 多行代码块强制使用大括号
    'curly': [2, 'multi-line'],
    // 对象属性点号位置
    'dot-location': [2, 'property'],
    // 文件末尾强制换行
    'eol-last': 2,
    // 强制使用===
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    // generator函数*号前后空格
    'generator-star-spacing': [
      2,
      { 'before': true, 'after': true }
    ],
    // 回调错误处理规则
    'handle-callback-err': [2, '^(err|error)$'],
    // 缩进配置（2空格，switch语句1空格）
    'indent': [
      2,
      2,
      { 'SwitchCase': 1 }
    ],
    // JSX属性引号风格
    'jsx-quotes': [2, 'prefer-single'],
    // 对象字面量键值空格
    'key-spacing': [
      2,
      { 'beforeColon': false, 'afterColon': true }
    ],
    // 关键字前后空格
    'keyword-spacing': [
      2,
      { 'before': true, 'after': true }
    ],
    // 构造函数命名规范配置
    'new-cap': [
      2,
      { 'newIsCap': true, 'capIsNew': false }
    ],
    // 强制new后带括号
    'new-parens': 2,
    // 禁止使用Array构造函数
    'no-array-constructor': 2,
    // 禁止使用console（警告级别）
    'no-console': 'warn',
    // 禁止修改class声明
    'no-class-assign': 2,
    // 禁止条件语句中的赋值
    'no-cond-assign': 2,
    // 禁止修改const变量
    'no-const-assign': 2,
    // 允许控制字符正则
    'no-control-regex': 0,
    // 禁止删除变量
    'no-delete-var': 2,
    // 禁止重复参数
    'no-dupe-args': 2,
    // 禁止重复class成员
    'no-dupe-class-members': 2,
    // 禁止重复对象键
    'no-dupe-keys': 2,
    // 禁止重复case标签
    'no-duplicate-case': 2,
    // 禁止空字符类
    'no-empty-character-class': 2,
    // 禁止空解构模式
    'no-empty-pattern': 2,
    // 禁止eval
    'no-eval': 2,
    // 禁止修改异常声明
    'no-ex-assign': 2,
    // 禁止扩展原生对象
    'no-extend-native': 2,
    // 禁止不必要的bind
    'no-extra-bind': 2,
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 2,
    // 禁止不必要的括号（函数）
    'no-extra-parens': [2, 'functions'],
    // 禁止case穿透
    'no-fallthrough': 2,
    // 禁止浮点数字面量
    'no-floating-decimal': 2,
    // 禁止修改函数声明
    'no-func-assign': 2,
    // 禁止隐式eval
    'no-implied-eval': 2,
    // 禁止在代码块内声明函数
    'no-inner-declarations': [2, 'functions'],
    // 禁止无效正则表达式
    'no-invalid-regexp': 2,
    // 禁止不规则空格
    'no-irregular-whitespace': 2,
    // 禁止__iterator__属性
    'no-iterator': 2,
    // 禁止标签与变量同名
    'no-label-var': 2,
    // 禁止标签声明
    'no-labels': [
      2,
      { 'allowLoop': false, 'allowSwitch': false }
    ],
    // 禁止无用的代码块
    'no-lone-blocks': 2,
    // 禁止混合空格和制表符
    'no-mixed-spaces-and-tabs': 2,
    // 禁止多个空格
    'no-multi-spaces': 2,
    // 禁止多行字符串
    'no-multi-str': 2,
    // 禁止多行空行（最多1行）
    'no-multiple-empty-lines': [
      2,
      { 'max': 1 }
    ],
    // 禁止修改原生对象
    'no-native-reassign': 2,
    // 禁止在in表达式中使用否定
    'no-negated-in-lhs': 2,
    // 禁止使用Object构造函数
    'no-new-object': 2,
    // 禁止new require
    'no-new-require': 2,
    // 禁止new Symbol
    'no-new-symbol': 2,
    // 禁止包装对象构造
    'no-new-wrappers': 2,
    // 禁止将对象字面量作为函数调用
    'no-obj-calls': 2,
    // 禁止八进制字面量
    'no-octal': 2,
    // 禁止八进制转义
    'no-octal-escape': 2,
    // 禁止__dirname拼接
    'no-path-concat': 2,
    // 禁止__proto__属性
    'no-proto': 2,
    // 禁止重复声明
    'no-redeclare': 2,
    // 禁止正则表达式中的多个空格
    'no-regex-spaces': 2,
    // 禁止在return语句中赋值
    'no-return-assign': [2, 'except-parens'],
    // 禁止自我赋值
    'no-self-assign': 2,
    // 禁止自我比较
    'no-self-compare': 2,
    // 禁止逗号操作符
    'no-sequences': 2,
    // 禁止覆盖受限标识符
    'no-shadow-restricted-names': 2,
    // 禁止函数名与括号间空格
    'no-spaced-func': 2,
    // 禁止稀疏数组
    'no-sparse-arrays': 2,
    // 禁止在super()前使用this
    'no-this-before-super': 2,
    // 禁止抛出字面量
    'no-throw-literal': 2,
    // 禁止行尾空格
    'no-trailing-spaces': 2,
    // 禁止将未定义变量初始化为undefined
    'no-undef-init': 2,
    // 禁止不可达代码
    'no-unreachable': 2,
    // 禁止finally块中返回
    'no-unsafe-finally': 2,
    // 禁止不必要的函数调用
    'no-useless-call': 2,
    // 禁止不必要的计算属性名
    'no-useless-computed-key': 2,
    // 禁止不必要的构造函数
    'no-useless-constructor': 2,
    // 允许不必要的转义
    'no-useless-escape': 0,
    // 禁止属性前的空格
    'no-whitespace-before-property': 2,
    // 禁止with语句
    'no-with': 2,
    // 变量声明规则（禁止重复初始化）
    'one-var': [
      2,
      { 'initialized': 'never' }
    ],
    // 操作符换行规则
    'operator-linebreak': [
      2,
      'after',
      { 'overrides': { '?': 'before', ':': 'before' } }
    ],
    // 禁止块内填充空格
    'padded-blocks': [2, 'never'],
    // 引号风格配置
    'quotes': [
      2,
      'single',
      { 'avoidEscape': true, 'allowTemplateLiterals': true }
    ],
    // 禁止分号
    'semi': [2, 'never'],
    // 分号前后空格
    'semi-spacing': [
      2,
      { 'before': false, 'after': true }
    ],
    // 代码块前空格
    'space-before-blocks': [2, 'always'],
    // 函数括号前空格
    'space-before-function-paren': [2, 'never'],
    // 括号内空格
    'space-in-parens': [2, 'never'],
    // 操作符周围空格
    'space-infix-ops': 2,
    // 一元操作符空格
    'space-unary-ops': [
      2,
      { 'words': true, 'nonwords': false }
    ],
    // 注释空格配置
    'spaced-comment': [
      2,
      'always',
      { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }
    ],
    // 模板字符串空格
    'template-curly-spacing': [2, 'never'],
    // 强制使用isNaN检查NaN
    'use-isnan': 2,
    // 强制有效的typeof比较值
    'valid-typeof': 2,
    // 立即执行函数表达式包装
    'wrap-iife': [2, 'any'],
    // yield* 前后空格
    'yield-star-spacing': [2, 'both'],
    // 禁止尤达条件表达式
    'yoda': [2, 'never'],
    // 优先使用const声明
    'prefer-const': 2,
    // 生产环境禁用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 对象字面量花括号空格
    'object-curly-spacing': [
      2,
      'always',
      { 'objectsInObjects': false }
    ],
    // 数组括号空格
    'array-bracket-spacing': [2, 'never'],

    // 关闭特定Vue规则
    'vue/require-default-prop': 'off',
    'vue/no-parsing-error': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-template-shadow': 'off',
    'vue/prefer-true-attribute-shorthand': 'off',

    // 关闭特定JS规则
    'guard-for-in': 'off',
    'no-template-curly-in-string': 'off',
    'no-unused-expressions': 'off'
  }
}
