import AMapLoader from '@amap/amap-jsapi-loader'

window._AMapSecurityConfig = {
  securityJsCode: 'e5a1fc65e4e87debf400098d524e12d6',
}

let location = {
  longitude: '',
  latitude: '',
  provinceCode: '',
  province: '',
  cityCode: '',
  city: '',
  adCode: ''
}

let AMap

AMapLoader.load({
  key: '39371e6e81984c16294bb4aea1351304',
  version: '2.0',
  plugins: ['AMap.Geolocation'],
})
  .then(_AMap => {
    // const geolocation = new AMap.Geolocation({
    //   // 逆地理编码配置
    //   needAddress: true
    AMap = _AMap
  })
  .catch(e => {
    console.log('AMap初始化失败～', e)
  })

geolocation.getCurrentPosition((status, result) => {
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
    return location
  } else {
    console.log('解析定位失败', result.message)
  }
})

export { getLocation }


// const getPosition = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {

//         let position = [pos.coords.longitude, pos.coords.latitude]
//         console.log('🍌～～～', position)

//         // AMap.convertFrom(position, 'gcj-02', (status, result) => {
//         //   if (result.info === 'ok') {
//         //     lnglat = result.locations[0]
//         //     console.log('🍎～～～~~', lnglat)
//         //   }
//         // })

//         geocoder.getAddress(position, (status, result) => {
//           if (status === 'complete' && result.regeocode) {
//             location = result.regeocode.addressComponent
//             console.log('🍌～～～', location)
//           }
//         })
//       },
//       (err) => { console.log('err:' + err) }
//     )
//   }
// }
