<!------------------------------------------------------
 ¦ 绘制墙
 ¦ 注意: viewer.entities 的 wall.material 只能直接用 Cesium.Color、
 ¦ Cesium.ImageMaterialProperty 或 Cesium.MaterialProperty 子类，
 ¦ 不能直接用 new Cesium.Material({...}) 生成的对象。
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-19 12:58:45
 ¦ Version: 1.0
 ¦ FilePath: src\views\Basic\DrawWall\index.vue
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

// 自定义发光墙材质
Cesium.Material._materialCache.addMaterial('GlowWall', {
  fabric: {
    type: 'GlowWall',
    uniforms: {
      color: new Cesium.Color(1.0, 0.0, 0.0, 1.0)
    },
    source: `
      czm_material czm_getMaterial(czm_materialInput materialInput) {
        czm_material material = czm_getDefaultMaterial(materialInput);

        float gradient = 1.0 - materialInput.st.t; // t=0底部为1，t=1顶部为0
        // 可调节渐变锐度，越大越快变透明
        gradient = pow(gradient, 3.0);

        vec4 baseColor = color;
        material.diffuse = baseColor.rgb;
        material.alpha = baseColor.a * gradient;

        return material;
      }
    `
  },
  translucent: function () {
    return true;
  }
})

function drawWall() {
  const positions = Cesium.Cartesian3.fromDegreesArray([
    120.1333, 30.2383,
    120.1483, 30.2383,
    120.1483, 30.2467,
    120.1333, 30.2467,
    120.1333, 30.2383
  ])

  const wallGeometry = new Cesium.WallGeometry({
    positions,
    minimumHeights: [0, 0, 0, 0, 0],
    maximumHeights: [100, 100, 100, 100, 100]
  })

  const wallInstance = new Cesium.GeometryInstance({
    id: 'glowWall',
    geometry: wallGeometry
  })

  const wallPrimitive = new Cesium.Primitive({
    geometryInstances: wallInstance,
    appearance: new Cesium.MaterialAppearance({
      material: Cesium.Material.fromType('GlowWall', {
        color: new Cesium.Color(1.0, 0.0, 0.0, 1.0)
      }),
      translucent: true,
      closed: false
    })
  })

  viewer.scene.primitives.add(wallPrimitive)

  const bs = Cesium.BoundingSphere.fromPoints(positions)
  viewer.camera.flyToBoundingSphere(bs, {
    duration: 1.5
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

  drawWall()
})

/**
 * 组件选项
 */
defineOptions({
  name: 'BasicDrawWall'
})
</script>
