<script setup lang="ts">
  import OSwiper from '@/components/o-swiper/o-swiper.vue'
  import OTab from '@/components/o-tab/o-tab.vue'
  import UserInfo from './components/UserInfo.vue'
  import QuickLink from './components/QuickLink.vue'
  import NearbyService from './components/NearbyService.vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { storeToRefs } from 'pinia'
  import { useUserStore } from '@/store/user'
  import { getUserInfo } from '@/api/user'
  import { useLocationStore } from '@/store/location'
  import Location from './components/Location.vue'
  import { getbannerList } from '@/api/common'
  import { useCacheStore } from '@/store/cache'
  import BannerSwiper from './components/BannerSwiper.vue'
  import { BANNER_TYPE } from '@/enums'

  const { storeUserInfo, storeIsLogin } = storeToRefs(useUserStore())
  const { storeBannerList } = storeToRefs(useCacheStore())
  const { getLocation } = useLocationStore()

  onLoad(async () => {
    // 获取用户信息
    if (storeIsLogin.value) {
      const data = await getUserInfo()
      storeUserInfo.value = data
    }
    // 获取banner列表
    getbannerList().then(res => {
      storeBannerList.value = res
    })

    // getLocation()
  })
</script>

<template>
  <view class="page">
    <Location />
    <BannerSwiper size="big" :type="BANNER_TYPE.HOME_TOP" />
    <UserInfo />
    <QuickLink />
    <BannerSwiper size="normal" :type="BANNER_TYPE.OIL_HOME" />
    <NearbyService />
    <OTab :current="0" />
  </view>
</template>

<style scoped lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
