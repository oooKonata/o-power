<script setup lang="ts">
  import OSwiper from '@/components/o-swiper/o-swiper.vue'
  import type { BANNER_TYPE } from '@/enums'
  import { useCacheStore } from '@/store/cache'
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'

  const props = defineProps<{
    size: 'normal' | 'big'
    type: BANNER_TYPE
    autoplay?: boolean
  }>()

  const { storeBannerList } = storeToRefs(useCacheStore())

  const list = computed(() => storeBannerList.value?.[props.type] || [])
  const urls = computed(() => list.value.map(item => item.img))
</script>

<template>
  <OSwiper :size="size" :urls="urls" :autoplay="autoplay" />
</template>

<style scoped lang="scss"></style>
