<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { useCacheStore } from '@/store/cache'
  import { useLocationStore } from '@/store/location'
  import { storeToRefs } from 'pinia'

  const { storeLocation } = storeToRefs(useLocationStore())
  const { safeAreaInsets } = storeToRefs(useCacheStore())

  const handleClick = () => {
    uni.navigateTo({ url: '/pages/location/index' })
  }
</script>

<template>
  <view class="location" :style="{ marginTop: safeAreaInsets?.top + 'px' }">
    <view class="position" @click="handleClick">
      <text>{{ storeLocation?.city || '未授权定位' }}</text>
      <image class="icon" :src="loadStaticResource('/icons/position_more.png')" />
    </view>
  </view>
</template>

<style scoped lang="scss">
  .location {
    position: absolute;
    left: 32rpx;
    .position {
      z-index: 9;
      position: relative;
      color: $o-b80;
      width: 750rpx;
      height: 44px;
      font-size: 30rpx;
      display: flex;
      align-items: center;
      .icon {
        width: 16rpx;
        height: 16rpx;
        margin-left: 4rpx;
      }
    }
  }
</style>
