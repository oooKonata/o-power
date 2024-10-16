import { request } from './https'
import type { SdoWashStationList, SdoWashStationQuery } from './types/carWash'

// 获取盛大洗车门店列表
export const getSdoWashStationList = (params: SdoWashStationQuery) =>
  request.get<SdoWashStationList>('/wxapp/getSdoWashStationList', { params })
