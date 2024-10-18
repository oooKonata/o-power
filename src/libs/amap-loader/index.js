import AMapLoader from '@amap/amap-jsapi-loader'
import { watch } from 'vue'

window._AMapSecurityConfig = {
  securityJsCode: 'e5a1fc65e4e87debf400098d524e12d6',
}

let AMap

let location = {
  longitude: '',
  latitude: '',
  provinceCode: '',
  province: '',
  cityCode: '',
  city: '',
  adCode: '',
}

// 初始化AMap
async function init() {
  AMap = await AMapLoader.load({
    key: '39371e6e81984c16294bb4aea1351304',
    version: '2.0',
    plugins: ['AMap.Geolocation', 'AMap.Weather'],
  })
}

// 确保能获取AMap
async function wrapper(fn) {
  if (AMap) {
    return fn()
  } else {
    await init()
    return fn()
  }
}

// 获取定位信息
const getLocationH5 = () => {
  return wrapper(async () => {
    let { promise, resolve, reject } = Promise.withResolvers()

    const geolocation = new AMap.Geolocation({
      // 逆地理编码配置
      needAddress: true,
    })
    // 获取逆编码后地址信息
    geolocation.getCurrentPosition((status, result) => {
      if (status === 'complete') {
        const { province, citycode, city, adcode } = result.addressComponent
        console.log(result.addressComponent)
        const { lng, lat } = result.position
        location = {
          longitude: lng,
          latitude: lat,
          provinceCode: adcode.slice(0, 2) + '0000',
          province: province,
          cityCode: citycode,
          city: city,
          adCode: adcode,
        }
        resolve(location)
      } else {
        reject(result.message)
      }
    })
    return promise
  })
}

// 获取天气信息
const getWeatherH5 = () => {
  return new Promise((resolve, reject) => {
    wrapper(async () => {
      const getweather = new AMap.Weather()

      let data = JSON.parse(uni.getStorageSync('XHDL-LOCATION'))

      if (!data) {
        await getLocationH5()
        getweather.getLive(location.adCode, (err, data) => {
          if (!err) {
            resolve(data)
          } else {
            reject(err)
          }
        })
      } else {
        getweather.getLive(data.storeLocation.adCode, (err, data) => {
          if (!err) {
            resolve(data)
          } else {
            reject(err)
          }
        })
      }
    })
  })
}

export { getLocationH5, getWeatherH5 }
