<script setup lang="ts">
  import ONav from '@/components/o-nav/o-nav.vue'
  import { BANNER_TYPE } from '@/enums'
  import CardNFC from './components/CardNFC.vue'
  import OrderNotice from './components/OrderNotice.vue'
  import CardGrid from './components/CardGrid.vue'
  import CardCoupon from './components/CardCoupon.vue'
  import CardRecomend from './components/CardRecomend.vue'
  import BannerSwiper from '@/components/BannerSwiper.vue'
</script>

<template>
  <view class="nfc">
    <ONav />
    <BannerSwiper size="big" :type="BANNER_TYPE.HOME_TOP" />
    <CardNFC />
    <OrderNotice :unfinishedOrderNum="1" />
    <CardGrid />
    <CardCoupon />
    <CardRecomend />
  </view>
</template>

<style scoped lang="scss">
  .nfc {
    @include flex-column-center;
    padding-bottom: calc(32rpx + constant(safe-area-inset-bottom));
    padding-bottom: calc(32rpx + env(safe-area-inset-bottom));
  }
</style>
