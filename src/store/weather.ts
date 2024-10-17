import { defineStore } from 'pinia'

export const useWeatherStore = defineStore(
  'XHDL-WEATHER',
  () => {
    return {}
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
