<script setup lang="ts">
  import CustomTab from '@/components/CustomTab/CustomTab.vue'
</script>

<template>
  <view class="page">
    <view class="content">这里是我的内容</view>
  </view>
  <CustomTab :current="2" />
</template>

<style scoped lang="scss"></style>
