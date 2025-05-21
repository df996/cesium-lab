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
  if (!viewer || !viewer.scene) {
    return
  }

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

/**
 * 图层类型
 * @typedef {'amap' | 'baidu' | 'tencent' | 'tianditu'} ImageryLayerType
 */

/**
 * 设置地图图层
 * @param {@import('cesium').Viewer} - Cesium视图对象
 * @param {ImageryLayerType} [imageryLayerType='amap'] - 图层类型
 * @param {string} [key=null] - 第三方的app key(天地图需要)
 */
export function setCesiumImageryLayer(viewer, imageryLayerType = 'amap', key = null) {
  if (!viewer || !viewer.imageryLayers ||
      !viewer.imageryLayers.removeAll || !viewer.imageryLayers.addImageryProvider) {
    return
  }

  viewer.imageryLayers.removeAll()

  const options = {
    minimumLevel: 3,
    maximumLevel: 18,
    tilingScheme: new Cesium.WebMercatorTilingScheme(),
    tileWidth: 256,
    tileHeight: 256
  }
  let imageryLayer

  switch(imageryLayerType) {
    case 'amap':
      imageryLayer = new Cesium.UrlTemplateImageryProvider({
        ...options,
        url:'https://webst0{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}',
        subdomains: ['1', '2', '3', '4'],
      })
      break
    case 'baidu':
      imageryLayer = new Cesium.UrlTemplateImageryProvider({
        ...options,
        url: 'https://shangetu{s}.map.bdimg.com/it/u=x={x};y={y};z={z};v=009;type=sate&fm=46&udt=20231107',
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        tilingScheme: new Cesium.WebMercatorTilingScheme({
          // 百度地图投影坐标需要处理
          project: (position) => new Cesium.Cartesian2(
            position.longitude * 20037508.34 / 180,
            Math.log(Math.tan((90 + position.latitude) * Math.PI / 360)) * 20037508.34 / Math.PI
          )
        })
      })
      break
    case 'tencent':
      imageryLayer = new Cesium.UrlTemplateImageryProvider({
        ...options,
        url: 'https://rt{s}.map.gtimg.com/realtimerender?z={z}&x={x}&y={y}&type=3&style=0&v=1.3',
        subdomains: ['0', '1', '2']
      })
      break
    case 'tianditu':
      imageryLayer = new Cesium.UrlTemplateImageryProvider({
        ...options,
        url: `https://t{s}.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=${key}`,
        subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],  // 天地图子域
      })
      break
    default: return
  }

  viewer.imageryLayers.addImageryProvider(imageryLayer)
}
