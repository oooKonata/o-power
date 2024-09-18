import { amap } from './index';

let location = {
  longitude: '',
  latitude: '',
  provinceCode: '',
  province: '',
  cityCode: '',
  city: '',
  adCode: '',
}

const amapPlugin = new amap.AMapWX({
  key: 'ebf98d534d7921d5a5b02782107b4808'
})

const getLocationWX = () => {
  return new Promise((resolve, reject) => {
    amapPlugin.getRegeo({
      success: data => {
        const result = data[0]
        const { province, citycode, city, adcode } = result.regeocodeData.addressComponent
        location = {
          longitude: result.longitude,
          latitude: result.latitude,
          provinceCode: adcode.slice(0, 2) + '0000',
          province: province,
          cityCode: citycode,
          city: city,
          adCode: adcode,
        }
        resolve(location)
      },
      fail: info => {
        console.log('获取定位失败', info)
        reject(info)
      },
    })
  })
}

export { getLocationWX }