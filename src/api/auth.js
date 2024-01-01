import {post} from '@/utils/request'

// login
export const LoginApi = (data) => {
    return post('/api/v1/user/login',data)
} 

// register
export const RegisterApi = (data) => {
    return post('/api/v1/user/register',data)
}

// logout
export const LogoutApi = (data) => {
    return post('/api/v1/user/logout',data)
}

// refresh Token
export const RefreshTokenApi = () => {
    return post('/api/v1/user/refresh-token')
}

