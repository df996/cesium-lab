<!------------------------------------------------------
 ¦ 标记点
 ¦
 ¦ Author: 大风
 ¦ Email: 1236192@qq.com
 ¦ Date: 2025-05-19 15:41:48
 ¦ Version: 1.0
 ¦ FilePath: src\views\Basic\Marker\index.vue
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

function drawMarker() {
  const imgSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACPTkDJAAAEZ0lEQVRYCe1WXWxURRT+5m53oVIoRVBSU22hCyKBEI2+KEiMPBk1dHexxIitiZjgg4Gk8qAmxScbEhJC4n8KCRBslvoi/pAmNiT+VH0gpfpw790KKbEQRNqqK7XtzvjN3F7ttrv37oqJDzrZvefe8/vNmXNmBvh//MsZEH8rvlICSfc+QMQh1AL6+AHRqj6cqL1arr/yAKRUBMrdBYW9UOq2WcGmIHAKVqQN6cbMLFnRz9IBPPPjQoyNnGLgTfSmg/VAWV/BUllI1QAhHjeghBjn+w6cjKeLRp0hKA1Au7Iw4PZ6wcWXiEZa0LXSmeEH0NmRmRcA+RqXxuLvUZxs/DhPp8BHaQAS7m4oeYCz/gI3L9yCt2t/K+DLY6XsrciJbuoOo7pmDTqX/VJUl4JwAHr259wL1KyFZd355/omnVbWwg76WAyoTzHf2ofj8Z9NsIRzmNlqoc1OdK9+JwiAFSQ0soHv72aAOr6f/iu43c5172SQzfxvIJA9GFdnsFNFjU1F5HXPr3jMo8Wf4QCUXGPMhfrG0NSVKki8xNldQxQbsChWQ/4nBshPmSeMjlzRz0KUBN5ovgMe4QCE9HQkfjd+rLFVpBX896BrdT+ONIwy2LteDLnW0BrmROnl1SCCRwkAIleMC2E1GCqtQTM7JTaj+Xw9qz9G/nZPR3idMeISCDcrpYYMP+ARDmCe+pz2U+yCR9CuKpBeOcbvAwxwKyYnByHdMQZKcL42qqInTCyJpKHC6jE04BEOQFe23uHALvg2s9X4Whffyz7fw/dzDH6ZGelkh2zkcowjdbGSvOdoM4HKaUABAEoTpdwH0WQrJJzvzIYTZJVw2qZ1Dwep+bLwDGjNdPwMC4pbr7oLKtPqG8+h24eXkqc7ZAJW7NU58gKM0gBow6hq84pPduCpzC0FfAETv+4nyGouzyGk688X1JnF1O1UeDRn6ljIlUYoY1fRVdePhH2Q7bUbWXmQfK/yfetU5iHkci3M1EUsWrzPZ4fRuRlI2s1oci5jIjeEySnb/HPXdxlHN1W/QnqBHdCMlOtVuhbok1LmvL1AiOfD9n9t4o98AEl7I2d9nJeMJVzHXqb8I/OH5RqDo8uzrPZWsxRSvoWU7d0JRkd0ZrhP0LY7/oHvvBQq8pQSzhGu4dMMsi3wPE86HTwLXqTtZ9R9E1Ie81IfXW92xjynwR/5GQCWGfWwHWxJ/GUG7KPuAwRylBnJ8WLyZLnBdaz8DDQ5nJXqoMOzlO2n+JpWKjzk7ZS/wYxFSD+kzaHCetNcy8pi/oKz0Ms4Y+QD0Pu6dHW/b5qh80++8tIa2Yb3G3t9p/kANNdcQAZTPMju4cy8NvS1b4QqtZzmCWb4EtavqkO7d1LOBXAjQcJsm+yvqXIvIhV38FAb0urFN6JizhLOw2zV+4uJi/KF1AXO25MYxdoVw0h7muUDENjCo1m3YHlDUV2I64iIZ5n+Kd+4fABKvEdHA76Dkqkls5gX68Ox+ksl2/wnFP8APIt35mN+LH4AAAAASUVORK5CYII='
  const marker = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(120.146890, 30.253658),
    billboard: {
      image: imgSrc,
      width: 32,
      height: 32,
      scale: 1.0,
      // 图标底部对准点
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM
    }
  })
  viewer.zoomTo(marker)
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

  drawMarker()
})

/**
 * 组件选项
 */
defineOptions({
  name: 'BasicMarker'
})
</script>
