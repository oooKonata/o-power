import AMapLoader from '@amap/amap-jsapi-loader'
import { onLoad } from '@dcloudio/uni-app'

window._AMapSecurityConfig = {
  securityJsCode: 'e5a1fc65e4e87debf400098d524e12d6',
}

let AMap

(async () => {
  await AMapLoader.load({
    key: '39371e6e81984c16294bb4aea1351304',
    version: '2.0',
    plugins: ['AMap.Geolocation'],
  })
    .then(_AMap => {
      AMap = _AMap
      console.log('amap', AMap)
    })
})()

const getLocation = async () => {
  let location = {
    longitude: '',
    latitude: '',
    provinceCode: '',
    province: '',
    cityCode: '',
    city: '',
    adCode: ''
  }

  if (AMap) {
    const geolocation = new AMap.Geolocation({
      // 逆地理编码配置
      needAddress: true
    })
    // 获取逆编码后地址信息
    await geolocation.getCurrentPosition((status, result) => {
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
          adCode: adcode
        }
        console.log('111', location)
        return console.log('123')
      } else {
        console.log('解析定位失败', result.message)
      }
    })
  }
}

export { getLocation }