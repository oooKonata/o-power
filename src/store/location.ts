import type { City, Location } from '@/api/types/common'
import { amap } from '@/libs'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const amapPlugin = new amap.AMapWX({
  key: '49df2ce5b90af9afa71c747e38c3095a',
})

console.log(amapPlugin, '000')

export const useLocationStore = defineStore(
  'XHDL-LOCATION',
  () => {
    const storeLocation = ref<Location>()
    const hasLocation = computed(() => !!storeLocation.value)

    const getLocation = () => {
      console.log('111')
      amapPlugin.getRegeo({
        success: async (data: any) => {
          console.log(data, '222')
        },
        fail: (info: any) => {
          console.log(info, '333')
        },
      })
    }

    return {
      storeLocation,
      hasLocation,
      getLocation,
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
