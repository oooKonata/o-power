import { amap } from './index';

const amapPlugin = new amap.AMapWX({
  key: 'ebf98d534d7921d5a5b02782107b4808'
})

const getLocationWX = () => {
  return new Promise((resolve, reject) => {
    amapPlugin.getRegeo({
      success: (data) => {
        resolve(data)
      },
      fail: (info) => {
        console.log('获取定位失败', info)
        reject(info)
      },
    })
  })
}

export { getLocationWX }