import { getCityList } from '@/api/common'
import type { City } from '@/api/types/common'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useStoreLocation = defineStore(
  'XHDL-LOCATION',
  () => {
    const storeLocation = ref<Location>()
    const hasLocation = computed(() => !!storeLocation.value)

    return {
      storeLocation,
      hasLocation,
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
