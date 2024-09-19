// @ts-expect-error
export { amap } from './amap'

// #ifdef H5
// @ts-expect-error
export { getLocationH5, getWeatherH5 } from './amap-loader'
// #endif

// #ifdef MP-WEIXIN
// @ts-expect-error
export { getLocationWX } from './amap/amap-wx.js'
// #endif
