<script setup lang="ts">
  import { getOilStationListAll } from '@/api/oil'
  import type { OilStation } from '@/api/types/oil'
  import { loadStaticResource } from '@/assets'
  import OTags from '@/components/o-tags/o-tags.vue'
  import { OIL_STATION_TYPE, OIL_TYPE, SORT_RULES } from '@/enums'
  import { useCacheStore } from '@/store/cache'
  import { useLocationStore } from '@/store/location'
  import { storeToRefs } from 'pinia'
  import { ref, watch } from 'vue'

  const { safeAreaInsets } = useCacheStore()
  const { getLocation } = useLocationStore()

  const oilStationList = ref<OilStation[]>([])

  const { hasLocation, storeLocation } = storeToRefs(useLocationStore())
  const init = async () => {
    if (hasLocation.value) {
      const data = await getOilStationListAll({
        provinceCode: storeLocation.value!.provinceCode,
        longitude: storeLocation.value!.longitude,
        latitude: storeLocation.value!.latitude,
        type: OIL_STATION_TYPE.ALL,
        oilNo: OIL_TYPE.T92,
        sort: SORT_RULES.RECOMMEND,
        pageSize: 3,
      })
      oilStationList.value = data.list
    }
  }

  watch(storeLocation, init, { immediate: true })

  const handleClick = () => {
    getLocation()
  }

  const current = ref(1)
  const handleChange = (index: number, data: string) => {
    console.log(111)
  }
</script>

<template>
  <view class="content" :style="{paddingBottom:`calc(${safeAreaInsets!.bottom}px) + 128rpx`}">
    <view class="title">附近服务</view>
    <view v-if="hasLocation">
      <view class="tags">
        <OTags v-model:current="current" :list="['加油', '充电', '洗车']" @change="handleChange" />
        <view class="more">
          <text>查看全部</text>
          <image class="icon" :src="loadStaticResource('/icons/more_small.png')" />
        </view>
      </view>
      <view v-if="oilStationList.length" class="cards">
        <view v-for="(item, index) in oilStationList" :key="index" class="card-oil">
          <view class="top">
            <view class="left">
              <text class="title ellipsis">{{ item.title }}</text>
              <view class="desc">
                <text class="distance">{{ item.distance }}公里</text>
                <view class="sep"></view>
                <text class="position ellipsis">{{ item.address }}</text>
              </view>
            </view>
            <view class="right">
              <image class="icon" :src="loadStaticResource('/icons/nav.png')" />
              <text>导航</text>
            </view>
          </view>
          <view class="down">
            <view class="info">
              <text>¥</text>
              <text class="price">{{ item.priceYfq }}</text>
              <text>/L</text>
              <text class="old-price">¥{{ item.priceOfficial }}/L</text>
            </view>
            <view class="btn">
              <text>去加油</text>
              <image class="icon" :src="loadStaticResource('/icons/go.png')" />
            </view>
          </view>
        </view>
        <view class="card-washcar"> </view>
        <view class="slogan">
          <text>星和动力</text>
          <view class="divider-v"></view>
          <text>品牌优选</text>
          <view class="divider-v"></view>
          <text>品质服务</text>
        </view>
      </view>
      <view v-else class="empty">
        <image class="empty-bg" :src="loadStaticResource('/bg/empty.png')" />
        <text>暂无油站～</text>
      </view>
    </view>
    <view v-else class="no-position">
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
  </view>
</template>

<style scoped lang="scss">
  .content {
    width: $o-width;
    margin-top: 32rpx;
    .divider-v {
      width: 1rpx;
      height: 20rpx;
      background-color: $o-b20;
      margin: 0 12rpx;
    }
    .title {
      font-size: 32rpx;
      font-weight: 500;
      color: $o-b80;
    }
    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 24rpx;
      color: $o-b40;
      padding: 24rpx 0 32rpx 0;
      &-bg {
        width: 240rpx;
        height: 240rpx;
        margin-bottom: 32rpx;
      }
    }
    .tags {
      display: flex;
      align-items: center;
      font-size: 24rpx;
      color: $o-b60;
      position: relative;
      margin-top: 32rpx;
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
    .cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      .card-oil {
        margin-top: 24rpx;
        width: $o-width;
        background-color: $o-w;
        padding: 32rpx;
        border-radius: 16rpx;
        .top {
          @include flex-between-center;
          .left {
            display: flex;
            flex-direction: column;
            min-width: 0;
            margin-right: 32rpx;
            .title {
              font-size: 32rpx;
              color: $o-b80;
              flex-shrink: 0;
            }
            .desc {
              margin-top: 6rpx;
              font-size: 24rpx;
              color: $o-b60;
              display: flex;
              align-items: center;
              .distance {
                flex-shrink: 0;
              }
              .sep {
                width: 1rpx;
                height: 20rpx;
                background-color: $o-b20;
                margin: 0 12rpx;
              }
            }
          }
          .right {
            font-size: 20rpx;
            color: $o-b60;
            @include flex-column-center;
            .icon {
              width: 48rpx;
              height: 48rpx;
              margin-bottom: 4rpx;
            }
          }
        }
        .down {
          margin-top: 24rpx;
          @include flex-between-center;
          .info {
            font-size: 26rpx;
            color: $o-t;
            font-family: 'AlibabaPuHuiTi-3-55-Regular';
            .price {
              font-size: 46rpx;
              font-family: 'AlibabaPuHuiTi-3-85-Bold';
            }
            .old-price {
              font-size: 24rpx;
              color: $o-b40;
              margin-left: 8rpx;
            }
          }
          .btn {
            height: 64rpx;
            padding: 0 24rpx;
            border-radius: 12rpx;
            background-color: $o-bg;
            font-size: 26rpx;
            color: $o-b80;
            font-weight: 500;
            @include flex-center;
            .icon {
              width: 16rpx;
              height: 16rpx;
              margin-left: 8rpx;
            }
          }
        }
      }
    }
    .slogan {
      display: flex;
      align-items: center;
      font-size: 24rpx;
      color: $o-b40;
      padding: 32rpx 0;
    }

    .no-position {
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
  }
</style>
