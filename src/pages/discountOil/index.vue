<script setup lang="ts">
  import OBg from '@/components/o-bg/o-bg.vue'
  import ONav from '@/components/o-nav/o-nav.vue'
</script>

<template>
  <view class="discount-oil">
    <ONav title="优惠加油" />
    <view class="top">
      <OBg :type="'green_white'" />
    </view>
  </view>
</template>

<style scoped lang="scss"></style>
