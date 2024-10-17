<script setup lang="ts">
  import OBg from '@/components/o-bg/o-bg.vue'
  import ONav from '@/components/o-nav/o-nav.vue'
  import OSearch from '@/components/o-search/o-search.vue'
  import { useCacheStore } from '@/store/cache'

  const { safeAreaInsets } = useCacheStore()
</script>

<template>
  <view class="discount-oil">
    <ONav title="优惠加油" />
    <view class="top">
      <OBg :type="'green_white'" />
      <OSearch class="o-search" :style="{paddingTop:`calc(${safeAreaInsets!.top + 44}px + 20rpx)`}" />
    </view>
  </view>
</template>

<style scoped lang="scss">
  .discount-oil {
    .top {
      .o-search {
        z-index: 99;
        position: relative;
      }
    }
  }
</style>
