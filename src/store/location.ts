import type { City, Location } from '@/api/types/common'
import { getLocationWX } from '@/libs'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useLocationStore = defineStore(
  'XHDL-LOCATION',
  () => {
    const storeLocation = ref<Location>()
    const hasLocation = computed(() => !!storeLocation.value)

    getLocationWX()

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
