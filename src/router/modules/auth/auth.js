import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/auth/login.vue'
import RegisterView from '@/views/auth/register.vue'

export default {
    path: '/user',
    name: 'user',
    redirect: '/user/register',
    component: ()=>import('@/views/common/layout.vue'),
    children:[
        {
            path: '/user/login',
            meta: {requiresAuth:false},
            component:LoginView
        },
        {
            path: '/user/register',
            meta: {requiresAuth:false},
            component:RegisterView
        }
    ]
}