<script setup lang="ts">
  import CustomNav from '@/components/CustomNav/CustomNav.vue'
  import CustomSwiper from '@/components/CustomSwiper/CustomSwiper.vue'
  import UserInfo from './components/UserInfo.vue'
  import QuickLink from './components/QuickLink.vue'
  import NearbyService from './components/NearbyService.vue'
  import CustomTab from '@/components/CustomTab/CustomTab.vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { getbannerList, getCityList } from '@/api/common'
  import { storeToRefs } from 'pinia'
  import { useUserStore } from '@/store/user'
  import { getUserInfo } from '@/api/user'
  import { useCacheStore } from '@/store/cache'
  import { getLocation } from '@/libs'

  const { storeUserInfo, storeIsLogin } = storeToRefs(useUserStore())
  // const { storeBannerList } = storeToRefs(useCacheStore())

  onLoad(async () => {
    if (storeIsLogin.value) {
      const data = await getUserInfo()
      console.log('data', data)

      storeUserInfo.value = data
    }
    // getbannerList().then(res => {
    //   storeBannerList.value = res
    // })

    const location = await getLocation()
    console.log('location', location)
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
