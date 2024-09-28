<script setup lang="ts">
  import { loadStaticResource } from '@/assets'

  const handleClick = () => {
    uni.navigateTo({ url: '/pages/nfc/NFCRecognition' })
  }
</script>

<template>
  <view class="card-nfc">
    <view class="card-nfc__info">
      <text class="title">NFC贴卡充值</text>
      <text class="desc">便捷快速 随时随地 安全可靠</text>
    </view>
    <view class="card-nfc__btn" @click="handleClick">
      <text>贴卡充值</text>
      <image class="icon" :src="loadStaticResource('/nfc/arrow.png')" />
    </view>
  </view>
</template>

<style scoped lang="scss">
  .card-nfc {
    z-index: 9;
    position: relative;
    @include o-card;
    height: 172rpx;
    padding: 0 32rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -86rpx;
    &__info {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 34rpx;
        font-weight: 500;
        color: $o-b80;
        margin-bottom: 6rpx;
      }
      .desc {
        font-size: 26rpx;
        color: $o-rights;
      }
    }
    &__btn {
      height: 64rpx;
      padding: 0 32rpx;
      border-radius: 999rpx;
      background-color: $o-t;
      @include flex-center;
      font-size: 26rpx;
      font-weight: 500;
      color: $o-w;
      .icon {
        margin-left: 8rpx;
        width: 8rpx;
        height: 12rpx;
      }
    }
  }
</style>
