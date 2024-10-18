import { defineStore } from 'pinia'
import { ref } from 'vue'

import { getWeatherH5 } from '@/libs'
const weatherArr = [
  { tag: '晴', title: '晴朗', icon: '/weather/sunny.png' },
  { tag: '云', title: '多云', icon: '/weather/cloudy.png' },
  { tag: '阴', title: '阴天', icon: '/weather/overcast.png' },
  { tag: '雾', title: '大雾', icon: '/weather/fog.png' },
  { tag: '霾', title: '雾霾', icon: '/weather/haze.png' },
  { tag: '雨', title: '大雨', icon: '/weather/rain.png' },
  { tag: '雷', title: '雷雨', icon: '/weather/lightning.png' },
  { tag: '雪', title: '下雪', icon: '/weather/snow.png' },
  { tag: '风', title: '刮风', icon: '/weather/wind.png' },
  // { tag: '未知', title: '未知', icon: '/weather/unkonwn.png' },
]

export const useWeatherStore = defineStore(
  'XHDL-WEATHER',
  () => {
    const storeWeather = ref<{
      tag: string
      title: string
      icon: string
    }>()
    const getWeather = async () => {
      const res = ref()
      res.value = await getWeatherH5()
      let matchResult = weatherArr.find(item => res.value.weather.includes(item.tag))
      if (matchResult) {
        storeWeather.value = matchResult
      } else {
        storeWeather.value = { tag: '未知', title: '未知', icon: '/weather/unkonwn.png' }
      }
    }
    return {
      storeWeather,
      getWeather,
    }
  },
  {
    persist: {
      storage: {
        getItem: key => uni.getStorageSync(key),
        setItem: (key: string, value: any) => uni.setStorageSync(key, value),
      },
    },
  }
)
