<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { useCacheStore } from '@/store/cache'
  import { useLocationStore } from '@/store/location'
  import { storeToRefs } from 'pinia'

  const { storeLocation } = storeToRefs(useLocationStore())
  const { safeAreaInsets } = useCacheStore()

  const handleClick = () => {
    uni.navigateTo({ url: '/pages/location/index' })
  }
</script>

<template>
  <view class="location" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
    <view class="position" @click="handleClick">
      <text>{{ storeLocation?.city || storeLocation?.province || '未授权定位' }}</text>
      <image class="icon" :src="loadStaticResource('/icons/position_more.png')" />
    </view>
  </view>
</template>

<style scoped lang="scss">
  .location {
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    width: 750rpx;
    .position {
      display: flex;
      align-items: center;
      margin-left: 32rpx;
      color: $o-b80;
      height: 44px;
      font-size: 30rpx;
      .icon {
        width: 16rpx;
        height: 16rpx;
        margin-left: 4rpx;
      }
    }
  }
</style>
