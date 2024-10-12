<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { ref } from 'vue'

  defineProps<{
    current: number
  }>()

  uni.hideTabBar()

  const tabbarList = ref([
    {
      pagePath: '/pagesTab/home/index',
      text: '首页',
      iconPath: loadStaticResource('/tabs/home_default.png'),
      selectedIconPath: loadStaticResource('/tabs/home_selected.png'),
    },
    {
      pagePath: '/pages/airplane/index',
      iconPath: loadStaticResource('/tabs/airplane.png'),
    },
    {
      pagePath: '/pagesTab/user/index',
      text: '我的',
      iconPath: loadStaticResource('/tabs/me_default.png'),
      selectedIconPath: loadStaticResource('/tabs/me_selected.png'),
    },
  ])

  const changeSelect = (item: any) => {
    if (item.text) {
      uni.switchTab({ url: item.pagePath })
    } else {
      uni.navigateTo({ url: item.pagePath })
    }
  }
</script>

<template>
  <view class="o-tab">
    <image :src="loadStaticResource('/tabs/bg_airplane.png')" class="bg-airplane" />
    <view v-for="(item, index) in tabbarList" :key="index" class="tab" @click="changeSelect(item)">
      <image :src="current === index ? item.selectedIconPath : item.iconPath" class="image" :class="{ airplane: index === 1 }" />
      <view v-if="item.text" class="text" :class="{ 'text-active': current === index }">{{ item.text }}</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .o-tab {
    width: 750rpx;
    height: calc(98rpx + constant(safe-area-inset-bottom));
    height: calc(98rpx + env(safe-area-inset-bottom));
    background-color: $o-w;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 20;
    .bg-airplane {
      position: absolute;
      top: -30rpx;
      width: 150rpx;
      height: 128rpx;
    }
    .tab {
      flex: 1;
      height: 98rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      .image {
        width: 48rpx;
        height: 48rpx;
        margin-top: 10rpx;
      }
      .text {
        font-size: 20rpx;
        color: $o-b40;
        margin-top: 4rpx;
      }
      .text-active {
        color: $o-t;
      }
      .airplane {
        width: 100rpx;
        height: 100rpx;
        position: absolute;
        top: -30rpx;
        border-radius: 999rpx;
        box-shadow: 0 4rpx 8rpx 0 rgba(8, 116, 80, 0.25);
      }
    }
  }
</style>
