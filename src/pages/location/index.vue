<script setup lang="ts">
  import { getCityListWithPy, getHotCityList } from '@/api/common'
  import type { City, CityListWithPy } from '@/api/types/common'
  import { loadStaticResource } from '@/assets'
  import ONav from '@/components/o-nav/o-nav.vue'
  import { useCacheStore } from '@/store/cache'
  import { useLocationStore } from '@/store/location'
  import { onLoad, onPageScroll } from '@dcloudio/uni-app'
  import { storeToRefs } from 'pinia'
  import { nextTick, ref } from 'vue'

  const { storeLocation } = storeToRefs(useLocationStore())
  const { safeAreaInsets } = useCacheStore()

  const cityList = ref<CityListWithPy[]>([])
  const hotCityList = ref<City[]>([])
  const cellPageYList = ref<number[]>([])
  const letterPageYList = ref<number[]>([])
  const currentIndex = ref(0)
  const isScroll = ref(false)

  const chooseCity = ({ code, item, provinceCode, province }: City) => {
    storeLocation.value = {
      ...storeLocation.value!,
      ...{ provinceCode, province, cityCode: code, city: item },
    }
    uni.navigateBack()
  }

  const touchStart = () => {
    isScroll.value = true
  }
  const touchEnd = () => {
    isScroll.value = false
  }
  const touchMove = (e: any) => {
    if (e.changedTouches.length !== 1) return
    let index = letterPageYList.value.findIndex(item => item > e.changedTouches[0].clientY)
    if (index === -1) index = letterPageYList.value.length
    currentIndex.value = index - 1 <= 0 ? 0 : index - 1

    let scrollTop = cellPageYList.value[currentIndex.value] - safeAreaInsets!.top - 44
    uni.pageScrollTo({
      scrollTop: scrollTop,
      // selector: `.mark${currentIndex.value}`,
      duration: 0,
    })
  }

  onPageScroll(e => {
    // 右边touchMove执行时，不执行页面滚动钩子
    if (isScroll.value) return

    let index = cellPageYList.value.findIndex(item => item > e.scrollTop + safeAreaInsets!.top + 44)

    if (index === -1) index = cellPageYList.value.length
    currentIndex.value = index - 1 <= 0 ? 0 : index - 1
  })

  const handleConfirm = (e: any) => {
    init({ keyword: e.detail.value })
  }

  const init = async (params: { keyword?: string } = {}) => {
    cityList.value = await getCityListWithPy(params)
    hotCityList.value = await getHotCityList()
    nextTick(() => {
      getPageYList()
    })
  }

  const getPageYList = () => {
    uni
      .createSelectorQuery()
      .selectAll('.cell')
      .boundingClientRect()
      .exec((res: any) => {
        cellPageYList.value = res[0].map((item: any) => item.top)
      })

    uni
      .createSelectorQuery()
      .selectAll('.letter')
      .boundingClientRect()
      .exec((res: any) => {
        letterPageYList.value = res[0].map((item: any) => item.top)
      })
  }

  onLoad(() => {
    init()
  })
</script>

<template>
  <view class="page">
    <ONav title="选择位置" type="close" hasBgColor />
    <view class="content" :style="{paddingTop:`calc(${safeAreaInsets!.top + 44}px)`}">
      <view class="search">
        <image class="icon" :src="loadStaticResource('/icons/search.png')" />
        <input
          type="text"
          class="input"
          placeholder="搜索城市"
          placeholder-style="font-size:28rpx; color:#999999"
          confirm-type="search"
          @confirm="handleConfirm" />
      </view>
      <view class="position">
        <text class="title">当前定位</text>
        <view class="option current">
          <image class="icon" :src="loadStaticResource('/icons/location.png')" />
          <text>{{ storeLocation?.city }}</text>
        </view>
      </view>
      <view class="position">
        <text class="title">热门城市</text>
        <view class="hot">
          <view v-for="(item, index) in hotCityList" :key="index" class="option" @click="chooseCity(item)">
            <text>{{ item.item }}</text>
          </view>
        </view>
      </view>
      <view class="list">
        <view v-for="(item, index) in cityList" :key="index" class="cell">
          <text class="alphabet border" :class="`mark${index}`">{{ item.title }}</text>
          <text v-for="(e, index) in item.list" :key="index" class="city border" @click="chooseCity(e)">{{ e.item }} </text>
        </view>
      </view>
      <view class="indicator">
        <view v-for="(item, index) in cityList" :key="index" class="letter" @touchmove.stop.prevent="touchMove" @touchstart="touchStart" @touchend="touchEnd">
          <text :class="{ active: index === currentIndex }">{{ item.title }}</text>
          <view v-if="isScroll && currentIndex === index" class="bubble">
            <text class="tag">{{ item.title }}</text>
            <image class="icon" :src="loadStaticResource('/icons/bubble.png')" />
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .page {
    .content {
      background-color: $o-w;
      padding: 0 32rpx;
      display: flex;
      flex-direction: column;
      align-items: center;
      .search {
        background-color: $o-bg;
        width: 100%;
        height: 64rpx;
        border-radius: 999rpx;
        margin-top: 20rpx;
        display: flex;
        align-items: center;
        .icon {
          width: 32rpx;
          height: 32rpx;
          margin-left: 24rpx;
        }
        .input {
          margin-left: 12rpx;
          width: 594rpx;
          height: 100%;
          font-size: 28rpx;
          color: $o-b80;
        }
      }
      .position {
        width: 100%;
        color: $o-b80;
        font-size: 28rpx;
        display: flex;
        flex-direction: column;
        .title {
          color: $o-b40;
          margin: 40rpx 0 24rpx 0;
        }
        .option {
          width: 218rpx;
          height: 72rpx;
          border: 1rpx solid $o-b20;
          border-radius: 8rpx;
          color: $o-b80;
          @include flex-center;
          .icon {
            width: 40rpx;
            height: 40rpx;
          }
        }
        .current {
          border: 1rpx solid $o-t;
          color: $o-t;
        }
        .hot {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .option {
            margin-bottom: 16rpx;
            &:nth-last-child(-n + 3) {
              margin-bottom: 0;
            }
          }
        }
      }
      .list {
        padding-top: 24rpx;
        .cell {
          display: flex;
          flex-direction: column;
          width: $o-width;
          .border {
            border-bottom: 1rpx solid $o-b10;
          }
          .alphabet {
            display: flex;
            align-items: center;
            height: 72rpx;
            font-size: 26rpx;
            color: $o-b60;
            background-color: cyan;
          }
          .city {
            display: flex;
            align-items: center;
            height: 108rpx;
            font-size: 30rpx;
            color: $o-b80;
            // &:nth-last-child(1) {
            //   border: none;
            // }
          }
        }
      }
      .indicator {
        position: fixed;
        right: 12rpx;
        top: 50%;
        transform: translateY(-50%);
        padding: 16rpx 0;
        border-radius: 28rpx;
        background-color: $o-bg;
        display: flex;
        flex-direction: column;
        .letter {
          color: $o-b80;
          margin-top: 8rpx;
          width: 28rpx;
          height: 28rpx;
          font-size: 20rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          &:nth-child(1) {
            margin: 0;
          }
          .active {
            width: 28rpx;
            height: 28rpx;
            border-radius: 50%;
            background-color: $o-t;
            color: $o-w;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .bubble {
            position: absolute;
            left: -136rpx;
            .tag {
              position: absolute;
              z-index: 1;
              width: 108rpx;
              height: 108rpx;
              font-size: 48rpx;
              color: $o-b30;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .icon {
              width: 120rpx;
              height: 108rpx;
            }
          }
        }
      }
    }
  }
</style>
