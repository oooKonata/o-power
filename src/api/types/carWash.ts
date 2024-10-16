import type { SORT_CARWASH } from '@/enums'

export interface SdoWashStationQuery {
  longitude: string
  latitude: string
  pageIndex: number
  pageSize: number
  orderCon: SORT_CARWASH
  provinceCode: string
  cityCode: string
  shopName?: string
  serviceId?: number
}

export interface SdoWashStation {
  shopName: string
  shopCode: string
  status: number
  provinceCode: string
  provinceName: string
  cityCode: string
  cityName: string
  areaCode: string
  areaName: string
  address: string
  logo: string
  distance: string
  services: Service[]
  isLast: boolean
  baiduCoordinate: string
  gaodeCoordinate: string
}

export interface Service {
  serviceName: string
  faceValue: string
  sellPrice: string
  couponId: number
  title: string
}
export interface SdoWashStationList {
  list: SdoWashStation[]
  totalCount: number
  totalPage: number
}
