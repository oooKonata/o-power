import type { OIL_STATION_TYPE, OIL_TYPE, SORT_OIL } from '@/enums'

export interface OilStationQuery {
  longitude: string
  latitude: string
  provinceCode: string
  stationName?: string
  type: OIL_STATION_TYPE
  oilNo: OIL_TYPE
  sort: SORT_OIL
  pageSize?: number
  pageIndex?: number
}

export interface OilStation {
  id: number
  code: string
  title: string
  mobile: string
  logo: string
  address: string
  longitude: string
  status: number
  deleted: number
  type: number
  merchantName: string
  merchantShortName: string
  provinceCode: string
  provinceItem: string
  cityCode: string
  cityItem: string
  areaCode: string
  areaItem: string
  createTime: string
  updateTime: string
  t0Price: string
  t89Price: string
  t92Price: string
  t95Price: string
  t98Price: string
  distance: number
  closingTime: string
  priceOfficial: string
  priceYfq: string
}

export interface OilStationResult {
  list: OilStation[]
  totalCount: number
  totalPage: number
}
