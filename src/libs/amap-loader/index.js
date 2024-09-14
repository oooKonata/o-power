import AMapLoader from '@amap/amap-jsapi-loader'
import { ref } from 'vue'

window._AMapSecurityConfig = {
  securityJsCode: 'e5a1fc65e4e87debf400098d524e12d6',
}

let AMap

async function init() {
  AMap = await AMapLoader.load({
    key: '39371e6e81984c16294bb4aea1351304',
    version: '2.0',
    plugins: ['AMap.Geolocation', 'AMap.Weather'],
  })
}

//

async function wrapper(fun) {
  if (AMap) {
    return fun()
  } else {
    await init()
    return fun()
  }
}

const getLocation2 = () => {
  return wrapper(() => {
    11111111
  })
}
const getLocation = () => {
  return wrapper(async () => {
    let { promise, resolve, reject } = Promise.withResolvers()

    const geolocation = new AMap.Geolocation({
      // 逆地理编码配置
      needAddress: true,
    })
    // 获取逆编码后地址信息
    geolocation.getCurrentPosition((status, result) => {
      let location = {
        longitude: '',
        latitude: '',
        provinceCode: '',
        province: '',
        cityCode: '',
        city: '',
        adCode: '',
      }
      if (status === 'complete') {
        const { province, citycode, city, adcode } = result.addressComponent
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
//

export { getLocation }
