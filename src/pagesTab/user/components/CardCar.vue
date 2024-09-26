<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
</script>

<template>
  <view class="card-car">
    <text class="card-car__title">我的车辆</text>
    <view class="card-car__info">
      <text class="license-plate">添加爱车享权益</text>
      <view class="desc">
        <text class="label">星和车主</text>
        <view class="label sep"></view>
        <text class="label">品牌服务</text>
        <view class="label sep"></view>
        <text class="label">车主账单</text>
      </view>
    </view>
    <view class="card-car__add">
      <image class="icon" :src="loadStaticResource('/icons/add.png')" />
      <text>添加爱车</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .card-car {
    z-index: 2;
    position: relative;
    padding: 32rpx;
    @include o-card;
    margin-top: 24rpx;
    &__title {
      font-size: 28rpx;
      color: $o-b80;
      display: flex;
      margin-bottom: 20rpx;
    }
    &__info {
      .license-plate {
        font-size: 32rpx;
        font-weight: 500;
        color: $o-b80;
      }
      .desc {
        margin-top: 6rpx;
        font-size: 24rpx;
        color: $o-b40;
        display: flex;
        align-items: center;
        .label {
          margin-right: 12rpx;
        }
        .sep {
          width: 1rpx;
          height: 20rpx;
          background-color: $o-b20;
        }
      }
    }
    &__add {
      position: absolute;
      right: 32rpx;
      bottom: 32rpx;
      height: 56rpx;
      padding: 0 24rpx;
      border-radius: 99rpx;
      border: 1rpx solid $o-t;
      color: $o-t;
      font-size: 24rpx;
      @include flex-center;
      .icon {
        width: 16rpx;
        height: 16rpx;
        margin-right: 4rpx;
      }
    }
  }
</style>
