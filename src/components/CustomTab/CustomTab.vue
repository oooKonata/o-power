<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { ref } from 'vue'

  uni.hideTabBar()

  const tabbarList = ref([
    {
      pagePath: '/pages/home/index',
      text: '首页',
      iconPath: loadStaticResource('/tabs/home_selected.png'),
      selectedIconPath: loadStaticResource('/tabs/home_selected.png'),
    },
    {
      pagePath: '/pages/airplane/index',
      iconPath: loadStaticResource('/tabs/airplane.png'),
    },
    {
      pagePath: '/pages/user/index',
      text: '我的',
      iconPath: loadStaticResource('/tabs/me_default.png'),
      selectedIconPath: loadStaticResource('/tabs/me_selected.png'),
    },
  ])
</script>

<template>
  <view class="content">
    <image :src="loadStaticResource('/tabs/bg_airplane.png')" class="bg-airplane" />
    <view v-for="(item, index) in tabbarList" :key="index" class="tab">
      <image :src="item.iconPath" class="image" :class="{ airplane: index === 1 }" />
      <view v-if="item.text" class="text">{{ item.text }}</view>
    </view>
  </view>
</template>

<!-- <template>
  <view class="content">
    <view class="tabs">
      <view class="tab">
        <image :src="loadStaticResource('/tabs/home_selected.png')" mode="aspectFit" />
        <text style="color: #189269">首页</text>
      </view>
      <view class="tab">
        <image class="bg-airplane" :src="loadStaticResource('/tabs/bg_airplane.png')" mode="aspectFit" />
        <image class="airplane" :src="loadStaticResource('/tabs/airplane.png')" mode="aspectFit" />
      </view>
      <view class="tab">
        <image :src="loadStaticResource('tabs/me_default.png')" mode="aspectFit" />
        <text>我的</text>
      </view>
    </view>
    <view class="fix"> </view>
  </view>
</template> -->

<style scoped lang="scss">
  .content {
    width: 750rpx;
    height: 98rpx;
    background-color: $o-w;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 20;
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    .bg-airplane {
      position: absolute;
      bottom: 0;
      width: 150rpx;
      height: 128rpx;
    }
    .tab {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      .image {
        width: 48rpx;
        height: 48rpx;
      }
      .text {
        font-size: 20rpx;
        color: $o-b40;
      }
      .airplane {
        width: 100rpx;
        height: 100rpx;
        position: absolute;
        bottom: 18rpx;
        border-radius: 999rpx;
        box-shadow: 0 4rpx 8rpx 0 rgba(8, 116, 80, 0.25);
      }
    }
  }

  // .content {
  //   position: fixed;
  //   bottom: 0;
  //   left: 0;
  //   .tabs {
  //     font-size: 20rpx;
  //     color: $o-b40;
  //     display: flex;
  //     justify-content: center;
  //     align-items: end;
  //     .tab {
  //       width: 250rpx;
  //       height: 98rpx;
  //       display: flex;
  //       flex-direction: column;
  //       justify-content: center;
  //       align-items: center;
  //       background-color: $o-w;
  //       position: relative;
  //       image {
  //         width: 48rpx;
  //         height: 48rpx;
  //       }
  //       text {
  //         margin-top: 4rpx;
  //       }
  //       .airplane {
  //         width: 100rpx;
  //         height: 100rpx;
  //         position: absolute;
  //         bottom: 18rpx;
  //       }
  //       .bg-airplane {
  //         position: absolute;
  //         bottom: 0;
  //         width: 150rpx;
  //         height: 128rpx;
  //       }
  //     }
  //   }
  //   .fix {
  //     width: 750rpx;
  //     height: constant(safe-area-inset-bottom);
  //     height: env(safe-area-inset-bottom);
  //     background-color: $o-w;
  //   }
  // }
</style>
