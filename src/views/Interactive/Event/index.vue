<!------------------------------------------------------
 ¦ 事件
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-20 15:30:14
 ¦ Version: 1.0
 ¦ FilePath: src\views\Interactive\Event\index.vue
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

  const rectEntity = viewer.entities.add({
    rectangle: {
      coordinates: Cesium.Rectangle.fromDegrees(120.141471, 30.247973, 120.145865, 30.258123),
      material: Cesium.Color.fromCssColorString('rgba(255, 0, 0, 0.5)')
    }
  })

  const handler = new Cesium.ScreenSpaceEventHandler(viewer.scene.canvas)

  // 监听左键单击
  handler.setInputAction(event => {
    console.log('左键点击:', event)
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

  // 监听右键单击
  handler.setInputAction(event => {
    console.log('右键单击:', event)
  }, Cesium.ScreenSpaceEventType.RIGHT_CLICK)

  // 监听鼠标移动
  // handler.setInputAction(event => {
  //   console.log('鼠标移动:', event)
  // }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)

  // 左键双击
  handler.setInputAction(event => {
    console.log('左键双击:', event)
  }, Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK)

  // 选中entity
  viewer.selectedEntityChanged.addEventListener(entity => {
    if(entity) {
      console.log('选中Entity:', entity)
    }
  })

  // 监听实体属性发送变化
  // rectEntity.position.definitionChanged.addEventListener((entity, propertyName, newValue, oldValue) => {
  //   console.log('实体属性发生变化:', entity, propertyName, newValue, oldValue)
  // })

  // 地图事件推进每一帧时触发
  // viewer.clock.onTick.addEventListener(clock => {
  //   console.log(clock)
  // })

  // 相机开始移动
  viewer.camera.moveStart.addEventListener(event => {
    console.log('相机开始移动', event)
  })

  // 相机参数变动
  viewer.camera.changed.addEventListener(event => {
    console.log('相机参数变动', event)
  })

  // 相机结束移动
  viewer.camera.moveEnd.addEventListener(event => {
    console.log('相机结束移动', event)
  })
})

/**
 * 组件选项
 */
defineOptions({
  name: 'InteractiveEvent'
})
</script>
