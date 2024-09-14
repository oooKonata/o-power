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

    storeUserInfo.value = data
  }
  // getbannerList().then(res => {
  //   storeBannerList.value = res
  // })

  // getLocation().then((data: any) => {
  //   console.log('000', data)
  // })

  getLocation().then(a => {
    console.log('a: ', a)
  })
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
