<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { useLocationStore } from '@/store/location'
  import { onLoad } from '@dcloudio/uni-app'
  import { storeToRefs } from 'pinia'

  withDefaults(
    defineProps<{
      title?: string
      type?: 'back_b' | 'back_w' | 'close'
      hasBgColor?: boolean
    }>(),
    {
      title: '',
      type: 'back_b',
      color: false,
    }
  )

  const handleClick = () => {
    uni.navigateBack()
  }
</script>

<template>
  <view class="custom-nav">
    <view class="nav" :class="{ 'background-color': hasBgColor }">
      <view class="hot-zone" v-if="type" @click="handleClick()">
        <image v-if="type === 'back_b'" class="icon" :src="loadStaticResource('/icons/back_b.png')" />
        <image v-else-if="type === 'back_w'" class="icon" :src="loadStaticResource('/icons/back_w.png')" />
        <image v-else-if="type === 'close'" class="icon" :src="loadStaticResource('/icons/close_b.png')" />
      </view>
      <view class="title">{{ title }}</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .custom-nav {
    z-index: 99;
    position: fixed;
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
    .nav {
      position: relative;
      color: $o-b80;
      width: 750rpx;
      height: 88rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32rpx;
      .hot-zone {
        width: 88rpx;
        height: 88rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 0;
        .icon {
          position: absolute;
          width: 48rpx;
          height: 48rpx;
        }
      }
    }
    .background-color {
      background-color: $o-w;
    }
  }
</style>
