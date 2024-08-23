import { UNION_CARD_STATUS } from '@/enums'

export type H5Login = {
  phone: string
  captcha: string
}

export type Captcha = {
  phone: string
  action: 'login'
}

export type User = {
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
