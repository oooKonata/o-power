<script setup lang="ts">
  import { loadStaticResource } from '@/assets'
  import { computed, ref } from 'vue'

  const cardList = ref([
    {
      icon: loadStaticResource('/home/icon_nfc.png'),
      title: '星和出行',
      url: '/pages/nfc/index',
    },
    {
      icon: loadStaticResource('/home/icon_rights.png'),
      title: '生活权益',
      url: '',
    },
    {
      icon: loadStaticResource('/home/icon_drive.png'),
      title: '专业代驾',
      url: '',
    },
    {
      icon: loadStaticResource('/home/icon_coupon.png'),
      title: '优惠券',
      url: '',
    },
    {
      icon: loadStaticResource('/home/icon_charge.png'),
      title: '充电桩',
      url: '',
    },
    {
      icon: loadStaticResource('/home/icon_union.png'),
      title: '联通王卡',
      url: '',
    },
  ])

  const listGroup = computed(() => [cardList.value.slice(0, 4), cardList.value.slice(4)])

  const current = ref(0)
  const handleChange = (e: any) => {
    current.value = e.detail.current
  }

  const handleClick = (url: string) => {
    uni.navigateTo({ url: url })
  }
</script>

<template>
  <view class="card-grid">
    <swiper class="swiper" @change="handleChange">
      <swiper-item v-for="(list, index) in listGroup" :key="index" class="swiper-item">
        <view class="group">
          <view v-for="(item, index) in list" :key="index" class="item" @click="handleClick(item.url)">
            <image class="icon" :src="item.icon" />
            <text>{{ item.title }}</text>
          </view>
        </view>
      </swiper-item>
    </swiper>
    <view class="dots">
      <view v-for="(item, index) in listGroup" :key="index" class="dot" :class="{ active: current === index }"></view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .card-grid {
    @include o-card;
    margin-top: 24rpx;
    position: relative;
    .swiper {
      height: 204rpx;
      .swiper-item {
        display: flex;
        justify-content: center;
        .group {
          width: 600rpx;
          display: flex;
          margin-top: 24rpx;
          .item {
            @include flex-column-center;
            font-size: 24rpx;
            color: $o-b80;
            margin-right: 72rpx;
            &:nth-last-child(1) {
              margin-right: 0;
            }
            .icon {
              width: 96rpx;
              height: 96rpx;
              margin-bottom: 6rpx;
            }
          }
        }
      }
    }
    .dots {
      position: absolute;
      bottom: 20rpx;
      width: 48rpx;
      height: 6rpx;
      border-radius: 999rpx;
      background-color: $o-b8;
      display: flex;
      align-items: center;
      margin-left: 50%;
      transform: translateX(-50%);
      .dot {
        width: 50%;
        height: 100%;
        border-radius: 999rpx;
      }
      .active {
        background-color: $o-t;
      }
    }
  }
</style>
