import {get} from '@/utils/request.js'

// getUserInfo
export const GetUserInfoApi = (token) => {
    const options = {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    }
    return get('/api/v1/user/userInfo',{},options)
}