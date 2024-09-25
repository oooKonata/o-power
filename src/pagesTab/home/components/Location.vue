<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { useLocationStore } from '@/store/location'
  import { storeToRefs } from 'pinia'

  const { storeLocation } = storeToRefs(useLocationStore())

  const handleClick = () => {
    uni.navigateTo({ url: '/pages/location/index' })
  }
</script>

<template>
  <view class="content">
    <view class="position" @click="handleClick">
      <text class="text">{{ storeLocation?.city || '未授权定位' }}</text>
      <image class="icon" :src="loadStaticResource('/icons/position_more.png')" />
    </view>
  </view>
</template>

<style scoped lang="scss">
  .content {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
    position: absolute;
    .position {
      z-index: 9;
      position: relative;
      color: $o-b80;
      width: 750rpx;
      height: 88rpx;
      font-size: 30rpx;
      display: flex;
      align-items: center;
      .text {
        margin: 0 4rpx 0 32rpx;
      }
      .icon {
        width: 16rpx;
        height: 16rpx;
      }
    }
  }
</style>
