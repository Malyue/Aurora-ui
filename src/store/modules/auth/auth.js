import { defineStore } from 'pinia';
import {delAccessToken} from "@/utils/auth.js";
import {storage} from "@/utils/storage.js";

export const useUserStore = defineStore('user',{
    persist:true,
    state:() => {
        return {
            // TODO 短时间内不需要频繁请求用户信息
            uid:0,
            online:false,
        }
    },
    getters: {

    },
    actions:{
        // 设置用户登录状态
        updateSocketStatus(status) {
            this.online = status
        },
        // 登出
        logoutLogin() {
            this.$reset()
            storage.remove("user_info")
            delAccessToken()
            location.reload()
        },

        loadSetting() {

        },
    }
})