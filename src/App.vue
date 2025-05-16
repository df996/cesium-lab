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
          <template #title>{{ root.name }}</template>
          <el-menu-item v-for="(child, childIndex) in root?.children" :index="`${rootIndex}-${childIndex}`">
            {{ child.name }}
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
    name: "菜单一",
    children: [
      {
        name: '子菜单一'
      },
      {
        name: '子菜单二'
      }
    ]
  },
  {
    name: "菜单二",
    children: [
      {
        name: '子菜单一'
      },
      {
        name: '子菜单二'
      }
    ]
  }
])

</script>
