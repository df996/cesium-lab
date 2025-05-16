/* ------------------------------------------------------
¦ 文件名
¦ 文件描述
¦
¦ Author: 大风
¦ Email: 1236192@qq.com
¦ Date: 2025-03-22 15:57:55
¦ Version: 1.0
¦ FilePath: src\router\index.js
¦------------------------------------------------------*/

import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 路由集合
 */
const routes = [
  {
    path: '/',
    name: 'App',
    redirect: '/homePage',
    meta: {
      title: 'HomePage'
    },
    children: [
      {
        name: 'HomePage',
        path: '/homePage',
        component: () => import('../views/HomePage/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
