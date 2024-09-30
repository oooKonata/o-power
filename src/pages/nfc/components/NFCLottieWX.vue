<script setup lang="ts">
  import lottie from 'lottie-miniprogram'
  import { onMounted, onUnmounted, ref } from 'vue'

  const lottieWX = ref()

  const initLottieWX = () => {
    uni
      .createSelectorQuery()
      .select('#canvas')
      .node(res => {
        if (res) {
          const canvas = res.node
          const context = canvas.getContext('2d')
          canvas.width = 496
          canvas.height = 496

          lottie.setup(canvas)

          lottieWX.value = lottie.loadAnimation({
            loop: true,
            autoplay: true,
            // animationData: '/o-power/static/lottie/nfc.json',
            rendererSettings: {
              context,
            },
          })
        }
      })
      .exec()
  }

  onMounted(async () => {
    await initLottieWX()
  })

  onUnmounted(() => {
    if (lottieWX.value) {
      lottieWX.value.destroy()
    }
  })
</script>

<template>
  <view class="nfc-lottie__wx">
    <canvas id="canvas" type="2d" />
  </view>
</template>

<style scoped lang="scss">
  .nfc-lottie__wx {
    width: 496rpx;
    height: 496rpx;
  }
</style>
