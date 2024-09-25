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
  </view>
</template>

<style scoped lang="scss">
  .card-holder {
    position: relative;
    width: $o-width;
    display: flex;
    justify-content: space-between;
    &__coupon {
      position: relative;
      width: 330rpx;
      height: 172rpx;
      border-radius: 16rpx;
      background-color: $o-w;
      .nums {
        .num {
          position: absolute;
          font-size: 52rpx;
          color: $o-t;
        }
        .unit {
          position: absolute;
          font-size: 24rpx;
          color: $o-b60;
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
        position: absolute;
        bottom: 32rpx;
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
