<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { useLocationStore } from '@/store/location'
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue'

  const props = withDefaults(
    defineProps<{
      position: boolean
      weather: boolean
    }>(),
    {
      position: true,
      weather: true,
    }
  )

  const { storeLocation } = storeToRefs(useLocationStore())

  const handleClick = () => {
    uni.navigateTo({ url: '/pages/location/index' })
  }
</script>

<template>
  <view class="o-search">
    <view class="o-search--search">
      <view v-if="position" class="position" @click="handleClick">
        <text class="ellipsis">{{
          storeLocation!.city.length <= 3 ? storeLocation!.city : storeLocation!.city.slice(0, 2) + '...'
        }}</text>
        <image class="icon" :src="loadStaticResource('/icons/position_more.png')" />
        <view class="sep"></view>
      </view>
      <view class="search">
        <image class="icon" :src="loadStaticResource('/icons/search.png')" />
        <input type="text" class="input" placeholder="搜索油站" placeholder-style="font-size:28rpx;color:#999999" />
      </view>
    </view>
    <view v-if="weather" class="o-search--weather">
      <text>晴朗</text>
      <image class="icon" :src="loadStaticResource('/weather/sunny.png')" />
    </view>
  </view>
</template>

<style scoped lang="scss">
  .o-search {
    display: flex;
    align-items: center;
    padding: 0 32rpx;
    &--search {
      width: 100%;
      height: 64rpx;
      border-radius: 99rpx;
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0 24rpx;
      .position {
        display: flex;
        align-items: center;
        color: $o-b80;
        font-size: 28rpx;
        margin-left: 4rpx;
        .icon {
          width: 16rpx;
          height: 16rpx;
          margin: 0 16rpx 0 4rpx;
        }
      }
      .sep {
        width: 1rpx;
        height: 28rpx;
        background-color: $o-b20;
        margin-right: 16rpx;
      }
      .search {
        display: flex;
        align-items: center;
        .icon {
          width: 32rpx;
          height: 32rpx;
          margin-right: 12rpx;
          flex-shrink: 0;
        }
        .input {
          width: 100%;
          height: 64rpx;
        }
      }
    }
    &--weather {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: 24rpx;
      color: $o-b60;
      font-size: 26rpx;
      .icon {
        width: 40rpx;
        height: 40rpx;
        margin-left: 4rpx;
      }
    }
  }
</style>
