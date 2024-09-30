<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { useCacheStore } from '@/store/cache'
  import { computed } from 'vue'

  const { safeAreaInsets } = useCacheStore()

  const cellList = [
    {
      icon: loadStaticResource('/user/order.png'),
      title: '我的订单',
      url: '/pages/order/index',
    },
    {
      icon: loadStaticResource('/user/invoice.png'),
      title: '发票管理',
      url: '/pages/invoice/index',
    },
    {
      icon: loadStaticResource('/user/exchange.png'),
      title: '兑换中心',
      url: '/pages/exchange/index',
    },
    {
      icon: loadStaticResource('/user/service.png'),
      title: '专属客服',
      url: '/pages/service/index',
    },
    {
      icon: loadStaticResource('/user/set.png'),
      title: '设置',
      url: '/pages/set/index',
    },
  ]

  const listGroup = computed(() => [cellList.slice(0, 3), cellList.slice(3)])

  const handelClick = (url: string) => {
    uni.navigateTo({ url: url })
  }
</script>

<template>
  <view class="card-function" :style="{paddingBottom:`calc(${safeAreaInsets!.bottom}px + 152rpx)`}">
    <view class="card-function__title">
      <text>常用功能</text>
    </view>
    <view v-for="(group, index) in listGroup" :key="index" class="card-function__group">
      <view v-for="(item, index) in group" :key="index" class="cell" @click="handelClick(item.url)">
        <view class="left">
          <image class="icon" :src="item.icon" />
          <text>{{ item.title }}</text>
        </view>
        <image class="arrow" :src="loadStaticResource('/icons/more.png')" />
        <view v-if="index !== group.length - 1" class="sep"></view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .card-function {
    width: $o-width;

    &__title {
      height: 108rpx;
      font-size: 32rpx;
      color: $o-b80;
      padding: 32rpx 0;
    }
    &__group {
      background-color: $o-w;
      border-radius: 16rpx;
      margin-bottom: 24rpx;
      &:nth-last-child(1) {
        margin: 0;
      }
      .cell {
        position: relative;
        height: 108rpx;
        padding: 32rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left {
          font-size: 30rpx;
          color: $o-b80;
          display: flex;
          align-items: center;
          .icon {
            width: 48rpx;
            height: 48rpx;
            margin-right: 24rpx;
          }
        }
        .arrow {
          width: 16rpx;
          height: 32rpx;
        }
        .sep {
          position: absolute;
          bottom: 0;
          left: 104rpx;
          width: 550rpx;
          height: 1rpx;
          background-color: $o-b10;
        }
      }
    }
  }
</style>
