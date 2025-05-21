<!------------------------------------------------------
 ¦ 弹窗
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-20 16:34:17
 ¦ Version: 1.0
 ¦ FilePath: src\views\Interactive\Dialog\index.vue
 ¦----------------------------------------------------->

<template>
  <div ref="cesiumContainerRef" class="w-full h-full"></div>
  <div v-show="dialogVisible" ref="dialogRef" class="w-[200px] h-[100px] absolute bg-white left-[0] top-[0] z-10">
    <button @click="closeDialog">close</button>
  </div>
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
 * 弹窗容器
 */
const dialogRef = ref(null)

/**
 * 弹窗是否显示
 */
const dialogVisible = ref(false)

/**
 * cesium 视图
 */
let viewer = null

/**
 * 关闭弹窗
 */
function closeDialog() {
  dialogVisible.value = false
}

/**
 * 更新弹窗位置
 * @param {*} entity - 实体
 */
function updateDialogPosition(entity) {
  const position = entity.position.getValue(viewer.clock.currentTime)
  const pos = Cesium.SceneTransforms.worldToWindowCoordinates(
    viewer.scene, position
  )

  if (!pos) {
    closeDialog()
  }

  const { left, top } = viewer.scene.canvas.getBoundingClientRect()

  dialogRef.value.style.left = `${pos.x + left}px`
  dialogRef.value.style.top = `${pos.y + top - dialogRef.value.offsetHeight / 2}px`
}

onMounted(() => {
  // 创建cesium视图
  viewer = new Cesium.Viewer(cesiumContainerRef.value, cesiumOptions)
  // 标准化cesium
  normCesium(viewer)
  // 使用高德底图
  setCesiumImageryLayer(viewer, 'amap')
  // 设置视图相机
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(120.13849999, 30.24658888, 2611.7967072047672),
    orientation: {
      heading: Cesium.Math.toRadians(37.91111234500627),
      pitch: Cesium.Math.toRadians(-72.7224896880686),
      roll: Cesium.Math.toRadians(0.3490537331864264)
    }
  })

  const entity = viewer.entities.add({
    id: 'entity',
    position: Cesium.Cartesian3.fromDegrees(120.145161, 30.250765),
    point: {
      color: Cesium.Color.fromCssColorString('#ff0000'),
      pixelSize: 30
    }
  })

  viewer.screenSpaceEventHandler.setInputAction(event => {
    const picked = viewer.scene.pick(event.position)
    if (!picked || !picked.id) {
      return
    }
    updateDialogPosition(entity)
    dialogVisible.value = true
  }, Cesium.ScreenSpaceEventType.LEFT_CLICK)

  viewer.scene.postRender.addEventListener(() => {
    if (!dialogVisible.value) {
      return
    }
    updateDialogPosition(entity)
  })
})

/**
 * 组件选项
 */
defineOptions({
  name: 'InteractiveDialog'
})
</script>
