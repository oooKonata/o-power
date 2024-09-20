<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import CustomNav from '@/components/CustomNav/CustomNav.vue'
</script>

<template>
  <view class="page">
    <CustomNav title="选择位置" icon />
    <view class="search">
      <image class="icon" :src="loadStaticResource('/icons/search.png')" />
      <input type="text" class="input" placeholder="搜索城市" placeholder-style="font-size:28rpx; color:#999999" />
    </view>
    <view class="position">
      <text class="title">当前定位</text>
      <view class="option current">
        <image class="icon" :src="loadStaticResource('/icons/location.png')" />
        <text>武汉市</text>
      </view>
    </view>
    <view class="position">
      <text class="title">热门城市</text>
      <view class="hot">
        <view class="option" v-for="(item, index) in 9" :key="index">
          <text>武汉市</text>
        </view>
      </view>
    </view>
    <view class="list">
      <view class="item" v-for="(item, index) in 9" :key="index">
        <text class="letter border">A</text>
        <text class="city border" v-for="(item, index) in 2" :key="index">武汉市</text>
      </view>
    </view>
    <view class="indicator">
      <view class="item" v-for="(item, index) in 9" :key="index">
        <text :class="{ active: index === 0 }">A</text>
        <view v-if="index === 0" class="bubble">
          <text class="tag">A</text>
          <image class="icon" :src="loadStaticResource('/icons/bubble.png')" />
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .page {
    background-color: $o-w;
    display: flex;
    flex-direction: column;
    align-items: center;
    .search {
      background-color: $o-bg;
      width: $o-width;
      height: 64rpx;
      border-radius: 999rpx;
      margin-top: 20rpx;
      display: flex;
      align-items: center;
      .icon {
        width: 32rpx;
        height: 32rpx;
        margin-left: 24rpx;
      }
      .input {
        margin-left: 12rpx;
        width: 594rpx;
        height: 100%;
      }
    }
    .position {
      width: $o-width;
      color: $o-b80;
      font-size: 28rpx;
      display: flex;
      flex-direction: column;
      .title {
        color: $o-b40;
        margin: 40rpx 0 24rpx 0;
      }
      .option {
        width: 218rpx;
        height: 72rpx;
        border: 1rpx solid $o-b20;
        border-radius: 8rpx;
        color: $o-b80;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          width: 40rpx;
          height: 40rpx;
        }
      }
      .current {
        border: 1rpx solid $o-t;
        color: $o-t;
      }
      .hot {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .option {
          margin-bottom: 16rpx;
          &:nth-last-child(-n + 3) {
            margin-bottom: 0;
          }
        }
      }
    }
    .list {
      margin-top: 24rpx;
      .item {
        display: flex;
        flex-direction: column;
        width: $o-width;
        .border {
          border-bottom: 1rpx solid $o-b10;
        }
        .letter {
          display: flex;
          align-items: center;
          height: 72rpx;
          font-size: 26rpx;
          color: $o-b60;
        }
        .city {
          display: flex;
          align-items: center;
          height: 108rpx;
          font-size: 30rpx;
          color: $o-b80;
          &:nth-last-child(1) {
            border: none;
          }
        }
      }
    }
    .indicator {
      position: fixed;
      right: 12rpx;
      top: 50%;
      transform: translateY(-50%);
      padding: 16rpx 0;
      border-radius: 28rpx;
      background-color: $o-bg;
      display: flex;
      flex-direction: column;
      .item {
        color: $o-b80;
        margin-top: 8rpx;
        width: 28rpx;
        height: 28rpx;
        font-size: 20rpx;
        display: flex;
        justify-content: center;
        align-items: center;
        &:nth-child(1) {
          margin: 0;
        }
        .active {
          width: 28rpx;
          height: 28rpx;
          border-radius: 50%;
          background-color: $o-t;
          color: $o-w;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bubble {
          position: absolute;
          left: -136rpx;
          .tag {
            position: absolute;
            z-index: 1;
            width: 108rpx;
            height: 108rpx;
            font-size: 48rpx;
            color: $o-b30;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .icon {
            width: 120rpx;
            height: 108rpx;
          }
        }
      }
    }
  }
</style>
