<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
</script>

<template>
  <view class="content">
    <view class="main">
      <view class="left">
        <view class="tag">
          <text>购券更优惠</text>
        </view>
        <text class="title"> 优惠加油 </text>
        <text class="desc">加油立享优惠</text>
        <image class="img" :src="loadStaticResource('/home/img_refuel.png')" />
      </view>
      <view class="right">
        <view class="up">
          <view class="info">
            <text class="title"> 省钱券包 </text>
            <text class="desc">畅享加油好礼</text>
          </view>
          <image class="img" :src="loadStaticResource('/home/img_coupons.png')" />
        </view>
        <view class="down">
          <view class="info">
            <text class="title"> 智能洗车 </text>
            <text class="desc">便捷优惠洗车</text>
          </view>
          <image class="img" :src="loadStaticResource('/home/img_wash.png')" />
        </view>
      </view>
    </view>
    <view class="secondary">
      <view class="link">
        <image class="img" :src="loadStaticResource('/home/icon_coupon.png')" />
        <text class="text">优惠券</text>
      </view>
      <view class="link">
        <image class="img" :src="loadStaticResource('/home/icon_rights.png')" />
        <text class="text">生活权益</text>
      </view>
      <view class="link">
        <image class="img" :src="loadStaticResource('/home/icon_charge.png')" />
        <text class="text">充电桩</text>
      </view>
      <view class="link">
        <image class="img" :src="loadStaticResource('/home/icon_drive.png')" />
        <text class="text">专业代驾</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .content {
    margin-top: 24rpx;
    .main {
      width: $o-width;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        background-color: $o-w;
        border-radius: $o-radius;
        width: 331rpx;
        height: 368rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        .tag {
          background-color: #ff9259;
          color: $o-w;
          font-size: 22rpx;
          padding: 3rpx 24rpx;
          border-radius: 0 0 8rpx 8rpx;
        }
        .title {
          font-size: 32rpx;
          font-weight: 500;
          color: $o-b80;
          margin-top: 24rpx;
        }
        .desc {
          font-size: 24rpx;
          color: $o-t;
          margin-top: 2rpx;
        }
        .img {
          margin-top: 28rpx;
          width: 231rpx;
          height: 168rpx;
        }
      }
      .right {
        height: 368rpx;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .info {
          display: flex;
          flex-direction: column;
          margin: 24rpx 0 0 24rpx;

          .title {
            font-size: 32rpx;
            font-weight: 500;
            color: $o-b80;
          }
          .desc {
            font-size: 24rpx;
            color: $o-t;
            margin-top: 2rpx;
          }
        }
        .img {
          width: 132rpx;
          height: 112rpx;
          position: absolute;
          right: 16rpx;
          bottom: 16rpx;
        }
        .up {
          background-color: $o-w;
          border-radius: 16rpx;
          width: 331rpx;
          height: 172rpx;
          position: relative;
        }
        .down {
          background-color: $o-w;
          border-radius: $o-radius;
          width: 331rpx;
          height: 172rpx;
          position: relative;
        }
      }
    }
    .secondary {
      @include o-card;
      height: 192rpx;
      margin-top: 24rpx;
      padding-top: 24rpx;
      display: flex;
      justify-content: space-evenly;
      .link {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 128rpx;
        .img {
          width: 96rpx;
          height: 96rpx;
        }
        .text {
          font-size: 24rpx;
          color: $o-b80;
          margin-top: 6rpx;
        }
      }
    }
  }
</style>
