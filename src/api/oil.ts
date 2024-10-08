import { request } from './https'
import type { OilStationQuery, OilStationResult } from './types/oil'

// 获取油站列表
export const getOilStationListAll = (params: OilStationQuery) => request.get<OilStationResult>('/wxapp/getOilStationListAll', { params })
