import { request } from './https'
import type { Banner } from './types/common'
import type { Captcha, H5Login, User } from './types/user'

// H5登录
export const h5Login = (data: H5Login) => request.post<{ token: string }>('/wxapp/h5Login', data)

// 获取验证码
export const getCaptcha = (data: Captcha) => request.post('/wxapp/captcha', data)

// 获取用户信息
export const getUserInfo = () => request.get<User>('/wxapp/getUserInfo')
