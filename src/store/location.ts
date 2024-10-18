import type { Location } from '@/api/types/common'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// #ifdef MP-WEIXIN
import { getLocationWX } from '@/libs'
// #endif

// #ifdef H5
import { getLocationH5 } from '@/libs'
// #endif

export const useLocationStore = defineStore(
  'XHDL-LOCATION',
  () => {
    const storeLocation = ref<Location>()
    const hasLocation = computed(() => !!storeLocation.value)

    const getLocation = async () => {
      let res = ref<Location>()

      // #ifdef MP-WEIXIN
      res.value = await getLocationWX()
      // #endif

      // #ifdef H5
      res.value = await getLocationH5()
      // #endif

      if (res) {
        storeLocation.value = res.value
      } else {
        uni.showToast({ title: '定位异常，将使用默认定位', icon: 'none' })
        storeLocation.value = {
          longitude: '114.358818',
          latitude: '30.579854',
          provinceCode: '420000',
          province: '湖北省',
          cityCode: '420100',
          city: '武汉市',
          adCode: '420100',
        }
      }
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
