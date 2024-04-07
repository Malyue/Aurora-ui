<template>
  <div class="function-list">
    <div class="user-image">
      <img :src="userInfo.userAvatarUrl" alt="用户头像">
    </div>
    <div class="user-name">{{userInfo.name}}</div>
    <div class="border-bottom"></div>
    <div class="functions">
      <!--    首页      -->
      <div class="function" :class="{selected: select==='Home'||select===''}" @click="selectFunction('contact')">
        <img src="@/assets/image/msg.png">
        <div>Home</div>
      </div>
      <!--        &lt;!&ndash;  好友列表      &ndash;&gt;-->
      <div class="function" :class="{selected: select==='friend_list'}" @click="selectFunction('friendList')">
        <img src="@/assets/image/friend.png">
        <div>Friend List</div>
      </div>
      <!-- 朋友圈 -->
      <div class="function" :class="{selected: select==='friend_cycle'}">
        <img src="@/assets/image/friend_cycle.png">
        <div>Memory</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted,ref,reactive } from "vue";


const props = defineProps({
  username:String,
  userAvatarUrl:String,
  select:String,
})


onMounted(()=>{
  // 从缓存加载会话列表
  // 如果是今天的，则显示时间，反之则显示日期
  console.log(select.value)
})


// 用户信息
let userInfo = reactive({
  name:props.username||'默认名',
  userAvatarUrl:props.userAvatarUrl||'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
})

let select = ref(props.select)

let sessionList = reactive([{
  id:1,
  username:'用户A',
  userAvatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  content:'',
  time:'2023/01/04'
},{
  id:2,
  username: "用户B",
  userAvatarUrl: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  content:'This is content',
  time:'2023/01/04'
}])

const router = useRouter();


let selectFunction = (path)=>{
  if (router.currentRoute.value.path !== path) {
    router.push(path);
  }
}

</script>

<style less scoped>
  .function-list{
    height:100%;
    width:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    .user-image{
      display: flex;
      width: 70px;
      height: 70px;
      margin-top: 8vh;
      border-radius: 50%;
    }
    .user-image img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
    .user-name{
      display: flex;
      width: 100%;
      height: 30px;
      justify-content: center;
      align-items: center;
      margin-top: 5px;
    }
    .border-bottom{
      border-bottom: 1px #ecf0f3 solid;
      height: 1px;
      width: 100%;
      margin-top:20px;
    }
    .functions{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height:60%;
      .function{
        display: flex;
        width: 90%;
        height:45px;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        margin-top:20px;
        border-radius: 10px;
      }
      .selected{
        background-color: #f2f2f2;
        color:#000000;
      }
      .function:hover{
        background-color: #f2f2f2;
        color:#000000;
        cursor: pointer;
      }
      .function img{
        width:20%;
        height: 80%;
        display: flex;
        align-items: center;
      }
      .function div{
        width:65%;
        height: 80%;
        margin-left: 5px;
        display:flex;
        align-items: center;
        word-break:break-word;
      }
    }
  }
</style>