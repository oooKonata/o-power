<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { useCacheStore } from '@/store/cache'
  import { useUserStore } from '@/store/user'
  import { storeToRefs } from 'pinia'
  import { toRefs } from 'vue'

  const { storeUserInfo, storeIsLogin } = storeToRefs(useUserStore())
  const { safeAreaInsets } = useCacheStore()

  const handleClick = () => {
    if (!storeIsLogin.value) {
      uni.navigateTo({ url: '/pages/login/index' })
    }
  }
</script>

<template>
  <view class="card-user" :style="{ marginTop: `calc(${safeAreaInsets!.top + 44 }px + 12rpx)` }" @click="handleClick">
    <view class="card-user__avatar">
      <image class="avatar" :src="storeIsLogin ? storeUserInfo?.avatar : loadStaticResource('/icons/profile_logout.png')" />
    </view>
    <view class="card-user__info">
      <view class="nickname">{{ storeIsLogin ? storeUserInfo?.nickname : '点击登录' }}</view>
      <view class="desc" :class="{ 'desc-login': storeIsLogin }">{{ storeIsLogin ? '开通会员解锁好礼' : '解锁惊喜会员体验' }}</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .card-user {
    width: $o-width;
    display: flex;
    align-items: center;
    z-index: 2;
    position: relative;
    &__avatar {
      @include flex-center;
      margin-right: 24rpx;
      width: 104rpx;
      height: 104rpx;
      background-color: $o-w;
      border-radius: 50%;
      border: solid 2rpx $o-b20;
      .avatar {
        width: 96rpx;
        height: 96rpx;
      }
    }
    &__info {
      .nickname {
        font-size: 34rpx;
        font-weight: 500;
        color: $o-b80;
      }
      .desc {
        font-size: 26rpx;
        color: $o-t;
        margin-top: 4rpx;
      }
      .desc-login {
        color: $o-rights;
      }
    }
  }
</style>
