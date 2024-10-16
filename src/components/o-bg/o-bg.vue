<script setup lang="ts">
  import { loadStaticResource } from '@/assets'

  defineProps<{
    type: 'green' | 'blue' | 'green_white'
  }>()
</script>

<template>
  <view class="o-bg">
    <image v-if="type === 'green'" class="o-bg--img" :src="loadStaticResource('/bg/green.png')" />
    <image v-if="type === 'blue'" class="o-bg--img" :src="loadStaticResource('/bg/blue.png')" />
    <image v-if="type === 'green_white'" class="o-bg--img" :src="loadStaticResource('/bg/green_white.png')" />
  </view>
</template>

<style scoped lang="scss">
  .o-bg {
    width: 750rpx;
    height: 428rpx;
    position: absolute;
    top: 0;
    left: 0;
    &--img {
      width: 100%;
      height: 100%;
    }
  }
</style>
