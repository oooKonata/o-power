<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { useCacheStore } from '@/store/cache'
  import { storeToRefs } from 'pinia'

  const { safeAreaInsets } = useCacheStore()

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
  <view class="o-nav" :style="{ paddingTop: safeAreaInsets?.top + 'px' }" :class="{ 'background-color': hasBgColor }">
    <view class="content">
      <view v-if="type" class="hot-zone" @click="handleClick()">
        <image v-if="type === 'back_b'" class="icon" :src="loadStaticResource('/icons/back_b.png')" />
        <image v-else-if="type === 'back_w'" class="icon" :src="loadStaticResource('/icons/back_w.png')" />
        <image v-else-if="type === 'close'" class="icon" :src="loadStaticResource('/icons/close_b.png')" />
      </view>
      <view class="title">{{ title }}</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .o-nav {
    z-index: 999;
    position: fixed;
    left: 0;
    .content {
      @include flex-center;
      width: 750rpx;
      height: 44px;
      font-size: 16px;
      color: $o-b80;
      .hot-zone {
        @include flex-center;
        position: absolute;
        left: 0;
        width: 44px;
        height: 100%;
        .icon {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
  .background-color {
    background-color: $o-w;
  }
</style>
