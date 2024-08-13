<script setup lang="ts">
  defineProps<{
    title?: string
    icon?: boolean
    positon?: boolean
  }>()
</script>

<template>
  <view class="content">
    <view class="nav_icon" v-if="icon === true && positon === false">
      <image
        style="width: 48rpx; height: 48rpx"
        src="@/assets/icons/back.png"
        mode="aspectFit"></image>
    </view>
    <view class="position" v-if="positon === true && icon === false">
      <text>武汉市</text>
      <image
        style="width: 16rpx; height: 16rpx"
        src="@/assets/icons/position_more.png"
        mode="aspectFit" />
    </view>
    <view class="title">{{ title }}</view>
  </view>
</template>

<style scoped lang="scss">
  .content {
    z-index: 999;
    color: $o-black-80;
    // background-color: $o-theme-10;
    width: 100%;
    height: 88rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-top: constant(safe-area-inset-top);
    padding-top: env(safe-area-inset-top);
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
      text {
        margin-right: 4rpx;
      }
    }
  }
</style>
