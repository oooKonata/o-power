<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { storeToRefs } from 'pinia'
  import { useUserStore } from '@/store/user'

  const { storeIsLogin, storeUserInfo } = storeToRefs(useUserStore())

  const login = () => {
    if (!storeIsLogin.value) {
      uni.navigateTo({ url: '/pages/login/index' })
    }
  }
</script>

<template>
  <!-- 未登录 -->
  <view v-if="!storeIsLogin" class="content">
    <image class="bg" :src="loadStaticResource('/icons/bg_member_login.png')" />
    <view class="logout-left">
      <image class="logo" :src="loadStaticResource('/icons/logo_xhdl_brand.png')" />
      <text class="text">登录入会 解锁更多权益</text>
    </view>
    <view class="logout-right" @click="login">
      <text class="text">登录/注册</text>
    </view>
  </view>
  <!-- 已登录 -->
  <view v-else-if="storeIsLogin" class="content">
    <view class="login-left">
      <view class="border">
        <image class="avatar" :src="storeUserInfo?.avatar" />
      </view>
      <view class="info">
        <text class="text">{{ storeUserInfo?.nickname }}</text>
        <view class="desc">
          <text class="text">开通会员享好礼</text>
          <image class="more" :src="loadStaticResource('/icons/more_rights_small.png')" />
        </view>
      </view>
    </view>
    <view class="login-right">
      <text class="text">8张优惠券</text>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .content {
    z-index: 2;
    height: 172rpx;
    @include o-card;
    margin-top: -86rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 32rpx;
    .bg {
      z-index: -1;
      position: absolute;
      height: 100%;
      width: 404rpx;
      right: 0;
    }
    .logout-left {
      display: flex;
      flex-direction: column;
      .logo {
        height: 52rpx;
        width: 272rpx;
      }
      .text {
        font-size: 28rpx;
        margin-top: 12rpx;
        color: $o-b80;
      }
    }
    .logout-right {
      background-color: #3c3832;
      color: $o-w;
      font-size: 26rpx;
      height: 64rpx;
      border-radius: 999rpx;
      display: flex;
      align-items: center;
      .text {
        margin: 0 32rpx;
      }
    }

    .login-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .border {
        width: 104rpx;
        height: 104rpx;
        border-radius: 50%;
        border: 2rpx solid rgba(227, 187, 141);
        display: flex;
        justify-content: center;
        align-items: center;
        .avatar {
          width: 96rpx;
          height: 96rpx;
          border-radius: 50%;
        }
      }
      .info {
        font-size: 34rpx;
        font-weight: 500;
        color: $o-b80;
        margin-left: 24rpx;
        .desc {
          font-size: 26rpx;
          font-weight: 400;
          color: $o-rights;
          margin-top: 7rpx;
          display: flex;
          align-items: center;
          .more {
            width: 16rpx;
            height: 32rpx;
            margin-left: 2rpx;
          }
        }
      }
    }
    .login-right {
      background-color: $o-t;
      color: $o-w;
      font-size: 26rpx;
      height: 64rpx;
      border-radius: 999rpx;
      display: flex;
      align-items: center;
      .text {
        margin: 0 32rpx;
      }
    }
  }
</style>
