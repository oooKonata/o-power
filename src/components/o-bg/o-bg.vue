<script setup lang="ts">
  import { loadStaticResource } from '@/assets'

  defineProps<{
    type: 'green' | 'blue'
  }>()
</script>

<template>
  <view class="o-bg">
    <image v-if="type === 'green'" class="o-bg__green" :src="loadStaticResource('/bg/green.png')" />
    <image v-if="type === 'blue'" class="o-bg__blue" :src="loadStaticResource('/bg/blue.png')" />
  </view>
</template>

<style scoped lang="scss">
  .o-bg {
    width: 750rpx;
    height: 428rpx;
    position: absolute;
    &__green,
    &__blue {
      width: 100%;
      height: 100%;
    }
  }
</style>
