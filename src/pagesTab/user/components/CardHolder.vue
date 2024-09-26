<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
</script>

<template>
  <view class="card-holder">
    <view class="card-holder__coupon">
      <view class="nums">
        <text class="num">6</text>
        <text class="unit">张</text>
      </view>
      <view class="btn">
        <text>购买</text>
      </view>
      <view class="more">
        <text>优惠券</text>
        <image class="icon" :src="loadStaticResource('/icons/more_small.png')" />
      </view>
    </view>
    <view class="card-holder__coupon">
      <view class="nums">
        <text class="num">9</text>
        <text class="unit">张</text>
      </view>
      <view class="btn">
        <text>购买</text>
      </view>
      <view class="more">
        <text>卡包</text>
        <image class="icon" :src="loadStaticResource('/icons/more_small.png')" />
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .card-holder {
    position: relative;
    margin-top: 24rpx;
    width: $o-width;
    display: flex;
    justify-content: space-between;
    &__coupon {
      position: relative;
      width: 330rpx;
      height: 172rpx;
      border-radius: 16rpx;
      background-color: $o-w;
      padding: 20rpx 32rpx 32rpx 32rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .nums {
        height: 72rpx;
        display: flex;
        align-items: center;
        .num {
          font-size: 52rpx;
          color: $o-t;
          font-family: 'AlibabaPuHuiTi-3-85-Bold';
        }
        .unit {
          font-size: 24rpx;
          color: $o-b60;
          margin-left: 6rpx;
          margin-top: 14rpx;
        }
      }
      .btn {
        position: absolute;
        right: 32rpx;
        top: 32rpx;
        width: 96rpx;
        height: 48rpx;
        border-radius: 999rpx;
        background-color: $o-t;
        color: $o-w;
        font-size: 24rpx;
        @include flex-center;
      }
      .more {
        font-size: 26rpx;
        color: $o-b80;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon {
          width: 16rpx;
          height: 32rpx;
        }
      }
    }
  }
</style>
