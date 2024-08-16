<script setup lang="ts">
  defineProps<{
    title?: string
    icon?: boolean
    position?: boolean
  }>()
</script>

<template>
  <view class="content">
    <view class="nav">
      <view class="nav_icon" v-if="icon === true && position === false">
        <image
          style="width: 48rpx; height: 48rpx"
          src="@/assets/icons/back.png"
          mode="aspectFit"></image>
      </view>
      <view class="position" v-if="position === true && icon === false">
        <text>武汉市</text>
        <image
          style="width: 16rpx; height: 16rpx"
          src="@/assets/icons/position_more.png"
          mode="aspectFit" />
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
        text {
          margin-right: 4rpx;
        }
      }
    }
  }
</style>
