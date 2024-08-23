/**
 * @description 联通卡券类型
 * 0-无 1-出行卡 2-车主卡
 */
export enum UNION_CARD_STATUS {
  NONE = 0,
  TRAVEL_CARD = 1,
  OWNER_CARD = 2,
}

/**
 * @description banner类型
 * 1-首页顶部 2-首页弹窗 3-附近服务 4-优惠加油 5-洗车 6-生活权益
 */
export enum BANNER_TYPE {
  HOME_TOP = 1,
  HOME_POPUP = 2,
  HOME_NEARBY = 3,
  OIL_HOME = 4,
  WASH_HOME = 5,
  RIGHTS_HOME = 6,
}

/**
 * @description banner跳转类型
 * 0-无 1-商品 2-券包 3-图片 4-活动 5-小程序 6-三方url 7-小程序url
 */
export enum BANNER_URL_TYPE {
  NONE = 0,
  GOOD = 1,
  COUPONS = 2,
  IMG = 3,
  ACTIVITY = 4,
  MP = 5,
  EXTERNAL = 6,
  MP_URL = 7,
}
