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
      },
      {
        name: 'Basic',
        path: '/basic',
        children: [
          {
            name: 'BasicTianditu',
            path: '/basic/tianditu',
            component: () => import('../views/Basic/Tianditu/index.vue')
          },
          {
            name: 'BasicPrintLnglat',
            path: '/basic/printlnglat',
            component: () => import('../views/Basic/PrintLnglat/index.vue')
          },
          {
            name: 'BasicDrawLine',
            path: '/basic/drawline',
            component: () => import('../views/Basic/DrawLine/index.vue')
          },
          {
            name: 'BasicDrawRect',
            path: '/basic/drawrect',
            component: () => import('../views/Basic/DrawRect/index.vue')
          },
          {
            name: 'BasicDrawCircle',
            path: '/basic/drawcircle',
            component: () => import('../views/Basic/DrawCircle/index.vue')
          },
          {
            name: 'BasicDrawCylinder',
            path: '/basic/drawcylinder',
            component: () => import('../views/Basic/DrawCylinder/index.vue')
          },
          {
            name: 'BasicDrawWall',
            path: '/basic/drawwall',
            component: () => import('../views/Basic/DrawWall/index.vue')
          },
          {
            name: 'BasicMarker',
            path: '/basic/marker',
            component: () => import('../views/Basic/Marker/index.vue')
          }
        ]
      },
      {
        name: 'Interactive',
        path: '/interactive',
        children: [
          {
            name: 'InteractiveEvent',
            path: '/interactive/event',
            component: () => import('../views/Interactive/Event/index.vue')
          },
          {
            name: 'InteractiveDialog',
            path: '/interactive/dialog',
            component: () => import('../views/Interactive/Dialog/index.vue')
          }
        ]
      },
      {
        name: 'map',
        path: '/map',
        children: [
          {
            name: 'MapArea',
            path: '/map/area',
            component: () => import('../views/Map/Area/index.vue')
          }
        ]
      },
      {
        name: 'model',
        path: '/model',
        children: [
          {
            name: 'ModelLoad',
            path: '/model/load',
            component: () => import('../views/Model/Load/index.vue')
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
