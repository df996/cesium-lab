<!------------------------------------------------------
 ¦ 绘制圆形
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-19 11:32:26
 ¦ Version: 1.0
 ¦ FilePath: src\views\Basic\DrawCircle\index.vue
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

function drawCircle1() {
  viewer.entities.add({
    name: 'circle1',
    position: Cesium.Cartesian3.fromDegrees(120.144157, 30.252982),
    ellipse: {
      // 半径
      semiMajorAxis: 200,
      semiMinorAxis: 200,
      material: Cesium.Color.fromCssColorString('rgba(255, 0, 0, 0.2)'),
      height: 0,
      outline: true,
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 3
    }
  })
}

function drawCircle2() {
  viewer.entities.add({
    name: 'circle1',
    position: Cesium.Cartesian3.fromDegrees(120.138831, 30.260503),
    ellipse: {
      // 半径
      semiMajorAxis: 200,
      semiMinorAxis: 150,
      material: Cesium.Color.fromCssColorString('rgba(255, 0, 0, 0.2)'),
      height: 0,
      outline: true,
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 3
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

  drawCircle1()
  drawCircle2()
})

/**
 * 组件选项
 */
defineOptions({
  name: 'BasicDrawCircle'
})
</script>
