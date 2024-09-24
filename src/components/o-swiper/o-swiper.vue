<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { computed, ref } from 'vue'

  const props = withDefaults(
    defineProps<{
      size: 'normal' | 'big'
      autoplay?: boolean

      urls: string[]
    }>(),
    {
      autoplay: false,
    }
  )

  console.log(props.size === 'big')

  const flag = ref<number>(0)
  const handleChange = (e: any) => {
    flag.value = e.detail.current
  }
</script>

<template>
  <view class="o-swiper">
    <swiper :class="{ 'o-swiper__image--big': size === 'big', 'o-swiper__image--normal': size === 'normal' }" @change="handleChange">
      <swiper-item v-for="(url, index) in urls" :key="index">
        <image class="img" :src="url" />
      </swiper-item>
    </swiper>
    <view class="o-swiper__dots">
      <view v-for="(item, index) in urls" :key="index" class="o-swiper__dot" :class="{ active: flag === index }" />
    </view>
  </view>
</template>

<style scoped lang="scss">
  .o-swiper {
    position: relative;
    &__image {
      &--big {
        width: 750rpx;
        height: 534rpx;
        .img {
          width: 100%;
          height: 100%;
        }
      }
      &--normal {
        width: 750rpx;
        height: 216rpx;
        display: flex;
        justify-content: center;

        .img {
          width: $o-width;
          height: 100%;
          padding: 0 32rpx;
        }
      }
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
