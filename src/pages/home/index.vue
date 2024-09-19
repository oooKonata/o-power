<script setup lang="ts">
  import CustomNav from '@/components/CustomNav/CustomNav.vue'
  import CustomSwiper from '@/components/CustomSwiper/CustomSwiper.vue'
  import UserInfo from './components/UserInfo.vue'
  import QuickLink from './components/QuickLink.vue'
  import NearbyService from './components/NearbyService.vue'
  import CustomTab from '@/components/CustomTab/CustomTab.vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { storeToRefs } from 'pinia'
  import { useUserStore } from '@/store/user'
  import { getUserInfo } from '@/api/user'
  import { useLocationStore } from '@/store/location'

  const { storeUserInfo, storeIsLogin } = storeToRefs(useUserStore())
  const { getLocation } = useLocationStore()

  onLoad(async () => {
    if (storeIsLogin.value) {
      const data = await getUserInfo()
      storeUserInfo.value = data
    }
    getLocation()
  })
</script>

<template>
  <view class="page">
    <CustomNav position />
    <CustomSwiper />
    <UserInfo />
    <QuickLink />
    <NearbyService />
    <CustomTab :current="0" />
  </view>
</template>

<style scoped lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
