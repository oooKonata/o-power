<script setup lang="ts">
  import Lottie from 'lottie-web'
  import nfcData from '@/static/lottie/nfc.json'
  import { onMounted, onUnmounted, ref } from 'vue'

  const dom = ref()
  const lottleH5 = ref()

  onMounted(() => {
    lottleH5.value = Lottie.loadAnimation({
      container: dom.value,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: nfcData,
      // path: '/o-power/static/lottie/nfc.json',
    })
  })

  onUnmounted(() => {
    lottleH5.value.destroy()
  })
</script>

<template>
  <div ref="dom" class="nfc-lottie__h5"></div>
</template>

<style scoped lang="scss">
  .nfc-lottie__h5 {
    width: 496rpx;
    height: 496rpx;
  }
</style>
