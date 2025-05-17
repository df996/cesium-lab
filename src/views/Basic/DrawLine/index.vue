<!------------------------------------------------------
 ¦ 绘制线条示例
 ¦ 在Cesium中绘制线条一般使用PolylineColorAppearance或PolylineMaterialAppearance
 ¦ PolylineColorAppearance直接绘制包含颜色的简单线条
 ¦ PolylineMaterialAppearance绘制包含材质的线条如发光，纹理，渐变等
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-17 06:53:07
 ¦ Version: 1.0
 ¦ FilePath: src\views\Basic\DrawLine\index.vue
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

/**
 * 使用PolylineColorAppearance绘制线条
 */
function drawLine1() {
  const geometryInstance = new Cesium.GeometryInstance({
    id: 'lineGeometry1',
    geometry: new Cesium.PolylineGeometry({
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        120.136284, 30.256154, 0,
        120.147354, 30.248705, 0
      ]),
      width: 10.0
    }),
    attributes: {
      color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString('rgba(0, 255, 0, 0.5)'))
    }
  })

  // 创建图元
  const primitive = new Cesium.Primitive({
    geometryInstances: geometryInstance,
    appearance: new Cesium.PolylineColorAppearance()
  })

  // 添加图元
  viewer.scene.primitives.add(primitive)
}

/**
 * 使用PolylineMaterialAppearance绘制线条
 */
function drawLine2() {
  // 创建折线几何体实例
  const geometryInstance = new Cesium.GeometryInstance({
    id: 'lineGeometry2',
    geometry: new Cesium.PolylineGeometry({
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        120.135284, 30.255154, 0,
        120.146354, 30.247705, 0
      ]),
      width: 10.0
    })
  })

  // 创建图元
  const primitive = new Cesium.Primitive({
    geometryInstances: geometryInstance,
    appearance: new Cesium.PolylineMaterialAppearance({
      material: new Cesium.Material({
        fabric: {
          type: 'Color',
          uniforms: { color: Cesium.Color.fromCssColorString('#00ff00') }
        }
      })
    })
  })

  // 添加图元
  viewer.scene.primitives.add(primitive)
}

/**
 * 绘制外发光线条
 */
function drawLine3() {
  // 材质
  const material = new Cesium.Material({
    fabric: {
      type: 'GlowLine',
      uniforms: {
        // 中心颜色
        coreColor: Cesium.Color.fromCssColorString('rgba(255, 255, 255, 1)'),
        // 发光颜色
        glowColor: Cesium.Color.fromCssColorString('rgba(255, 0, 0, 0.2)'),
        glowWidth: 1.2
      },
      source: `
        uniform vec4 coreColor;
        uniform vec4 glowColor;
        uniform float glowWidth;
        czm_material czm_getMaterial(czm_materialInput materialInput) {
          czm_material material = czm_getDefaultMaterial(materialInput);
          float t = materialInput.st.t;
          // 计算到最近边缘的距离（0到0.5之间）
          float distanceToEdge = min(t, 1.0 - t) * 2.0;
          // 计算发光强度（边缘到中心渐变）
          float glowFactor = smoothstep(glowWidth, 0.0, distanceToEdge);
          // 混合颜色
          vec4 color = mix(coreColor, glowColor, glowFactor);
          material.diffuse = color.rgb;
          material.alpha = color.a;
          return material;
        }
      `
    }
  })

    // 创建折线几何体实例
  const geometryInstance = new Cesium.GeometryInstance({
    id: 'lineGeometry2',
    geometry: new Cesium.PolylineGeometry({
      positions: Cesium.Cartesian3.fromDegreesArrayHeights([
        120.134284, 30.254154, 0,
        120.146354, 30.246705, 0
      ]),
      width: 10.0,
      vertexFormat: Cesium.PolylineMaterialAppearance.VERTEX_FORMAT
    })
  })

  // 创建图元
  const primitive = new Cesium.Primitive({
    geometryInstances: geometryInstance,
    appearance: new Cesium.PolylineMaterialAppearance({
      material,
      // 开启透明
      translucent: true
    })
  })

  // 添加图元
  viewer.scene.primitives.add(primitive)
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

  drawLine1()
  drawLine2()
  drawLine3()
})

/**
 * 组件选项
 */
defineOptions({
  name: 'BasicDrawLine'
})
</script>
