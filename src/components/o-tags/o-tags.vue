<script setup lang="ts">
  import { computed, onMounted, ref, watch, type CSSProperties } from 'vue'

  const props = withDefaults(
    defineProps<{
      list?: string[]
      current?: number
      gap?: string
      itemStyles?: CSSProperties
    }>(),
    {
      list: () => ['标签1', '标签2', '标签3'],
      current: undefined,
      gap: '16rpx',
      itemStyles: () => ({}),
    }
  )

  const emit = defineEmits<{
    (e: 'update:current', index: number): void
    (e: 'change', index: number, item: string): void
  }>()

  const contextStyle = computed(() => ({ gap: props.gap }))

  const _current = ref(0)

  const handleClick = (index: number, item: string) => {
    if (props.current === undefined) {
      _current.value = index
      console.log(111)
    } else {
      emit('update:current', index)
      _current.value = props.current
      console.log('222', _current.value)
    }
  }
</script>

<template>
  <view class="o-tags">
    <scroll-view scroll-x class="o-tags__scroll">
      <view class="o-tags__scroll__context" :style="contextStyle">
        <view
          v-for="(item, index) in list"
          :key="index"
          class="o-tags__scroll__context__item"
          :style="itemStyles"
          :class="{ 'o-tags--active': index === _current }"
          @click="handleClick(index, item)">
          {{ item }}
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style scoped lang="scss">
  .o-tags {
    &__scroll {
      &__context {
        display: flex;
        &__item {
          display: flex;
          justify-content: center;
          align-items: center;
          color: $o-b40;
          font-size: 24rpx;
          height: 48rpx;
          padding: 0 24rpx;
          border-radius: 999rpx;
          background-color: #fff;
          border: 1rpx solid transparent;
        }
      }
    }
    &--active {
      color: $o-t !important;
      font-weight: 700;
      background-color: $o-t-bg !important;
      border: 1rpx solid $o-t !important;
    }
  }
</style>
