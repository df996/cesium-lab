/* ------------------------------------------------------
¦ 文件名
¦ 文件描述
¦
¦ Author: 大风
¦ Email: 1236192@qq.com
¦ Date: 2025-03-22 15:23:19
¦ Version: 1.0
¦ FilePath: src\main.js
¦------------------------------------------------------*/

import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import './styles/index.css'

const app = createApp(App)
app.use(createPinia()).use(router)
app.mount('#app')
