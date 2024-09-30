<script setup lang="ts">
  import OTab from '@/components/o-tab/o-tab.vue'
  import CardUser from './components/CardUser.vue'
  import OBg from '@/components/o-bg/o-bg.vue'
  import CardHolder from './components/CardHolder.vue'
  import CardCar from './components/CardCar.vue'
  import CardFunction from './components/CardFunction.vue'
</script>

<template>
  <view class="page">
    <OBg type="blue" />
    <CardUser />
    <CardHolder />
    <CardCar />
    <CardFunction />
    <OTab :current="2" />
  </view>
</template>

<style scoped lang="scss">
  .page {
    @include flex-column-center;
  }
</style>
