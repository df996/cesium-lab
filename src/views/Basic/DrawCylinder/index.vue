<!------------------------------------------------------
 ¦ 绘制圆柱体
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-19 11:57:30
 ¦ Version: 1.0
 ¦ FilePath: src\views\Basic\DrawCylinder\index.vue
 ¦----------------------------------------------------->

<template>
  <div ref="cesiumContainerRef" class="w-full h-full"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { cesiumOptions } from '../../../configs/index.js'
import { normCesium } from '../../../utils/index.js'

/**
 * cesium 容器元素引用
 */
const cesiumContainerRef = ref(null)

/**
 * cesium 视图
 */
let viewer = null

function drawCylinder() {
  viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(120.141707, 30.256011),
    cylinder: {
      length: 500,
      topRadius: 300,
      bottomRadius: 300,
      material: Cesium.Color.fromCssColorString('rgba(0, 255, 0, 0.3)'),
      outline: true,
      outlineColor: Cesium.Color.BLACK
    }
  })
}

onMounted(() => {
  // 创建cesium视图
  viewer = new Cesium.Viewer(cesiumContainerRef.value, cesiumOptions)
  // 标准化cesium
  normCesium(viewer)
  // 设置视图相机
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(120.13849999, 30.24658888, 2611.7967072047672),
    orientation: {
      heading: Cesium.Math.toRadians(37.91111234500627),
      pitch: Cesium.Math.toRadians(-72.7224896880686),
      roll: Cesium.Math.toRadians(0.3490537331864264)
    }
  })

  drawCylinder()
})

/**
 * 组件选项
 */
defineOptions({
  name: 'BasicDrawCylinder'
})
</script>
