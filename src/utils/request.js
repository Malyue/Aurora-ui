import axios from 'axios'
import { error } from 'console'
import { isGeneratorFunction } from 'util/types'


// create axios instance
const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout:10000,
})

let once = false

/**
 * 异常拦截处理器
 * 
 * @paran {*} error
 */
const errorHandler = (error) => {
    // 判断是否是响应错误信息
    if (error.response) {
        if (error.response.status == 401) {
            window['$dialog'].info({
                title:'友情提示',
                content: '当前登录已失效，请重新登录',
                positiveText:'立即登录',
                maskCloseable:false,
                onPositiveClick: () => {
                    location.reload()
                }
            })
        }
    }

    return Promise.reject(error)
}

// 请求拦截器
request.interceptors.request.use((config) => {
    const token = getAccessToken()

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
},errorHandler)

// 响应拦截器
request.interceptors.response.use((response) => response.data,errorHandler)


/**
 * GET 请求
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {PROmise<any>}
 */
export const get = (url,data = {},options = {}) => {
    return request({
        url,
        params:data,
        method:'get',
        ...options
    })
}


/**
 * POST 请求
 * 
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise<any>}
 */
export const post = (url, data = {}, options = {}) => {
    return request({
      url,
      method: 'post',
      data: data,
      ...options
    })
}

/**
 * 上传文件 POST 请求
 *
 * @param {String} url
 * @param {Object} data
 * @param {Object} options
 * @returns {Promise<any>}
 */
export const upload = (url, data = {}, options = {}) => {
    return request({
      url,
      method: 'post',
      data: data,
      ...options
    })
  }
  
