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
  }
</style>
