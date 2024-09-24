<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { ref } from 'vue'

  const flag = ref<number>(0)

  withDefaults(
    defineProps<{
      height?: number
      autoplay?: boolean
      circular?: boolean
      urls?: string[]
    }>(),
    {
      height: 534,
      autoplay: true,
      circular: true,
      urls: () => [],
    }
  )

  const handleChange = (e: any) => {
    flag.value = e.detail.current
  }
</script>

<template>
  <view class="o-swiper">
    <image
      class="o-swiper__image"
      :style="{ height: height + 'rpx' }"
      v-if="true"
      :src="loadStaticResource('/banner/reward.png')" />
    <swiper
      v-if="urls.length"
      :style="{ height: height + 'rpx' }"
      autoplay
      circular
      @change="handleChange">
      <swiper-item v-for="(url, index) in urls" :key="index">
        <image class="o-swiper__image" :src="url" />
      </swiper-item>
    </swiper>
    <view class="o-swiper__dots" v-if="urls.length">
      <view
        class="o-swiper__dot"
        :class="{ active: flag === index }"
        v-for="(item, index) in urls"
        :key="index"></view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .o-swiper {
    position: relative;
    background-color: red;
    width: 750rpx;
    &__image {
      width: 100%;
      height: 100%;
    }
    &__dots {
      position: absolute;
      right: 32rpx;
      bottom: 110rpx;
      display: flex;
      .active {
        background-color: $o-w;
      }
    }
    &__dot {
      width: 12rpx;
      height: 12rpx;
      background-color: $o-w50;
      border-radius: 50%;
      margin-right: 8rpx;
      &:nth-last-child(1) {
        margin: 0;
      }
    }
  }
</style>
