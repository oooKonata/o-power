<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { useCacheStore } from '@/store/cache'

  const { safeAreaInsets, osName } = useCacheStore()
  let bottomInset = osName === 'ios' ? safeAreaInsets!.bottom : 12

  const cardList = [
    {
      cover: loadStaticResource('/nfc/card_disney.png'),
      title: '迪士尼联名卡',
      currentPrice: '¥39',
      beforePrice: '¥59',
      desc: '已售3000+',
    },
    {
      cover: loadStaticResource('/nfc/card_cxs.png'),
      title: '长相思联名卡',
      currentPrice: '¥47',
      beforePrice: '¥68',
      desc: '已售3000+',
    },
  ]
</script>

<template>
  <view class="card-recomend" :style="{ paddingBottom: bottomInset * 2 + 'rpx' }">
    <view class="up">
      <text class="title">出行好物</text>
      <view class="more">
        <text class="desc">敬请期待</text>
      </view>
    </view>
    <view class="down">
      <view v-for="(item, index) in cardList" :key="index" class="card">
        <image class="cover" :src="item.cover" />
        <view class="info">
          <text class="title">{{ item.title }}</text>
          <view class="price">
            <text class="current">{{ item.currentPrice }}</text>
            <text class="before">{{ item.beforePrice }}</text>
          </view>
          <text class="desc">{{ item.desc }}+</text>
        </view>
        <view class="btn">
          <text>立即抢购</text>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .card-recomend {
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
      }
    }
    .down {
      .card {
        position: relative;
        @include o-card;
        padding: 32rpx;
        display: flex;
        align-items: center;
        margin-bottom: 24rpx;
        &:nth-last-child(1) {
          margin: 0;
        }
        .cover {
          width: 196rpx;
          height: 128rpx;
        }
        .info {
          display: flex;
          flex-direction: column;
          margin-left: 24rpx;
          .title {
            font-size: 28rpx;
            font-weight: 500;
            color: $o-b80;
            width: 202rpx;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .price {
            margin-top: 6rpx;
            .current {
              font-size: 32rpx;
              font-weight: 500;
              color: $o-t;
            }
            .before {
              font-size: 24rpx;
              color: $o-b40;
              margin-left: 8rpx;
            }
          }
          .desc {
            margin-top: 6rpx;
            font-size: 20rpx;
            color: $o-b40;
          }
        }
        .btn {
          position: absolute;
          right: 32rpx;
          height: 64rpx;
          padding: 0 32rpx;
          border-radius: 999rpx;
          font-size: 26rpx;
          font-weight: 500;
          color: $o-w;
          background-color: $o-t;
          @include flex-center;
        }
      }
    }
  }
</style>
