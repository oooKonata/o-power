<script setup lang="ts">
  import { getOilStationListAll } from '@/api/oil'
  import type { OilStation } from '@/api/types/oil'
  import { loadStaticResource } from '@/assets'
  import BannerSwiper from '@/components/BannerSwiper/BannerSwiper.vue'
  import OilStationCardList from '@/components/Cards/OilStationCardList.vue'
  import OBg from '@/components/o-bg/o-bg.vue'
  import ONav from '@/components/o-nav/o-nav.vue'
  import OSearch from '@/components/o-search/o-search.vue'
  import { BANNER_TYPE, OIL_STATION_TYPE, OIL_TYPE, SORT_OIL } from '@/enums'
  import { useCacheStore } from '@/store/cache'
  import { useLocationStore } from '@/store/location'
  import { onPageScroll, onReachBottom } from '@dcloudio/uni-app'
  import { storeToRefs } from 'pinia'
  import { onMounted, ref, watch } from 'vue'

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
  const getOilStationList = ref<OilStation[]>()

  // 搜索油站
  const handleConfirm = async (value: string) => {
    inputValue.value = value
    const OilStationListAll = await getOilStationListAll({
      longitude: storeLocation.value!.longitude,
      latitude: storeLocation.value!.latitude,
      provinceCode: storeLocation.value!.provinceCode,
      stationName: inputValue.value,
      type: OIL_STATION_TYPE.ALL,
      oilNo: OIL_TYPE.T92,
      sort: SORT_OIL.RECOMMEND,
    })
    getOilStationList.value = OilStationListAll.list
  }

  const oilStationList = ref<OilStation[]>([])
  let pageSize = ref(8)
  let totalCount = ref(0)
  let totalPage = ref(0)
  // 列表全部数据已加载标识
  let isDataEnd = ref(false)
  // 数据初始化
  let isDataReady = ref(false)

  const init = async () => {
    if (hasLocation.value) {
      // 获取油站列表
      const oilStationListAll = await getOilStationListAll({
        provinceCode: storeLocation.value!.provinceCode,
        longitude: storeLocation.value!.longitude,
        latitude: storeLocation.value!.latitude,
        type: OIL_STATION_TYPE.ALL,
        oilNo: OIL_TYPE.T92,
        sort: SORT_OIL.RECOMMEND,
        pageSize: pageSize.value,
      })
      oilStationList.value = oilStationListAll.list
      totalCount.value = oilStationListAll.totalCount
      totalPage.value = oilStationListAll.totalPage
      isDataReady.value = true
    }
  }

  watch(storeLocation, init, { immediate: true })

  onReachBottom(() => {
    console.log(111)
    if (oilStationList.value.length <= totalCount.value) {
      pageSize.value += 8
      init()
    } else {
      isDataEnd.value = true
    }
  })

  // 页面滚动
  onPageScroll(e => {
    console.log(e)
  })
</script>

<template>
  <view class="discount-oil">
    <ONav title="优惠加油" class="nav-bg" />
    <view class="top">
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
          <view v-for="(item, index) in 3" :key="index" class="tab">
            <text>智能排序</text>
            <image class="icon" :src="loadStaticResource('/icons/drop.png')" />
          </view>
        </view>
        <scroll-view scroll-x class="tags" show-scrollbar="false">
          <text v-for="(item, index) in 8" :key="index" class="tag" :class="{ active: index === 0 }">免费洗车</text>
        </scroll-view>
      </view>
    </view>
    <view v-if="isDataReady === true && oilStationList.length === 0" class="empty">
      <image class="bg" :src="loadStaticResource('/bg/empty.png')" />
      <text>暂无洗车门店～</text>
    </view>
    <view
      v-else
      class="list"
      :style="{ paddingTop: '24rpx', paddingBottom: `calc(${safeAreaInsets?.bottom}px + 24rpx)` }">
      <OilStationCardList :list="oilStationList" />
      <view v-if="totalPage === 1 || isDataEnd" class="tip">
        <view class="sep"></view>
        <text>没有更多了～</text>
        <view class="sep"></view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .discount-oil {
    .top {
      @include flex-column-center;
      background-color: #fff;
      border-radius: 0 0 16rpx 16rpx;
      .o-search {
        z-index: 99;
        position: relative;
      }
      .function_grid {
        @include flex-center;
        gap: 44rpx;
        padding: 28rpx 0 32rpx 0;
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
            border-radius: 6rpx;
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
        .tabs {
          padding: 32rpx;
          @include flex-between-center;
          .tab {
            @include flex-center;
            color: $o-b60;
            font-size: 26rpx;
            .icon {
              width: 16rpx;
              height: 16rpx;
              margin-left: 4rpx;
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
      padding: 24rpx 0 32rpx 0;
      .bg {
        width: 240rpx;
        height: 240rpx;
        margin-bottom: 32rpx;
      }
    }
  }
</style>
