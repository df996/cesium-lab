<!------------------------------------------------------
 ¦ 文件名
 ¦ 文件描述
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-03-22 15:33:33
 ¦ Version: 1.0
 ¦ FilePath: src\App.vue
 ¦----------------------------------------------------->

<template>
  <div id="app" class="w-screen h-screen overflow-hidden flex">
    <div class="w-[15%] h-full">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        default-active="2"
        text-color="#fff"
        class="h-full"
      >
        <el-sub-menu v-for="(root, rootIndex) in menus" :index="rootIndex">
          <template #title><span class="text-sm font-bold">{{ root.name }}</span></template>
          <el-menu-item v-for="(child, childIndex) in root?.children" :index="`${rootIndex}-${childIndex}`">
            <router-link :to="child.path" class="text-white" active-class="text-selected">
              {{ child.name }}
            </router-link>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>

    <div class="w-full h-full flex-1">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/**
 * 菜单
 */
const menus = ref([
  {
    name: "基础",
    children: [
      {
        name: '使用天地图影像数据',
        path: '/basic/tianditu'
      },
      {
        name: '打印左键点击的经纬度',
        path: '/basic/printlnglat'
      },
      {
        name: '绘制线条',
        path: '/basic/drawline'
      },
      {
        name: '绘制矩形',
        path: '/basic/drawrect'
      },
      {
        name: '绘制圆形',
        path: '/basic/drawcircle'
      },
      {
        name: '绘制圆柱体',
        path: '/basic/drawcylinder'
      },
      {
        name: '绘制墙',
        path: '/basic/drawWall'
      },
      {
        name: '标记点',
        path: '/basic/marker'
      }
    ]
  },
  {
    name: '交互',
    children: [
      {
        name: '事件',
        path: '/interactive/event'
      },
      {
        name: '弹窗',
        path: '/interactive/dialog'
      }
    ]
  },
  {
    name: '地图',
    children: [
      {
        name: '指定区域',
        path: '/map/area'
      }
    ]
  },
  {
    name: "模型",
    children: [
      {
        name: '加载模型',
        path: '/model/load'
      }
    ]
  }
])

</script>
