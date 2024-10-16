<script setup lang="ts">
  import type { SdoWashStation } from '@/api/types/carWash'
  import { loadStaticResource } from '@/assets'

  defineProps<{
    list: SdoWashStation[]
  }>()
</script>

<template>
  <view class="car-wash-card-list">
    <view v-for="(item, index) in list" :key="index" class="car-wash-card">
      <view class="car-wash-card--up">
        <view class="left">
          <image class="img" :src="loadStaticResource('/icons/jdyc.png')" />
          <view class="info">
            <text class="title ellipsis">标题</text>
            <view class="desc">
              <text class="distance">{{ item.distance }}公里</text>
              <view class="sep"></view>
              <text class="position ellipsis">{{ item.address }}</text>
            </view>
          </view>
        </view>
        <view class="right">
          <image class="icon" :src="loadStaticResource('/icons/nav.png')" />
          <text>导航</text>
        </view>
      </view>
      <view class="car-wash-card--down"></view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .car-wash-card-list {
    @include flex-column-center;
    gap: 24rpx;
    .car-wash-card {
      @include o-card;
      padding: 24rpx;
      &--up {
        @include flex-between-center;
        .left {
          display: flex;
          align-items: center;
          min-width: 0;
          margin-right: 24rpx;
          .img {
            width: 96rpx;
            height: 96rpx;
            border-radius: 12rpx;
            margin-right: 24rpx;
            flex-shrink: 0;
          }
          .info {
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
        }
        .right {
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
      // &--down {
      // }
    }
  }
</style>
