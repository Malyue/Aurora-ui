import { storage } from './storage.js'

const AccessToken = 'AUTH_TOKEN'
const RefreshToken = 'REFRESH_TOKEN'

/**
 *  验证是否登录
 *
 *  @return bool
 */
export function isLoggedIn() {
    return getAccessToken() != ''
}

/**
 * 获取登录授权 Token
 *
 * @return token
 */
export function getAccessToken() {
    return storage.get(AccessToken) || ''
}

export function getRefreshToken() {
    return storage.get(RefreshToken) || ''
}


/**
 * 设置token
 *
 */
export function setAccessToken(token = '',expire = 60*60*2){
    return storage.set(AccessToken,token,expire) || ''
}

export function setRefreshToken(token='',expire=60*60*2) {
    return storage.set(RefreshToken,token,expire) || ''
}

/**
 * 删除token
 *
 */
export function delAccessToken() {
    storage.remove(AccessToken)
}

export function delRefreshToken() {
    storage.remove(RefreshToken)
}