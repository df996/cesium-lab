 <!------------------------------------------------------
 ¦ 加载天地图
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-16 12:05:52
 ¦ Version: 1.0
 ¦ FilePath: src\views\Basic\Tianditu\index.vue
 ¦----------------------------------------------------->

<template>
  <div ref="cesiumContainerRef"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as Cesium from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { cesiumOptions } from '../../../configs/index.js'
import { normCesium } from '../../../utils/index.js'

/**
 * 天地图应用key
 */
const tiandituKey = '你的key'

/**
 * cesium 容器元素引用
 */
const cesiumContainerRef = ref(null)

/**
 * cesium 视图
 */
let viewer = null

/**
 * 设置天地图影像瓦片
 */
function setTiandituTile() {
  const tiandituTile = new Cesium.WebMapTileServiceImageryProvider({
    url: 'http://{s}.tianditu.gov.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=' + tiandituKey,
    subdomains: ['t0', 't1', 't2', 't3', 't4', 't5', 't6', 't7'],
    layer: 'img',
    style: 'default',
    format: 'tiles',
    tileMatrixSetID: 'w',
    minimumLevel: 1,
    maximumLevel: 18,
    show: true
  })
  viewer.imageryLayers.addImageryProvider(tiandituTile)
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
  // 设置天地图影像图
  setTiandituTile()
})

/**
 * 组件选项
 */
defineOptions({
  name: 'BasicTianditu'
})
</script>
