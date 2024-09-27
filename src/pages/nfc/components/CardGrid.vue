<script setup lang="ts">
  import { loadStaticResource } from '@/assets'

  const cardList = [
    {
      icon: loadStaticResource('/nfc/balance.png'),
      title: '余额查询',
      url: '',
    },
    {
      icon: loadStaticResource('/nfc/record.png'),
      title: '充值记录',
      url: '',
    },
    {
      icon: loadStaticResource('/nfc/service.png'),
      title: '在线客服',
    },
    {
      icon: loadStaticResource('/nfc/method.png'),
      title: '使用攻略',
      url: '',
    },
  ]
</script>

<template>
  <view class="card-grid">
    <view v-for="(item, index) in cardList" :key="index" class="card">
      <image class="icon" :src="item.icon" />
      <text>{{ item.title }}</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .card-grid {
    margin-top: 24rpx;
    width: $o-width;
    display: flex;
    gap: 24rpx;
    .card {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 24rpx;
      color: $o-b80;
      background-color: $o-w;
      padding: 28rpx 0 32rpx 0;
      border-radius: 16rpx;
      .icon {
        width: 64rpx;
        height: 64rpx;
        margin-bottom: 6rpx;
      }
    }
  }
</style>
