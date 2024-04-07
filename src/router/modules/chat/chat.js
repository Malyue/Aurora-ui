import ChatView from '@/views/chat/chat.vue'
import FriendList from '@/views/chat/frient.vue'
export default {
    path: '/chat',
    name: 'chat',
    redirect:'/chat/contact',
    children:[
        {
            path:'/chat/contact',
            meta:{requiresAuth:true},
            component:ChatView,
        },
        {
            path:'/chat/friendList',
            meta:{requiresAuth: true},
            component: FriendList,
        }
        // {
        //     path:'/chat/friends',
        //     meta:{requiresAuth: true},
        //     component:()=>import()
        // },
        // {
        //     path:'/chat/apply',
        //     meta: {requiresAuth: true},
        //     component:()=>import()
        // },
        // {
        //     path: '/chat/group/open',
        //     meta: {requiresAuth: true},
        //     component:()=>import()
        // }
    ]
}