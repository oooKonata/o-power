<script setup lang="ts">
  import type { OilStation } from '@/api/types/oil'
  import { loadStaticResource } from '@/assets'

  defineProps<{
    list: OilStation[]
  }>()
</script>

<template>
  <view class="oil-station-card-list">
    <view v-for="(item, index) in list" :key="index" class="oil-station-card">
      <view class="oil-station-card--up">
        <view class="oil-station-card--up--left">
          <text class="title ellipsis">{{ item.title }}</text>
          <view class="desc">
            <text class="distance">{{ item.distance }}公里</text>
            <view class="sep"></view>
            <text class="ellipsis">{{ item.address }}</text>
          </view>
        </view>
        <view class="oil-station-card--up--right">
          <image class="icon" :src="loadStaticResource('/icons/nav.png')" />
          <text>导航</text>
        </view>
      </view>
      <view class="oil-station-card--down">
        <view class="info">
          <text>¥</text>
          <text class="price">{{ item.priceYfq }}</text>
          <text>/L</text>
          <text class="old-price">¥{{ item.priceOfficial }}/L</text>
        </view>
        <view class="btn">
          <text>去加油</text>
          <image class="icon" :src="loadStaticResource('/icons/go.png')" />
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .oil-station-card-list {
    @include flex-column-center;
    gap: 24rpx;
    .oil-station-card {
      @include o-card;
      padding: 32rpx;
      &--up {
        @include flex-between-center;
        &--left {
          display: flex;
          flex-direction: column;
          min-width: 0;
          margin-right: 32rpx;
          .title {
            color: $o-b80;
            font-size: 32rpx;
            font-weight: 700;
            flex-shrink: 0;
          }
          .desc {
            margin-top: 6rpx;
            font-size: 24rpx;
            color: $o-b60;
            display: flex;
            align-items: center;
            .distance {
              flex-shrink: 0;
            }
            .sep {
              width: 1rpx;
              height: 20rpx;
              background-color: $o-b20;
              margin: 0 12rpx;
            }
          }
        }
        &--right {
          font-size: 20rpx;
          color: $o-b60;
          @include flex-column-center;
          .icon {
            width: 48rpx;
            height: 48rpx;
            margin-bottom: 4rpx;
          }
        }
      }
      &--down {
        margin-top: 24rpx;
        @include flex-between-center;
        .info {
          font-size: 26rpx;
          color: $o-t;
          font-family: 'AlibabaPuHuiTi-3-55-Regular';
          .price {
            font-size: 46rpx;
            font-family: 'AlibabaPuHuiTi-3-85-Bold';
          }
          .old-price {
            font-size: 24rpx;
            color: $o-b40;
            margin-left: 8rpx;
            text-decoration: line-through;
          }
        }
        .btn {
          height: 64rpx;
          padding: 0 24rpx;
          border-radius: 12rpx;
          background-color: $o-bg;
          font-size: 26rpx;
          color: $o-b80;
          font-weight: 500;
          @include flex-center;
          .icon {
            width: 16rpx;
            height: 16rpx;
            margin-left: 8rpx;
          }
        }
      }
    }
  }
</style>
