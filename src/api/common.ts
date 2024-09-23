import { BANNER_TYPE } from '@/enums'
import { request } from './https'
import type { Banner, City, CityListWithPy } from './types/common'

// 获取banner列表
export const getbannerList = (params?: { type: BANNER_TYPE }) => request.get<{ [key in BANNER_TYPE]: Banner[] }>('/wxapp/bannerList', { params })

// 获得城市列表
export const getCityList = (params: { provinceCode: string }) => request.get<City[]>('/wxapp/getCityList', { params })

// 获取城市列表(带拼音)
export const getCityListWithPy = (params: { keyword?: string }) => request.get<CityListWithPy[]>('/wxapp/getCityListWithPy', { params })

// 获取热门城市
export const getHotCityList = () => request.get<City[]>('/wxapp/getHotCityList')
