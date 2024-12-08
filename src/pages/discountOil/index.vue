<script setup lang="ts">
  import { getOilStationListAll } from '@/api/oil'
  import type { OilStation } from '@/api/types/oil'
  import { loadStaticResource } from '@/assets'
  import BannerSwiper from '@/components/BannerSwiper/BannerSwiper.vue'
  import OilStationCardList from '@/components/Cards/OilStationCardList.vue'
  import OBg from '@/components/o-bg/o-bg.vue'
  import ONav from '@/components/o-nav/o-nav.vue'
  import OSearch from '@/components/o-search/o-search.vue'
  import { BANNER_TYPE, OIL_NO, OIL_SORT, OIL_TYPE } from '@/enums'
  import { useCacheStore } from '@/store/cache'
  import { useLocationStore } from '@/store/location'
  import { onPageScroll, onReachBottom } from '@dcloudio/uni-app'
  import { storeToRefs } from 'pinia'
  import { getCurrentInstance, onMounted, reactive, ref, watch } from 'vue'

  const { safeAreaInsets } = useCacheStore()
  const { storeLocation, hasLocation } = storeToRefs(useLocationStore())

  const iconArr = [
    { title: '中石油券', icon: '/oil/coupons.png', url: '' },
    { title: '省钱券包', icon: '/oil/coupon_package.png', url: '' },
    { title: '会员专享', icon: '/oil/vip.png', url: '' },
    { title: '油价助手', icon: '/oil/oil_prices.png', url: '' },
    { title: '记录油耗', icon: '/oil/fuel_consumption_record.png', url: '' },
  ]

  const inputValue = ref('')
  const oilStationList = ref<OilStation[]>([])

  let pageSize = ref(8)
  let totalCount = ref(0)
  let totalPage = ref(0)
  // 筛选条件
  let sort = ref<OIL_SORT>(OIL_SORT.RECOMMEND)
  let oilNo = ref<OIL_NO>(OIL_NO.T92)
  let type = ref<OIL_TYPE>(OIL_TYPE.ALL)
  // 列表全部数据已加载标识
  let isDataEnd = ref(false)
  // 数据初始化
  let isDataReady = ref(false)

  // 油站列表
  const oilStationListAll = async (value?: string) =>
    await getOilStationListAll({
      provinceCode: storeLocation.value!.provinceCode,
      longitude: storeLocation.value!.longitude,
      latitude: storeLocation.value!.latitude,
      stationName: value,
      type: type.value,
      oilNo: oilNo.value,
      sort: sort.value,
      pageSize: pageSize.value,
    })

  // 初始化油站列表
  const init = async () => {
    if (hasLocation.value) {
      const data = await oilStationListAll(inputValue.value)
      oilStationList.value = data.list
      totalCount.value = data.totalCount
      totalPage.value = data.totalPage
      isDataReady.value = true
    }
  }

  // 搜索油站
  const handleConfirm = (value: string) => {
    inputValue.value = value
    init()
  }

  // 改变定位，更新油站列表，清除搜索输入内容
  const positionChange = () => {
    inputValue.value = ''
    init()
  }

  watch(storeLocation, positionChange, { immediate: true })

  onReachBottom(() => {
    if (oilStationList.value.length <= totalCount.value) {
      pageSize.value += 8
      init()
    } else {
      isDataEnd.value = true
    }
  })

  // 页面滚动
  const backgroundOpacity = ref(0)
  // 滚动固定
  const isFixed = ref(false)
  const topHeight = ref(0)
  const isFixedHeight = ref(0)
  const instance = getCurrentInstance()

  onMounted(() => {
    uni
      .createSelectorQuery()
      .in(instance)
      .select('.top')
      .boundingClientRect(data => {
        topHeight.value = (data as UniApp.NodeInfo).height!
        isFixedHeight.value = topHeight.value - 86 - 44 - safeAreaInsets!.top
      })
      .exec()
  })

  // 筛选
  const currentIndex = ref<number | null>()
  // 箭头旋转角度
  const rotateAngle = ref<number>(0)
  const isMask = ref(false)
  const filterArr = reactive([
    { title: '智能排序', mark: 0, arr: ['智能排序', '距离优先', '价格优先'] },
    { title: '92#', mark: 1, arr: ['0#', '92#', '95#', '98#'] },
    { title: '全部品牌', mark: 0, arr: ['全部品牌', '中国石油', '民营油站'] },
  ])

  const handleTab = (index: number) => {
    isMask.value = true
    rotateAngle.value = 180
    currentIndex.value = index
    // uni.pageScrollTo({
    //   scrollTop: isFixedHeight.value,
    //   duration: 100,
    // })
  }

  const handleTabItem = (index: number, tab: (typeof filterArr)[number]) => {
    tab.mark = index
    tab.title = tab.arr[index]
    isMask.value = false

    switch (currentIndex.value) {
      case 0:
        sort.value = index + 1
        break
      case 1:
        oilNo.value = tab.arr[index] as any
        break
      case 2:
        type.value = index
        break
    }
    rotateAngle.value = 0
    init()
  }

  const handleTag = (index: number) => {
    console.log('index-tag', index)
  }

  // 导航栏透明度动画（页面滚动）
  onPageScroll(e => {
    backgroundOpacity.value = Math.min(e.scrollTop / 44, 1)
    if (e.scrollTop >= isFixedHeight.value) {
      isFixed.value = true
    } else {
      isFixed.value = false
    }
  })
</script>

<template>
  <view class="discount-oil">
    <view class="o-nav">
      <ONav title="优惠加油" :style="{ backgroundColor: `rgba(255,255,255,${backgroundOpacity})` }" />
    </view>
    <view
      class="top"
      :class="{ 'is-fixed': isFixed }"
      :style="{ paddingTop: safeAreaInsets?.top + 'px', top: isFixed ? -isFixedHeight + 'px' : 0 }">
      <OBg :type="'green_white'" />
      <OSearch
        v-model="inputValue"
        position
        weather
        placeholder="搜索油站"
        class="o-search"
        :style="{paddingTop:`calc(${safeAreaInsets!.top + 44}px + 20rpx)`}"
        @confirm="handleConfirm" />
      <BannerSwiper size="normal" :type="BANNER_TYPE.OIL_HOME" :style="{ marginTop: 24 + 'rpx' }" />
      <view class="function_grid">
        <view v-for="(item, index) in iconArr" :key="index" class="function">
          <image class="icon" :src="loadStaticResource(item.icon)" />
          <text>{{ item.title }}</text>
        </view>
      </view>
      <view class="oil_price_notice">
        <view class="left">
          <text class="title">当前油价</text>
          <view class="oil_price">
            <text>¥7.67</text>
            <text class="oil_num">92#</text>
          </view>
        </view>
        <view class="center">
          <text class="title">下次调价</text>
          <text>9月20日</text>
        </view>
        <view class="right">
          <text class="btn">订阅油价提醒</text>
        </view>
      </view>
      <view class="discount">
        <image class="img" :src="loadStaticResource('/oil/img_discount.png')" />
        <view v-for="(item, index) in 3" :key="index" class="coupon">
          <image v-if="index === 0" class="icon_arrow" :src="loadStaticResource('/oil/icon_arrow.png')" />
          <text class="info">满200减5</text>
        </view>
        <image class="icon" :src="loadStaticResource('/icons/more_small.png')" />
      </view>
      <view class="filter">
        <view class="tabs">
          <view v-for="(tab, index) in filterArr" :key="index" class="tab" @click="handleTab(index)">
            <text :style="{ color: currentIndex === index ? '#189269' : '#666666' }">{{ tab.title }}</text>
            <image
              :style="{ transform: `rotate(${currentIndex === index ? rotateAngle : 0}deg)` }"
              class="icon rotate"
              :src="
                currentIndex === index ? loadStaticResource('/icons/drop_t.png') : loadStaticResource('/icons/drop.png')
              " />
            <view v-if="isMask && currentIndex === index" class="mask">
              <view class="drop">
                <view
                  v-for="(item, index) in tab.arr"
                  :key="index"
                  :class="{ active: tab.mark === index }"
                  class="item"
                  @click.stop="handleTabItem(index, tab)">
                  {{ item }}
                </view>
              </view>
            </view>
          </view>
        </view>
        <scroll-view scroll-x class="tags" show-scrollbar="false">
          <text
            v-for="(item, index) in 8"
            :key="index"
            class="tag"
            :class="{ active: index === 0 }"
            @click="handleTag(index)"
            >免费洗车</text
          >
        </scroll-view>
      </view>
    </view>
    <view v-if="isDataReady === true && oilStationList.length === 0" class="empty">
      <image class="bg" :src="loadStaticResource('/bg/empty.png')" />
      <text>暂无结果</text>
    </view>
    <view
      v-else
      class="list"
      :style="{
        paddingTop: `calc(${topHeight}px + 24rpx)`,
        paddingBottom: `calc(${safeAreaInsets?.bottom}px + 24rpx)`,
      }">
      <OilStationCardList :list="oilStationList" />
      <view class="tip">
        <view class="sep"></view>
        <text>{{ totalPage === 1 || isDataEnd ? '没有更多了' : '加载中' }}</text>
        <view class="sep"></view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .discount-oil {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
      @include flex-column-center;
      background-color: #fff;
      border-radius: 0 0 16rpx 16rpx;
      position: relative;
      z-index: 9;
      .o-search {
        z-index: 99;
        position: relative;
      }
      .function_grid {
        @include flex-center;
        gap: 44rpx;
        padding: 28rpx 0 32rpx 0;
        height: 160rpx;
        .function {
          @include flex-column-center;
          color: $o-b80;
          font-size: 24rpx;
          .icon {
            width: 64rpx;
            height: 64rpx;
            margin-bottom: 2rpx;
          }
        }
      }
      .oil_price_notice {
        width: $o-width;
        background-color: #f9f9f9;
        padding: 24rpx 32rpx;
        border-radius: 16rpx;
        color: $o-b80;
        font-size: 28rpx;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 72rpx;
        position: relative;
        .title {
          color: $o-b40;
          font-size: 20rpx;
        }
        .oil_num {
          color: $o-b40;
          font-weight: normal;
          margin-left: 12rpx;
        }
        .left,
        .center {
          display: flex;
          flex-direction: column;
          gap: 4rpx;
        }
        .right {
          height: 56rpx;
          padding: 0 24rpx;
          border-radius: 99rpx;
          background-color: $o-t10;
          @include flex-center;
          position: absolute;
          right: 32rpx;
          .btn {
            color: $o-t;
            font-size: 24rpx;
          }
        }
      }
      .discount {
        width: $o-width;
        height: 60rpx;
        border-radius: 16rpx;
        background-color: #faf4e5;
        padding: 0 16rpx 0 24rpx;
        display: flex;
        align-items: center;
        margin-top: 24rpx;
        .img {
          width: 96rpx;
          height: 36rpx;
          margin-right: 16rpx;
        }
        .coupon {
          color: $o-w;
          font-size: 20rpx;
          display: flex;
          align-items: center;
          margin-right: 12rpx;
          .icon_arrow {
            width: 6rpx;
            height: 12rpx;
          }
          .info {
            display: inline-flex;
            align-items: center;
            height: 36rpx;
            padding: 0 8rpx;
            border-radius: 8rpx;
            background-color: #ff744c;
          }
        }
        .icon {
          width: 16rpx;
          height: 32rpx;
          margin-left: auto;
        }
      }
      .filter {
        position: relative;
        .tabs {
          @include flex-between-center;
          .tab {
            @include flex-center;
            width: 250rpx;
            height: 100rpx;
            color: $o-b60;
            font-size: 26rpx;
            line-height: 36rpx;
            .icon {
              width: 16rpx;
              height: 16rpx;
              margin-left: 4rpx;
            }
            &:first-child {
              padding-left: 32rpx;
              justify-content: left;
            }
            &:last-child {
              padding-right: 32rpx;
              justify-content: right;
            }
            .mask {
              position: absolute;
              top: 100rpx;
              z-index: 9;
              left: 0;
              background-color: $o-b30;
              width: 100%;
              height: 100vh;
              .drop {
                background-color: #fff;
                padding: 0 32rpx 32rpx 32rpx;
                border-radius: 0 0 16rpx 16rpx;
                @include flex-between-center;
                gap: 24rpx;
                .item {
                  @include flex-center;
                  height: 64rpx;
                  flex: 1;
                  background-color: $o-bg;
                  border-radius: 999rpx;
                  color: $o-b60;
                  font-size: 26rpx;
                }
                .active {
                  color: $o-t;
                  background-color: $o-t10;
                  border: 1rpx solid $o-t;
                }
              }
            }
          }
        }

        .tags {
          white-space: nowrap;
          color: $o-b60;
          font-size: 24rpx;
          padding-bottom: 24rpx;
          .tag {
            display: inline-flex;
            align-items: center;
            background-color: $o-bg;
            border-radius: 8rpx;
            height: 48rpx;
            padding: 0 16rpx;
            margin-right: 16rpx;
            &:first-child {
              margin-left: 32rpx;
            }
            &:last-child {
              margin-right: 32rpx;
            }
          }
          .active {
            color: $o-t;
            background-color: $o-t10;
            border: solid 1rpx $o-t;
          }
        }
      }
    }
    .is-fixed {
      position: fixed;
      z-index: 9;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
    }
    .tip {
      @include flex-center;
      font-size: 24rpx;
      color: $o-b40;
      padding: 32rpx 0;
      .sep {
        width: 16rpx;
        height: 1rpx;
        background-color: $o-b20;
        margin: 0 24rpx;
      }
    }
    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 24rpx;
      color: $o-b40;
      padding: 64rpx 0 32rpx 0;
      .bg {
        width: 240rpx;
        height: 240rpx;
        margin-bottom: 32rpx;
      }
    }
    .list {
      position: absolute;
    }
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(180deg);
      }
    }
    .rotate {
      animation: rotate 0.1s ease;
    }
  }
</style>
