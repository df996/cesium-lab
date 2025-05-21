<!------------------------------------------------------
 ¦ 显示区域
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-21 11:38:15
 ¦ Version: 1.0
 ¦ FilePath: src\views\Map\Area\index.vue
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

onMounted(() => {
  // 创建cesium视图
  viewer = new Cesium.Viewer(cesiumContainerRef.value, cesiumOptions)
  // 标准化cesium
  normCesium(viewer)
  // 使用高德底图
  setCesiumImageryLayer(viewer, 'amap')
  // 设置视图相机
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(120.13849999, 30.24658888, 50000),
    orientation: {
      heading: Cesium.Math.toRadians(37.91111234500627),
      pitch: Cesium.Math.toRadians(-72.7224896880686),
      roll: Cesium.Math.toRadians(0.3490537331864264)
    }
  })

  const geoJson = Cesium.GeoJsonDataSource.load('/Xihuqu.json')
  geoJson.then(dataSource => {
    viewer.dataSources.add(dataSource)
    const polygons = dataSource.entities.values.filter(e => e.polygon)
    viewer.entities.add({
      polygon: {
        history: new Cesium.PolygonHierarchy(
          Cesium.Cartesian3.fromDegreesArray([-180,-90, -180,90, 180,90, 180,-90]),
          polygons.map(e => e.polygon.hierarchy.getValue().positions)
        )
      },
      material: Cesium.Color.fromCssColorString('rgba(255, 0, 0, 0.5)'),
      height: 0
    })
  })
})

/**
 * 组件选项
 */
defineOptions({
  name: 'MapArea'
})
</script>
