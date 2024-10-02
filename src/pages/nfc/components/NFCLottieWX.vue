<script setup lang="ts">
  import lottie from 'lottie-miniprogram'
  import { onMounted, onUnmounted, ref } from 'vue'
  import nfcData from '@/static/lottie/nfc.json'

  onMounted(async () => {
    await wx
      .createSelectorQuery()
      .select('#canvas')
      .node(res => {
        if (res) {
          const canvas = res.node

          console.log('canvas', canvas)

          // const ctx = canvas.getContext('2d')
          // const dpr = wx.getSystemInfoSync().pixelRatio

          // canvas.width = 496 * dpr
          // canvas.height = 496 * dpr

          // lottie.setup(canvas)

          // lottie.loadAnimation({
          //   loop: true,
          //   autoplay: true,
          //   animationData: nfcData,
          //   rendererSettings: {
          //     context: ctx,
          //   },
          // })
        }
      })
      .exec()
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
