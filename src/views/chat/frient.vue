<template>
  <div class="border">
    <div class="function-list-parent">
      <FunctionList :username="userInfo.name" :user-avatar-url="userInfo.userAvatarUrl" :select="selected"></FunctionList>
    </div>

    <div class="function-page">
      <div class="top">
        {{topMsg}}
      </div>
      <div class="bottom">
        <div class="function-left">
          <div class="apply-topic">申 请</div>
          <div class="apply">
          <!-- 好友申请，群聊邀请，群聊审核等等 -->
            <session :user-avatar-url="ApplyInfo.AvatarUrl" :username="ApplyInfo.name"></session>
          </div>
          <div class="group-list">
            <div class="group-topic">群 聊</div>
            <div v-for="group in groupList" :key="group.id" class="group">
              <session :user-avatar-url="group.groupAvatarUrl" :username="group.name"></session>
            </div>
          </div>
<!--          <div class="friend-list">-->
<!--            <div class="friend-topic">好友</div>-->
<!--          </div>-->
        </div>
        <div class="function-right"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {onMounted,ref,reactive}  from "vue";
import Session from '@/components/chat/session.vue';
import FunctionList from "@/components/chat/function-list.vue";

const router = useRouter();

onMounted(()=>{
  // 请求加载好友列表

})

let ApplyInfo = reactive({
  name:'Apply',
  AvatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
})

let userInfo = reactive({
  name:'Mormon',
  userAvatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
})

let groupList = reactive([{
  id:1,
  name:"群聊A",
  groupAvatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  person:10,
},{
  id:2,
  name:"群聊BBBB",
  groupAvatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  person:10
}])

let selected = ref("friend_list")
let topMsg = ref('好友列表')

</script>

<style less scoped>
.border {
  width: 100vw;
  height: 100vh;
  display: flex;

  .function-list-parent {
    display: flex;
    width: 15%;
    height: 100%;
  }

  .function-page {
    height: 100%;
    width: 85%;
    display: flex;
    flex-direction: column;

    .top {
      margin-top: 10px;
      display: flex;
      background-color: #ffffff;
      margin-left: 10px;
      margin-right: 10px;
      height: 50px;
      border-radius: 10px;
      justify-content: center;
      align-items: center;
      font-size: medium;
      color: #666666;
    }
    .bottom{
      background-color: #ffffff;
      margin-top: 10px;
      margin-left: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      flex-grow: 1;
      width: 98.5%;
      border-radius: 10px;
      .function-left{
        height: 100%;
        width: 17%;
        flex-direction: column;
        display: flex;
        overflow: scroll;
        border-right: 1px solid #ecf0f3;
        align-items: center;
        .apply-topic {
          display: flex;
          height: 20px;
          width: 100%;
          margin-left: 10px;
          align-items: center;
          margin-top: 10px;
          border-bottom: 1px #ecf0f3 solid;
        };
        .apply{
          display: flex;
          width: 100%;
          height: 70px;
        }
        .apply :hover{
          background-color: #e7f5ee;
          cursor: pointer;
        }
        .group-list{
          display: flex;
          width: 100%;
          flex-direction: column;
          .group-topic{
            display: flex;
            height: 20px;
            width: 100%;
            margin-left: 10px;
            align-items: center;
            margin-top: 10px;
            border-bottom: 1px #ecf0f3 solid;
          }
          .group{
            display: flex;
            width: 100%;
            height: 70px;
          }
          .group :hover{
            background-color: #e4e5e6;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>