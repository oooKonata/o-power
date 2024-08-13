<script setup lang="ts">
  import oNav from '@/components/o-nav.vue'
  import oSwiper from '@/components/o-swiper.vue'
  import MemberInfo from './components/MemberInfo.vue'
  import QuickLink from './components/QuickLink.vue'
</script>

<template>
  <view class="page">
    <o-nav positon />
    <o-swiper class="swiper" />
    <MemberInfo />
    <QuickLink />
  </view>
</template>

<style scoped lang="scss">
  .page {
    height: 100vh;
    background-color: $o-bg;
    display: flex;
    flex-direction: column;
    align-items: center;
    .swiper {
      margin-top: calc(-88rpx - constant(safe-area-inset-top));
      margin-top: calc(-88rpx - env(safe-area-inset-top));
    }
    .context {
      .text {
        color: $o-theme;
      }
    }
  }
</style>
