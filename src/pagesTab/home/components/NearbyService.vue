<script setup lang="ts">
  import { getSdoWashStationList } from '@/api/carWash'
  import { getOilStationListAll } from '@/api/oil'
  import type { SdoWashStation } from '@/api/types/carWash'
  import type { OilStation } from '@/api/types/oil'
  import { loadStaticResource } from '@/assets'
  import CarWashCardList from '@/components/Cards/CarWashCardList.vue'
  import OilStationCardList from '@/components/Cards/OilStationCardList.vue'
  import OTags from '@/components/o-tags/o-tags.vue'
  import { OIL_STATION_TYPE, OIL_TYPE, SORT_CARWASH, SORT_OIL } from '@/enums'
  import { useCacheStore } from '@/store/cache'
  import { useLocationStore } from '@/store/location'
  import { storeToRefs } from 'pinia'
  import { computed, ref, watch } from 'vue'

  const { safeAreaInsets } = useCacheStore()
  const { getLocation } = useLocationStore()

  const oilStationList = ref<OilStation[]>([])
  const carWashStationList = ref<SdoWashStation[]>()

  const { hasLocation, storeLocation } = storeToRefs(useLocationStore())
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
        pageSize: 3,
      })
      oilStationList.value = oilStationListAll.list

      // 获取洗车门店列表
      const carWashStationListAll = await getSdoWashStationList({
        longitude: storeLocation.value!.longitude,
        latitude: storeLocation.value!.latitude,
        pageIndex: 1,
        pageSize: 3,
        orderCon: SORT_CARWASH.PRICE,
        provinceCode: storeLocation.value!.provinceCode,
        cityCode: storeLocation.value!.cityCode,
      })
      carWashStationList.value = carWashStationListAll.list
    }
  }

  watch(storeLocation, init, { immediate: true })

  const handleClick = () => {
    getLocation()
  }

  const current = ref(0)
  const handleChange = (index: number, data: string) => {
    console.log(index, data)
  }
</script>

<template>
  <view class="nearby-service" :style="{paddingBottom:`calc(${safeAreaInsets!.bottom}px) + 128rpx`}">
    <view class="title">附近服务</view>

    <view v-if="!hasLocation" class="nearby-service--no-position">
      <image class="bg" :src="loadStaticResource('/home/img_position_bg.png')" />
      <image class="position" :src="loadStaticResource('/icons/no_position.png')" />
      <view class="wrapper">
        <text class="tips">您未授权定位</text>
        <text class="desc">我们无法为您匹配附近服务</text>
      </view>
      <view class="btn" @click="handleClick">
        <text>授权定位</text>
      </view>
    </view>

    <view v-else>
      <view class="nearby-service--tags">
        <OTags v-model:current="current" :list="['加油', '洗车']" @change="handleChange" />
        <view class="more">
          <text>查看全部</text>
          <image class="icon" :src="loadStaticResource('/icons/more_small.png')" />
        </view>
      </view>

      <view v-if="current === 0 && oilStationList.length" class="nearby-service--oil-station-list">
        <OilStationCardList :list="oilStationList" />
        <view class="slogan">
          <text>星和动力</text>
          <view class="sep"></view>
          <text>品牌优选</text>
          <view class="sep"></view>
          <text>优惠加油</text>
        </view>
      </view>

      <view v-if="current === 0 && !oilStationList.length" class="empty">
        <image class="bg" :src="loadStaticResource('/bg/empty.png')" />
        <text>暂无油站～</text>
      </view>

      <view v-if="current === 1 && carWashStationList?.length" class="nearby-service--car-wash-list">
        <CarWashCardList :list="carWashStationList" />
        <view class="slogan">
          <text>星和动力</text>
          <view class="sep"></view>
          <text>品牌优选</text>
          <view class="sep"></view>
          <text>优惠洗车</text>
        </view>
      </view>

      <view v-if="current === 1 && !carWashStationList?.length" class="empty">
        <image class="bg" :src="loadStaticResource('/bg/empty.png')" />
        <text>暂无洗车门店～</text>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
  .nearby-service {
    width: $o-width;
    margin-top: 32rpx;
    &--no-position {
      display: flex;
      align-items: center;
      width: $o-width;
      height: 144rpx;
      margin: 32rpx 0;
      border-radius: 16rpx;
      position: relative;
      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .position {
        width: 48rpx;
        height: 48rpx;
        margin-left: 32rpx;
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        margin-left: 28rpx;
        z-index: 1;
        .tips {
          font-size: 28rpx;
          font-weight: 500;
          color: $o-b80;
        }
        .desc {
          font-size: 24rpx;
          color: $o-b60;
          margin-top: 2rpx;
        }
      }
      .btn {
        position: absolute;
        right: 32rpx;
        height: 64rpx;
        background-color: $o-t;
        font-size: 26rpx;
        font-weight: 500;
        color: $o-w;
        display: flex;
        align-items: center;
        padding: 0 32rpx;
        border-radius: 999rpx;
      }
    }
    &--tags {
      display: flex;
      align-items: center;
      font-size: 24rpx;
      color: $o-b60;
      position: relative;
      margin: 32rpx 0 24rpx 0;
      .more {
        font-size: 24rpx;
        color: $o-b40;
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        .icon {
          width: 16rpx;
          height: 32rpx;
          margin-left: 4rpx;
        }
      }
    }
    &--oil-station-list {
      @include flex-column-center;
    }
    .slogan {
      width: $o-width;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24rpx;
      color: $o-b40;
      padding: 32rpx 0;
      .sep {
        width: 1rpx;
        height: 20rpx;
        background-color: $o-b20;
        margin: 0 12rpx;
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
