import { UNION_CARD_STATUS } from '@/enums'

export interface H5Login {
  phone: string
  captcha: string
}

export interface Captcha {
  phone: string
  action: 'login'
}

export interface User {
  nickname: string
  avatar: string
  phone: string
  /** 会员有效期 */
  vipEndTime: string
  /** 联通卡券类型 */
  isUnicom: UNION_CARD_STATUS
  /** 蚂蚁快兑openid */
  mykdOpenid: string
}
