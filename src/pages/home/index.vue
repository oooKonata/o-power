<script setup lang="ts">
  import ONav from '@/components/o-nav/o-nav.vue'
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

  const { storeUserInfo, storeIsLogin } = storeToRefs(useUserStore())
  const { getLocation } = useLocationStore()

  onLoad(async () => {
    if (storeIsLogin.value) {
      const data = await getUserInfo()
      storeUserInfo.value = data
    }
    // getLocation()
  })
</script>

<template>
  <view class="page">
    <Location />
    <OSwiper />
    <UserInfo />
    <QuickLink />
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
