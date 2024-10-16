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
            <text class="title ellipsis">{{ item.shopName }}</text>
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
      <view class="car-wash-card--down">
        <view v-for="(coupon, index) in item.services" :key="index" class="coupon">
          <view class="left">
            <text class="title">{{ coupon.title }}</text>
            <view class="price">
              <view class="sellprice">
                <text class="symbol">¥</text>
                <text>{{ coupon.sellPrice.split('.')[0] }}</text>
                <text>.</text>
                <text class="Decimal">{{ coupon.sellPrice.split('.')[1] }}</text>
              </view>
              <text class="facevalue">¥{{ coupon.faceValue }}</text>
            </view>
          </view>
          <view class="btn">
            <text>购买</text>
          </view>
          <view v-if="index !== item.services.length - 1" class="sep"></view>
        </view>
      </view>
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
          gap: 24rpx;
          align-items: center;
          min-width: 0;
          .img {
            width: 96rpx;
            height: 96rpx;
            border-radius: 12rpx;
            flex-shrink: 0;
          }
          .info {
            display: flex;
            flex-direction: column;
            min-width: 0;
            margin-right: 24rpx;
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

      &--down {
        width: 100%;
        border-radius: 12rpx;
        .coupon {
          @include flex-between-center;
          padding: 20rpx 24rpx 12rpx 24rpx;
          background-color: $o-bg;
          position: relative;
          .left {
            .title {
              color: $o-b80;
              font-size: 28rpx;
            }
            .price {
              display: flex;
              align-items: baseline;
              .sellprice {
                color: $o-t;
                font-size: 40rpx;
                font-family: 'AlibabaPuHuiTi-3-85-Bold';
                .symbol {
                  font-size: 26rpx;
                }
                .Decimal {
                  font-size: 28rpx;
                }
              }
              .facevalue {
                color: $o-b40;
                font-size: 24rpx;
                font-family: 'AlibabaPuHuiTi-3-85-Regular';
                text-decoration: line-through;
                margin-left: 8rpx;
              }
            }
          }
          .btn {
            @include flex-center;
            height: 48rpx;
            padding: 0 24rpx;
            border-radius: 99rpx;
            color: $o-w;
            font-size: 24rpx;
            background-color: $o-t;
          }
          .sep {
            width: 590rpx;
            height: 1rpx;
            background-color: rgba(0, 0, 0, 0.08);
            position: absolute;
            bottom: 0;
            left: 24rpx;
          }
          &:nth-child(1) {
            margin-top: 24rpx;
            border-top-left-radius: 12rpx;
            border-top-right-radius: 12rpx;
          }
          &:last-child {
            border-bottom-left-radius: 12rpx;
            border-bottom-right-radius: 12rpx;
          }
        }
      }
    }
  }
</style>
