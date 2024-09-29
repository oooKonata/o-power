<script setup lang="ts">
  import lottie from 'lottie-miniprogram'
  import { onMounted, ref } from 'vue'

  const canvas = ref()
  const canvas2 = ref()
  const lottieWX = ref()

  lottie.loadAnimation

  onMounted(() => {
    // lottieWX.value = lottie.setup(canvas.value)
    console.log('111', canvas.value)
    console.log('222', canvas2.value)

    // lottieWX.value?.loadAnimation({
    //   renderer: 'canvas',
    //   loop: true,
    //   autoplay: true,
    //   rendererSettings: ,
    //   path: '',
    // })
  })
</script>

<template>
  <view ref="canvas2" class="nfc-lottie__wx"></view>
  <canvas ref="canvas" class="nfc-lottie__wx" type="2d"></canvas>
</template>

<style scoped lang="scss"></style>
