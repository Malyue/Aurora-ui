import { storage } from './storage.js'

const AccessToken = 'AUTH_TOKEN'

export function isLoggedIn() {
    return getAccessToken() != ''
}

export function getAccessToken() {
    return storage.get(AccessToken) || ''
}

export function setAccessToken(token = '',expire = 60*60*2){
    return storage.set(AccessToken,token,expire) || ''
}

export function delAccessToken() {
    storage.remove(AccessToken)
}