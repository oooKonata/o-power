import { request } from './https'
import { Captcha, H5Login, User } from './types/user'

// H5登录
export const h5Login = (data: H5Login) => request.post('/wxapp/h5Login', data)

// 获取验证码
export const captcha = (data: Captcha) => request.post('/wxapp/captcha', data)

// 用户信息
export const getUserInfo = () => request.get<User>('/wxapp/getUserInfo')