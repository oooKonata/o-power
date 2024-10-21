<script setup lang="ts">
  import { getOilStationListAll } from '@/api/oil'
  import type { OilStation } from '@/api/types/oil'
  import OBg from '@/components/o-bg/o-bg.vue'
  import ONav from '@/components/o-nav/o-nav.vue'
  import OSearch from '@/components/o-search/o-search.vue'
  import { OIL_STATION_TYPE, OIL_TYPE, SORT_OIL } from '@/enums'
  import { useCacheStore } from '@/store/cache'
  import { useLocationStore } from '@/store/location'
  import { storeToRefs } from 'pinia'
  import { ref, watch } from 'vue'

  const { safeAreaInsets } = useCacheStore()
  const { storeLocation } = storeToRefs(useLocationStore())

  const inputValue = ref('')
  const getOilStationList = ref<OilStation[]>()
  watch(inputValue, () => {
    console.log('inputValue', inputValue.value)
  })

  const handleConfirm = async () => {
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
    console.log(getOilStationList.value)
  }
</script>

<template>
  <view class="discount-oil">
    <ONav title="优惠加油" />
    <view class="top">
      <OBg :type="'green_white'" />
      <OSearch
        v-model:value="inputValue"
        position
        weather
        class="o-search"
        :style="{paddingTop:`calc(${safeAreaInsets!.top + 44}px + 20rpx)`}"
        @confirm="handleConfirm" />
    </view>
  </view>
</template>

<style scoped lang="scss">
  .discount-oil {
    .top {
      .o-search {
        z-index: 99;
        position: relative;
      }
    }
  }
</style>
