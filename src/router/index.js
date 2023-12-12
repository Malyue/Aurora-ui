import { createRouter, createWebHistory } from 'vue-router';
// import baseRouters from './modules/base/base';
// import base from './modules/base/base';
import userRouters from '@/router/modules/auth/auth'


const routes = [
    userRouters,
]

const getHistoryMode = () => {
    return import.meta.env.VITE_ROUTER_MODE == 'hash' ? createWebHashHistory() : createWebHistory()
  }
  
const router = createRouter({
    history: getHistoryMode(),
    routes
})

// // 设置中间件，权限验证
// router.beforeEach((to) => {
//     if (to.meta.requiresAuth && !isLoggedIn()) {
//       return {
//         path: '/auth/login',
//         query: { redirect: to.fullPath }
//       }
//     }
// })

export default router;

