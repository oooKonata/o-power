<script setup lang="ts">
  import { ref } from 'vue'

  const links = ref([
    { url: '@/assets/home/icon_coupon.png', text: '优惠券' },
    { url: '@/assets/home/icon_rights.png', text: '生活权益' },
    { url: '@/assets/home/icon_charge.png', text: '充电桩' },
    { url: '@/assets/home/icon_drive.png', text: '专业代驾' },
  ])
  console.log(links.value[0].url)
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
        <image src="@/assets/home/img_refuel.png" mode="aspectFit" />
      </view>
      <view class="right">
        <view class="up">
          <view class="info">
            <text class="title"> 省钱券包 </text>
            <text class="desc">畅享加油好礼</text>
          </view>
          <image src="@/assets/home/img_coupons.png" mode="aspectFit" />
        </view>
        <view class="down">
          <view class="info">
            <text class="title"> 智能洗车 </text>
            <text class="desc">便捷优惠洗车</text>
          </view>
          <image src="@/assets/home/img_wash.png" mode="aspectFit" />
        </view>
      </view>
    </view>
    <view class="secondary">
      <view class="link">
        <image src="@/assets/home/icon_coupon.png" mode="apsectFit" />
        <text>优惠券</text>
      </view>
      <view class="link">
        <image src="@/assets/home/icon_rights.png" mode="apsectFit" />
        <text>生活权益</text>
      </view>
      <view class="link">
        <image src="@/assets/home/icon_charge.png" mode="apsectFit" />
        <text>充电桩</text>
      </view>
      <view class="link">
        <image src="@/assets/home/icon_drive.png" mode="apsectFit" />
        <text>专业代驾</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .content {
    margin-top: 24rpx;
    .main {
      width: 686rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        background-color: $o-white;
        border-radius: 16rpx;
        width: 331rpx;
        height: 368rpx;
        display: flex;
        flex-direction: column;
        align-items: center;
        .tag {
          background-color: #ff9259;
          color: $o-white;
          font-size: 22rpx;
          padding: 3rpx 24rpx;
          border-radius: 0 0 8rpx 8rpx;
        }
        .title {
          font-size: 32rpx;
          color: $o-black-80;
          margin-top: 24rpx;
        }
        .desc {
          font-size: 24rpx;
          color: $o-theme;
          margin-top: 2rpx;
        }
        image {
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
            color: $o-black-80;
          }
          .desc {
            font-size: 24rpx;
            color: $o-theme;
            margin-top: 2rpx;
          }
        }
        image {
          width: 132rpx;
          height: 112rpx;
          position: absolute;
          right: 16rpx;
          bottom: 16rpx;
        }
        .up {
          background-color: $o-white;
          border-radius: 16rpx;
          width: 331rpx;
          height: 172rpx;
          position: relative;
        }
        .down {
          background-color: $o-white;
          border-radius: 16rpx;
          width: 331rpx;
          height: 172rpx;
          position: relative;
        }
      }
    }
    .secondary {
      width: 100%;
      height: 192rpx;
      background-color: $o-white;
      border-radius: 16rpx;
      margin-top: 24rpx;
      padding-top: 24rpx;
      display: flex;
      justify-content: space-evenly;
      .link {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 120rpx;
        image {
          width: 96rpx;
          height: 96rpx;
        }
        text {
          font-size: 24rpx;
          color: $o-black-80;
          margin-top: 6rpx;
        }
      }
    }
  }
</style>
