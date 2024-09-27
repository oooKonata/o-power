<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
</script>

<template>
  <view class="card-coupon">
    <view class="up">
      <text class="title">优惠券</text>
      <view class="more">
        <text class="desc">查看全部</text>
        <image class="icon" :src="loadStaticResource('/icons/more_small.png')" />
      </view>
    </view>
    <view class="down">
      <image class="bg" :src="loadStaticResource('/nfc/bg_coupon.png')" />
      <view class="left">
        <view class="amount">
          <text class="symbol">¥</text>
          <text class="num">3</text>
        </view>
        <text class="type">立减券</text>
      </view>
      <view class="center">
        <text class="title">星和动力3元出行立减券</text>
        <text class="desc">有效期至2024.12.31</text>
      </view>
      <view class="right">
        <text>使用</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .card-coupon {
    width: $o-width;
    .up {
      @include flex-between-center;
      height: 108rpx;
      .title {
        font-size: 32rpx;
        font-weight: 500;
        color: $o-b80;
      }
      .more {
        display: flex;
        align-items: center;
        .desc {
          font-size: 24rpx;
          color: $o-b40;
        }
        .icon {
          width: 16rpx;
          height: 32rpx;
          margin-left: 4rpx;
        }
      }
    }
    .down {
      position: relative;
      display: flex;
      align-items: center;
      .bg {
        width: 100%;
        height: 144rpx;
      }
      .left {
        position: absolute;
        top: 0;
        width: 144rpx;
        height: 100%;
        @include flex-column-center;
        padding-top: 22rpx;
        color: $o-t;
        .amount {
          .symbol {
            font-size: 26rpx;
          }
          .num {
            font-family: 'AlibabaPuHuiTi-3-85-Bold';
            font-size: 44rpx;
          }
        }
        .type {
          font-size: 22rpx;
        }
      }
      .center {
        position: absolute;
        display: flex;
        flex-direction: column;
        margin-left: 168rpx;
        .title {
          font-size: 28rpx;
          font-weight: 500;
          color: $o-b80;
        }
        .desc {
          font-size: 24rpx;
          color: $o-b40;
          margin-top: 6rpx;
        }
      }
      .right {
        position: absolute;
        right: 32rpx;
        height: 48rpx;
        border-radius: 999rpx;
        padding: 0 24rpx;
        font-size: 24rpx;
        color: $o-w;
        background-color: $o-t;
        @include flex-center;
      }
    }
  }
</style>
