<script setup lang="ts">
  import lottie from 'lottie-miniprogram'
  import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'
  import nfcData from '@/static/lottie/nfc.json'

  const lottieWX = ref()

  const init = async () => {
    uni
      .createSelectorQuery()
      .in(getCurrentInstance()!)
      .select('#lottie')
      .node((res: any) => {
        const canvas = res.node
        const ctx = canvas.getContext('2d')

        const dpr = uni.getSystemInfoSync().pixelRatio
        canvas.width = 496 * dpr
        canvas.height = 496 * dpr
        ctx.scale(dpr, dpr)

        lottie.setup(canvas)
        lottieWX.value = lottie.loadAnimation({
          loop: true,
          autoplay: true,
          animationData: nfcData,
          rendererSettings: {
            context: ctx,
          },
        })
      })
      .exec()
  }

  onMounted(async () => {
    await init()
  })

  onUnmounted(() => {
    if (lottieWX.value) {
      lottieWX.value.destroy()
    }
  })
</script>

<template>
  <canvas id="lottie" class="lottie" type="2d" />
</template>

<style scoped lang="scss">
  .lottie {
    width: 496rpx;
    height: 496rpx;
  }
</style>
