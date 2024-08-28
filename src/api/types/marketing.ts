import { BANNER_TYPE, BANNER_URL_TYPE } from '@/enums'

export interface Banner {
  id: number
  title: string
  img: string
  status: number
  /** banne类型 */
  type: BANNER_TYPE
  sort: number
  ddeleted: number
  startTime: any
  endTime: any
  urlType: BANNER_URL_TYPE
  urlParams: string
  createTime: string
  updateTime: string
}
