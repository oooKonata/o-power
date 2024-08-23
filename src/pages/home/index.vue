<script setup lang="ts">
  import oNav from '@/components/o-nav.vue'
  import oSwiper from '@/components/o-swiper.vue'
  import QuickLink from './components/QuickLink.vue'
  import NearbyService from './components/NearbyService.vue'
  import oTabbar from '@/components/o-tabbar.vue'
  import UserInfo from './components/UserInfo.vue'
</script>

<template>
  <view class="page">
    <o-nav position />
    <o-swiper />
    <UserInfo />
    <QuickLink />
    <NearbyService />
    <o-tabbar />
  </view>
</template>

<style scoped lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
