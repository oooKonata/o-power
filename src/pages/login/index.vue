<script setup lang="ts">
  import { h5Login } from '@/api/user'
  import { loadStaticResource } from '@/assets'
  import oNav from '@/components/o-nav.vue'
  import { ref } from 'vue'

  const phone = ref<string>()
  const captcha = ref<string>()

  const isChecked = ref<boolean>(false)

  const handelClick = () => {
    console.log(phone.value, captcha.value, '登录成功')
    h5Login({ phone: phone, captcha: captcha })
  }
</script>

<template>
  <view class="page">
    <o-nav icon />
    <view class="top">
      <image class="banner" :src="loadStaticResource('/banner/login.png')" mode="aspectFit" />
    </view>
    <text class="title">验证码登录</text>
    <view class="input-box phone">
      <input v-model="phone" type="number" placeholder="手机号" placeholder-style="font-size:30rpx; color:#b3b3b3" />
      <text class="desc">选择授权手机号</text>
    </view>
    <view class="input-box captcha">
      <input v-model="captcha" type="number" placeholder="验证码" placeholder-style="font-size:30rpx; color:#b3b3b3" />
      <text class="desc">获取验证码</text>
    </view>
    <view class="btn login" @click="handelClick">登录</view>
    <view class="btn quick-login">手机号一键登录</view>
    <text class="register">注册账号</text>
    <view class="bottom">
      <image
        class="radio"
        :src="isChecked ? loadStaticResource('/icons/selected.png') : loadStaticResource('/icons/unselect.png')"
        @click="isChecked = !isChecked"
        mode="scaleToFill" />
      <text>我已阅读并同意</text>
      <text class="protocol">《星和动力隐私政策》</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .top {
      margin-top: calc(-88rpx - constant(safe-area-inset-top));
      margin-top: calc(-88rpx - env(safe-area-inset-top));
      .banner {
        width: 750rpx;
        height: 604rpx;
      }
    }
    .title {
      margin: 16rpx auto 40rpx;
      font-size: 34rpx;
      color: $o-b80;
    }
    .input-box {
      @include o-card;
      height: 108rpx;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: $o-b80;
      padding: 32rpx;
      .desc {
        font-size: 26rpx;
        color: $o-t;
      }
    }
    .phone {
      margin-bottom: 24rpx;
    }
    .btn {
      width: 590rpx;
      height: 80rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 999rpx;
      font-size: 28rpx;
    }
    .login {
      margin: 48rpx auto 24rpx;
      background-color: $o-t;
      color: $o-w;
    }
    .quick-login {
      border: 1rpx solid $o-b20;
      color: $o-b80;
    }
    .register {
      font-size: 26rpx;
      color: $o-t;
      margin-top: 40rpx;
    }
    .bottom {
      display: flex;
      align-items: center;
      font-size: 26rpx;
      color: $o-b60;
      position: absolute;
      bottom: calc(64rpx + constant(safe-area-inset-bottom));
      bottom: calc(64rpx + env(safe-area-inset-bottom));
      .radio {
        width: 40rpx;
        height: 40rpx;
        margin-right: 8rpx;
      }
      .protocol {
        color: $o-t;
      }
    }
  }
</style>
