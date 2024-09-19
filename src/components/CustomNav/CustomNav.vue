<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { useLocationStore } from '@/store/location'
  import { storeToRefs } from 'pinia'

  defineProps<{
    title?: string
    icon?: boolean
    position?: boolean
  }>()

  const { storeLocation } = storeToRefs(useLocationStore())

  const handleClick = () => {
    uni.navigateTo({ url: '/pages/location/index' })
  }
</script>

<template>
  <view class="content">
    <view class="nav">
      <view class="nav_icon" v-if="icon === true && position === false">
        <image style="width: 48rpx; height: 48rpx" :src="loadStaticResource('/icons/back.png')" />
      </view>
      <view class="position" v-if="position === true && icon === false" @click="handleClick">
        <text class="text">{{ storeLocation?.city || '未授权定位' }}</text>
        <image style="width: 16rpx; height: 16rpx" :src="loadStaticResource('/icons/position_more.png')" />
      </view>
      <view class="title">{{ title }}</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .content {
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
    .nav {
      z-index: 9;
      color: $o-b80;
      width: 750rpx;
      height: 88rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .nav_icon {
        position: absolute;
        left: 16rpx;
      }
      .position {
        position: absolute;
        left: 32rpx;
        font-size: 30rpx;
        display: flex;
        align-items: center;
        .text {
          margin-right: 4rpx;
        }
      }
    }
  }
</style>
