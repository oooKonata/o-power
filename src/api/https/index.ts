const baseURL = 'https://t-travel.he-power.com.cn'

import { useUserStore } from '@/store/user'
import axios, { AxiosRequestConfig } from 'axios'
import { storeToRefs } from 'pinia'

// 适配器
axios.defaults.adapter = config => {
  const { url, method, params, data, baseURL, headers, timeout } = config
  return new Promise((resolve, reject) => {
    uni.request({
      url: baseURL! + url,
      method: method?.toLowerCase() as UniApp.RequestOptions['method'],
      data: method?.toLowerCase() === 'get' ? params : data,
      header: { ...headers },
      timeout: timeout,
      success: res => {
        resolve({
          ...res,
          config,
          status: res.statusCode,
          statusText: res.errMsg || '',
          headers: res.header,
        })
      },
      fail: err => {
        reject({ ...err, config, message: err.errMsg })
      },
    })
  })
}

// axios实例
const https = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})

// 请求拦截器
https.interceptors.request.use(
  config => {
    const { storeToken } = useUserStore()
    config.headers.accessToken = storeToken
    return config
  },
  err => {
    console.log('🍌 ~ error:111', err)
  }
)

// 响应拦截器
https.interceptors.response.use(
  response => {
    const { code, msg, data } = response.data
    if (code !== 200) {
      uni.showToast(msg)
      if (code === 700) {
        const { storeIsLogin } = storeToRefs(useUserStore())
        const { clearUserInfo } = useUserStore()
        // 无accessToken
        if (!storeIsLogin.value) return Promise.reject(msg)
        clearUserInfo()
        uni.navigateTo({ url: '/pages/login/index' })
      }
      return Promise.reject(msg)
    }
    return data
  },
  err => {
    console.log('🍌 ~ error:222', err)
  }
)

// 封装get和post请求
export const request = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return https.get(url, config)
  },
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return https.post(url, data, config)
  },
}
