<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
</script>

<template>
  <view class="content">
    <view class="tabs">
      <view class="tab">
        <image
          :src="loadStaticResource('/tabs/home_selected.png')"
          mode="aspectFit" />
        <text style="color: #189269">首页</text>
      </view>
      <view class="tab">
        <image
          class="bg-airplane"
          :src="loadStaticResource('/tabs/bg_airplane.png')"
          mode="aspectFit" />
        <image
          class="airplane"
          :src="loadStaticResource('/tabs/airplane.png')"
          mode="aspectFit" />
      </view>
      <view class="tab">
        <image
          :src="loadStaticResource('tabs/me_default.png')"
          mode="aspectFit" />
        <text>我的</text>
      </view>
    </view>
    <view class="fix"> </view>
  </view>
</template>

<style scoped lang="scss">
  .content {
    position: fixed;
    bottom: 0;
    left: 0;
    .tabs {
      font-size: 20rpx;
      color: $o-b40;
      display: flex;
      justify-content: center;
      align-items: end;
      .tab {
        width: 250rpx;
        height: 98rpx;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: $o-w;
        position: relative;
        image {
          width: 48rpx;
          height: 48rpx;
        }
        text {
          margin-top: 4rpx;
        }
        .airplane {
          width: 100rpx;
          height: 100rpx;
          position: absolute;
          bottom: 18rpx;
        }
        .bg-airplane {
          position: absolute;
          bottom: 0;
          width: 150rpx;
          height: 128rpx;
        }
      }
    }
    .fix {
      width: 750rpx;
      height: constant(safe-area-inset-bottom);
      height: env(safe-area-inset-bottom);
      background-color: $o-w;
    }
  }
</style>
