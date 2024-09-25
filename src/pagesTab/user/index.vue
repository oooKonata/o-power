<script setup lang="ts">
  import OTab from '@/components/o-tab/o-tab.vue'
  import CardUser from './components/CardUser.vue'
  import OBg from '@/components/o-bg/o-bg.vue'
</script>

<template>
  <view class="page">
    <OBg type="blue" />
    <CardUser />
    <OTab :current="2" />
  </view>
</template>

<style scoped lang="scss">
  .page {
    @include flex-column-center;
    .img {
      width: 750rpx;
      height: 534rpx;
    }
  }
</style>
