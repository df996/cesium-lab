<!------------------------------------------------------
 ¦ 加载模型
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-24 11:31:47
 ¦ Version: 1.0
 ¦ FilePath: src\views\Model\Load\index.vue
 ¦----------------------------------------------------->

<template>
  <div ref="cesiumContainerRef" class="w-full h-full"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { cesiumOptions } from '../../../configs/index.js'
import { normCesium, setCesiumImageryLayer } from '../../../utils/index.js'

/**
 * cesium 容器元素引用
 */
const cesiumContainerRef = ref(null)

/**
 * cesium 视图
 */
let viewer = null

onMounted(async () => {
  // 创建cesium视图
  viewer = new Cesium.Viewer(cesiumContainerRef.value, cesiumOptions)
  // 标准化cesium
  normCesium(viewer)
  // 使用高德底图
  setCesiumImageryLayer(viewer, 'amap')
  // 设置视图相机
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(120.13849999, 30.24658888, 2000),
    orientation: {
      heading: Cesium.Math.toRadians(37.91111234500627),
      pitch: Cesium.Math.toRadians(-72.7224896880686),
      roll: Cesium.Math.toRadians(0.3490537331864264)
    }
  })

  const position = Cesium.Cartesian3.fromDegrees(120.140894, 30.254585, 0)
  const entity = viewer.entities.add({
    name: '模型',
    position: position,
    model: {
      uri: '/data/77912974/glbfile.gltf', // 模型路径
      scale: 1.0,              // 缩放比例
      minimumPixelSize: 64      // 最小显示像素（确保远距离可见）
    }
  })
  viewer.zoomTo(entity).catch(error => {
    console.log("视角定位失败:", error)
  })
})

/**
 * 组件选项
 */
defineOptions({
  name: 'ModelLoad'
})
</script>
