import { BANNER_TYPE } from '@/enums'
import { request } from './https'
import type { Banner } from './types/marketing'

// banner列表
export const getbannerList = (params: { type: BANNER_TYPE }) =>
  request.get<{ [key in BANNER_TYPE]: Banner[] }>('/wxapp/bannerList', { params })
