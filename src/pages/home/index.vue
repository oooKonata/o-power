<script setup lang="ts">
  import CustomNav from '@/components/CustomNav/CustomNav.vue'
  import CustomSwiper from '@/components/CustomSwiper/CustomSwiper.vue'
  import UserInfo from './components/UserInfo.vue'
  import QuickLink from './components/QuickLink.vue'
  import NearbyService from './components/NearbyService.vue'
  import CustomTab from '@/components/CustomTab/CustomTab.vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { getbannerList } from '@/api/marketing'

  onLoad(async () => {
    const bannerList = await getbannerList({ type: 1 })
    console.log(bannerList, '~~~')
  })
</script>

<template>
  <view class="page">
    <CustomNav position />
    <CustomSwiper />
    <UserInfo />
    <QuickLink />
    <NearbyService />
    <CustomTab />
  </view>
</template>

<style scoped lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
