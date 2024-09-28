<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import OBg from '@/components/o-bg/o-bg.vue'
  import ONav from '@/components/o-nav/o-nav.vue'
</script>

<template>
  <view class="nfc-recognition">
    <ONav title="贴卡充值" type="back_b" />
    <OBg type="green" />
    <view class="nfc-recognition__reading">
      <view class="tip">
        <text>*仅支持带有银联标志</text>
        <image class="icon" :src="loadStaticResource('/nfc/t-union.png')" />
        <text>的交通卡*</text>
      </view>
      <view class="nfc"></view>
      <view class="info">
        <text class="title">正在读卡...</text>
        <text class="desc">请保持交通卡贴近手机背面上方NFC感应区</text>
      </view>
      <view class="btn">取消</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .nfc-recognition {
    @include flex-column-center;
    &__reading {
      z-index: 9;
      @include flex-column-center;
      margin-top: calc(constant(safe-area-inset-top) + 44px + 32rpx);
      margin-top: calc(env(safe-area-inset-top) + 44px + 32rpx);
      .tip {
        display: flex;
        align-items: center;
        font-size: 26rpx;
        color: $o-b60;
        .icon {
          width: 52rpx;
          height: 32rpx;
          margin: 0 8rpx;
        }
      }
      .nfc {
        margin-top: 32rpx;
        width: 592rpx;
        height: 592rpx;
        background-color: $o-w;
        border-radius: 32rpx;
      }
      .info {
        @include flex-column-center;
        .title {
          margin-top: 32rpx;
          font-size: 36rpx;
          font-weight: 500;
          color: $o-b80;
        }
        .desc {
          margin-top: 6rpx;
          margin-top: 6rpx;
          font-size: 26rpx;
          color: $o-b60;
        }
      }
      .btn {
        margin-top: 64rpx;
        @include flex-center;
        width: 240rpx;
        height: 80rpx;
        border: 1rpx solid $o-b20;
        border-radius: 999rpx;
        font-size: 28rpx;
        color: $o-b80;
      }
    }
  }
</style>
