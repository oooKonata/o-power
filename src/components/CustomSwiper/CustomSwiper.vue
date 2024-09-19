<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
</script>

<template>
  <view class="swiper">
    <image class="image" :src="loadStaticResource('/banner/reward.png')" mode="aspectFit" />
  </view>
</template>

<style scoped lang="scss">
  .swiper {
    margin-top: calc(-88rpx - constant(safe-area-inset-top));
    margin-top: calc(-88rpx - env(safe-area-inset-top));
    .image {
      width: 750rpx;
      height: 534rpx;
    }
  }
</style>

<script lang="ts"></script>
