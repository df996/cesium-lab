module.exports = {
  // 继承Alloy的ESLint配置中的Prettier基础规则
  ...require('eslint-config-alloy/.prettierrc.js'),

  // 禁用语句末尾的分号（默认true）
  semi: false,

  // 设置单行最大宽度为160字符（默认80/100，适合宽屏显示器）
  printWidth: 160,

  // 设置制表符等效的空格数为2（与useTabs配合使用）
  tabWidth: 2,

  // 禁用制表符缩进，强制使用空格缩进
  useTabs: false,

  // 禁用对象/数组等多行元素末尾的逗号（默认es5/none/all）
  trailingComma: 'none',

  // 允许HTML/Vue标签的多个属性写在同一行（默认true会强制换行）
  singleAttributePerLine: false,

  // 禁用Vue单文件组件中script/style标签的额外缩进
  vueIndentScriptAndStyle: false,

  // 导入语句排序插件配置
  plugins: [
    // 用于自动排序import语句的插件
    '@trivago/prettier-plugin-sort-imports',
    // Tailwind CSS类名排序插件
    'prettier-plugin-tailwindcss'
  ],

  // 自定义导入语句排序规则（按优先级从高到低）
  importOrder: [
    // Vue相关模块优先
    '^vue(.*)',
    // Element Plus组件库
    '^element-plus(.*)',
    // 第三方模块（用<THIRD_PARTY_MODULES>占位符表示）
    '<THIRD_PARTY_MODULES>',
    // 项目内部模块（按业务优先级排序）
    '^@/api/(.*)$',      // API模块
    '^@/utils/(.*)$',    // 工具函数
    '^@/constants/(.*)$',// 常量定义
    '^@/stores/(.*)$',   // Pinia/Vuex存储
    '^@/hooks/(.*)$',    // 自定义Hook
    '^@/components/(.*)$',// 通用组件
    // 最后匹配本地相对路径
    '^[./]'
  ],

  // 导入排序时忽略大小写（默认false）
  importOrderCaseInsensitive: true,

  // 对导入语句的具体内容进行排序（如命名导入的顺序）
  importOrderSortSpecifiers: true
}
