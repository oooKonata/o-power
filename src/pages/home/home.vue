<script setup lang="ts">
  import oNav from '@/components/o-nav.vue'
  import oSwiper from '@/components/o-swiper.vue'
  import MemberInfo from './components/MemberInfo.vue'
  import QuickLink from './components/QuickLink.vue'
  import NearbyService from './components/NearbyService.vue'
  import oTabbar from '@/components/o-tabbar.vue'
</script>

<template>
  <view class="page">
    <o-nav position />
    <o-swiper class="swiper" />
    <MemberInfo />
    <QuickLink />
    <NearbyService />
    <o-tabbar />
  </view>
</template>

<style scoped lang="scss">
  .page {
    height: 100%;
    background-color: $o-bg;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
