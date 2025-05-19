<!------------------------------------------------------
 ¦ 绘制矩形
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-19 10:53:14
 ¦ Version: 1.0
 ¦ FilePath: src\views\Basic\DrawRect\index.vue
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

function drawRect1() {
  viewer.entities.add({
    name: 'rect1',
    rectangle: {
      //                                       西、南、东、北
      coordinates: Cesium.Rectangle.fromDegrees(120.141471, 30.247973, 120.145865, 30.258123),
      material: Cesium.Color.fromCssColorString('rgba(255, 0, 0, 0.5)')
    }
  })
}

function drawRect2() {
  viewer.entities.add({
    name: 'rect2',
    rectangle: {
      coordinates: Cesium.Rectangle.fromDegrees(120.147828, 30.248943, 120.149569, 30.257235),
      material: Cesium.Color.fromCssColorString('rgba(0, 255, 0, 0.5)'),
      rotation: Cesium.Math.toRadians(45),
      height: 100.0,
      extrudedHeight: 1000.0,
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

  drawRect1()
  drawRect2()
})

/**
 * 组件选项
 */
defineOptions({
  name: 'BasicDrawRect'
})
</script>
