<script setup lang="ts">
  import CardUser from './components/CardUser.vue'
  import OBg from '@/components/o-bg/o-bg.vue'
  import CardHolder from './components/CardHolder.vue'
  import CardCar from './components/CardCar.vue'
  import CardFunction from './components/CardFunction.vue'
  import OTabbar from '@/components/o-tabbar/o-tabbar.vue'
</script>

<template>
  <view class="page">
    <OBg type="blue" />
    <CardUser />
    <CardHolder />
    <CardCar />
    <CardFunction />
    <OTabbar :current="2" />
  </view>
</template>

<style scoped lang="scss">
  .page {
    @include flex-column-center;
  }
</style>
