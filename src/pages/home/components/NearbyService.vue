<script setup lang="ts"></script>

<template>
  <view class="content">
    <view class="title">附近服务</view>
    <view class="tags">
      <view class="tag active">
        <text>中石油</text>
      </view>
      <view class="tag">
        <text>民营</text>
      </view>
      <view class="tag">
        <text>洗车</text>
      </view>
      <view class="more">
        <text>查看全部</text>
        <image src="@/assets/icons/more_small.png" mode="scaleToFill" />
      </view>
    </view>
    <view class="cards">
      <view class="card" v-for="item in 3" :key="item">
        <view class="up">
          <view class="name ellipsis-311">中国石油徐东路加油站</view>
          <view class="desc">
            <text class="status">营业中</text>
            <view class="divider-v"></view>
            <text>营业时间0:00-24:00</text>
          </view>
        </view>
        <view class="down">
          <view class="divider-h"></view>
          <text class="ellipsis-200">
            武汉市洪山区徐东大街59号(汪家墩地铁站E口步行140米)
          </text>
          <view class="nav">
            <text>1.4公里</text>
            <image src="@/assets/icons/nav.png" mode="aspectFit" />
          </view>
        </view>
      </view>
      <view class="slogan">
        <text>星和动力</text>
        <view class="divider-v"></view>
        <text>品牌优选</text>
        <view class="divider-v"></view>
        <text>品质服务</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .content {
    width: 686rpx;
    margin-top: 32rpx;
    padding-bottom: calc(128rpx + constant(safe-area-inset-bottom));
    padding-bottom: calc(128rpx + env(safe-area-inset-bottom));
    .divider-v {
      width: 1rpx;
      height: 20rpx;
      background-color: $o-b20;
      margin: 0 12rpx;
    }
    .title {
      font-size: 32rpx;
      font-weight: 500;
      color: $o-b80;
    }
    .tags {
      display: flex;
      align-items: center;
      font-size: 24rpx;
      color: $o-b60;
      margin-top: 32rpx;
      position: relative;
      .tag {
        height: 48rpx;
        background-color: $o-w;
        display: flex;
        align-items: center;
        padding: 0 24rpx;
        border-radius: 999rpx;
        margin-right: 16rpx;
      }
      .active {
        background-color: rgb(232, 244, 240);
        border: 1rpx solid $o-t;
        color: $o-t;
      }
      .more {
        font-size: 24rpx;
        color: $o-b40;
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        image {
          width: 16rpx;
          height: 32rpx;
          margin-left: 4rpx;
        }
      }
    }
    .cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      .card {
        background-color: $o-w;
        font-size: 24rpx;
        color: $o-b60;
        border-radius: 16rpx;
        margin-top: 24rpx;
        .up {
          padding: 32rpx;
          .name {
            font-size: 32rpx;
            font-weight: 500;
            color: $o-b80;
          }
          .desc {
            display: flex;
            align-items: center;
            margin-top: 6rpx;
            .status {
              color: $o-t;
            }
          }
        }

        .down {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24rpx 32rpx;
          position: relative;
          .divider-h {
            width: 622rpx;
            height: 1rpx;
            background-color: $o-b10;
            position: absolute;
            top: 0;
          }
          .nav {
            display: flex;
            align-items: center;
            image {
              width: 48rpx;
              height: 48rpx;
              margin-left: 16rpx;
            }
          }
        }
      }
      .slogan {
        display: flex;
        align-items: center;
        font-size: 24rpx;
        color: $o-b40;
        padding: 32rpx 0;
      }
    }
  }
</style>
