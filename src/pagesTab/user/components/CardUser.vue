<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
</script>

<template>
  <view class="card-user">
    <view class="card-user__avatar">
      <image class="image" :src="loadStaticResource('/icons/profile_logout.png')" />
    </view>
    <view class="card-user__info">
      <view class="nickname">点击登录</view>
      <view class="desc">解锁惊喜会员体验</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .card-user {
    width: $o-width;
    display: flex;
    align-items: center;
    padding-top: calc(constant(safe-area-inset-top) + 44px + 12rpx);
    padding-top: calc(env(safe-area-inset-top) + 44px + 12rpx);
    z-index: 2;
    position: relative;
    &__avatar {
      @include flex-center;
      margin-right: 24rpx;
      width: 104rpx;
      height: 104rpx;
      background-color: $o-w;
      border-radius: 50%;
      border: solid 2rpx $o-b20;
      .image {
        width: 96rpx;
        height: 96rpx;
      }
    }
    &__info {
      .nickname {
        font-size: 34rpx;
        font-weight: 500;
        color: $o-b80;
      }
      .desc {
        font-size: 26rpx;
        color: $o-t;
        margin-top: 6rpx;
      }
    }
  }
</style>
