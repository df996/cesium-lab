/*------------------------------------------------------
¦ Cesium 常用方法封装
¦
¦ Author: 大风
¦ Email: 1236192@qq.com
¦ Date: 2025-05-16 12:35:48
¦ Version: 1.0
¦ FilePath: src\utils\cesium.js
¦------------------------------------------------------*/
import * as Cesium from 'cesium'

/**
 * 标准化cesium
 * @param {import('cesium').Viewer} viewer - Cesium 视图对象
 */
export function normCesium(viewer) {
  // 关闭星空
  viewer.scene.skyBox.destroy()
  viewer.scene.skyBox = undefined
  // 关闭太阳
  viewer.scene.sun.destroy()
  viewer.scene.sun = undefined
  // 关闭月亮
  viewer.scene.moon.destroy()
  viewer.scene.moon = undefined
  // 关闭大气
  viewer.scene.skyAtmosphere.destroy()
  viewer.scene.skyAtmosphere = undefined
  // 关闭"雾"
  viewer.scene.fog.enabled = false
  // 关闭照明
  viewer.scene.globe.enableLighting = false
  // 设置背景
  viewer.scene.backgroundColor = new Cesium.Color(0, 0, 0, 0)
  // 设置DPI
  viewer.resolutionScale = window.devicePixelRatio || 1
  // 允许相机进入地下
  viewer.scene.screenSpaceCameraController.enableCollisionDetection = false
  // 控制全局半透明性的属性。frontFaceAlphaByDistance表示标量值在视角空间中的近距离和远距离处的下限和上限。
  viewer.scene.globe.translucency.frontFaceAlphaByDistance = new Cesium.NearFarScalar(
    //摄像机范围的下限。
    400.0,
    //摄像机范围下限的值。
    0.0,
    //摄像机范围的上限
    800.0,
    //摄像机范围上限的值
    1.0
  )
}
