<script setup lang="ts">
  import { ref } from 'vue'

  defineProps<{
    unfinishedOrderNum: number
  }>()
</script>

<template>
  <view v-if="unfinishedOrderNum" class="order-notice">
    <text>您有{{ unfinishedOrderNum }}笔未完成的充值订单</text>
    <text class="btn">重新充值</text>
  </view>
</template>

<style scoped lang="scss">
  .order-notice {
    margin-top: 24rpx;
    @include o-card;
    height: 64rpx;
    padding: 0 32rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24rpx;
    color: $o-b80;
    .btn {
      color: $o-t;
    }
  }
</style>
