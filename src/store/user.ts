import { User } from '@/api/types/user'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    const storeToken = ref('')
    const storeUserInfo = ref<User>()
    const storeIsLogin = computed(() => !!storeToken.value)

    const storeVoucherNum = ref(0)
    const storeCouponNum = ref(0)

    const setUserInfo = (val: User) => {
      storeUserInfo.value = val
    }

    const clearUserInfo = () => {
      storeToken.value = ''
      storeUserInfo.value = undefined
      storeVoucherNum.value = 0
      storeCouponNum.value = 0
    }

    return {
      storeToken,
      storeUserInfo,
      storeIsLogin,
      storeVoucherNum,
      storeCouponNum,
      setUserInfo,
      clearUserInfo,
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
