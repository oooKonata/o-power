<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { useLocationStore } from '@/store/location'
  import { useWeatherStore } from '@/store/weather'
  import { storeToRefs } from 'pinia'
  import { onMounted, ref, watch } from 'vue'

  const props = withDefaults(
    defineProps<{
      type?: 'dark' | 'light'
      position?: boolean
      weather?: boolean
      placeholder: string
      modelValue?: string
    }>(),
    {
      type: 'dark',
      placeholder: '搜索',
    }
  )

  const emits = defineEmits<{
    (e: 'confirm', value: string): void
  }>()

  const { storeLocation } = storeToRefs(useLocationStore())
  const { storeWeather } = storeToRefs(useWeatherStore())
  const { getWeather } = useWeatherStore()

  const handleClick = () => {
    uni.navigateTo({ url: '/pages/location/index' })
  }

  watch(storeLocation, () => {
    getWeather()
  })

  const handleConfirm = (e: any) => {
    emits('confirm', e.detail.value)
  }

  onMounted(() => {
    if (props.position) {
      getWeather()
    }
  })
</script>

<template>
  <view class="o-search">
    <view class="o-search--search" :class="type === 'dark' ? 'o-search--search__dark' : 'o-search--search__light'">
      <view v-if="position" class="position" @click="handleClick">
        <text class="ellipsis">{{
          storeLocation!.city.length <= 3 ? storeLocation!.city : storeLocation!.city.slice(0, 2) + '...'
        }}</text>
        <image class="icon" :src="loadStaticResource('/icons/position_more.png')" />
        <view class="sep"></view>
      </view>
      <view class="search">
        <image class="icon" :src="loadStaticResource('/icons/search.png')" />
        <input
          type="text"
          :value="modelValue"
          class="input"
          :placeholder="placeholder"
          placeholder-style="font-size:28rpx;color:#999999"
          @confirm="handleConfirm" />
      </view>
    </view>
    <view v-if="weather" class="o-search--weather">
      <text>{{ storeWeather?.title }}</text>
      <image class="icon" :src="loadStaticResource(storeWeather!.icon)" />
    </view>
  </view>
</template>

<style scoped lang="scss">
  .o-search {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 32rpx;
    &--search {
      width: 100%;
      height: 64rpx;
      border-radius: 99rpx;
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0 24rpx;
      .position {
        display: flex;
        align-items: center;
        color: $o-b80;
        font-size: 28rpx;
        margin-left: 4rpx;
        .icon {
          width: 16rpx;
          height: 16rpx;
          margin: 0 16rpx 0 4rpx;
        }
      }
      .sep {
        width: 1rpx;
        height: 28rpx;
        background-color: $o-b20;
        margin-right: 16rpx;
      }
      .search {
        display: flex;
        align-items: center;
        .icon {
          width: 32rpx;
          height: 32rpx;
          margin-right: 12rpx;
          flex-shrink: 0;
        }
        .input {
          width: 100%;
          height: 64rpx;
          color: $o-b80;
          font-size: 28rpx;
        }
      }
      &__dark {
        background-color: #fff;
      }
      &__light {
        background-color: $o-bg;
      }
    }
    &--weather {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      margin-left: 24rpx;
      color: $o-b60;
      font-size: 26rpx;
      .icon {
        width: 40rpx;
        height: 40rpx;
        margin-left: 4rpx;
      }
    }
  }
</style>
