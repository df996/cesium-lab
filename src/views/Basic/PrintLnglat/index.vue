<!------------------------------------------------------
 ¦ 打印经纬度示例
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-17 07:14:39
 ¦ Version: 1.0
 ¦ FilePath: src\views\Basic\PrintLnglat\index.vue
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
  // 创建屏幕空间事件处理器
  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas);

  // 监听左键点击事件
  handler.setInputAction((click) => {
    // 将点击位置转换为笛卡尔坐标
    const cartesian = viewer.camera.pickEllipsoid(
      click.position,
      viewer.scene.globe.ellipsoid
    );

    if (cartesian) {
      // 将笛卡尔坐标转换为地理坐标（弧度）
      const cartographic = Cesium.Cartographic.fromCartesian(cartesian);

      // 将弧度转换为度数
      const longitude = Cesium.Math.toDegrees(cartographic.longitude);
      const latitude = Cesium.Math.toDegrees(cartographic.latitude);
      const height = cartographic.height;

      // 在控制台输出结果
      console.log(`经度: ${longitude.toFixed(6)}°, 纬度: ${latitude.toFixed(6)}°, 高度: ${height.toFixed(2)}米`);
    } else {
      console.log("点击位置没有获取到有效坐标（可能点击在太空区域）");
    }
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
})

/**
 * 组件选项
 */
defineOptions({
  name: 'PrintLnglat'
})
</script>
