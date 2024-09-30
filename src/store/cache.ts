import type { Banner } from '@/api/types/common'
import type { BANNER_TYPE } from '@/enums'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCacheStore = defineStore(
  'XHDL-CACHE',
  () => {
    const storeBannerList = ref<{ [key in BANNER_TYPE]: Banner[] }>()

    const { safeAreaInsets } = uni.getSystemInfoSync()

    return {
      storeBannerList,
      safeAreaInsets,
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
