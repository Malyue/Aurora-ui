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
          <div class="createGroup-list">
            <div class="createGroup-topic">创建群聊</div>
            <div class="divider"></div>
            <div class="createGroup"
                 :class="{
                  selected:selectFunction===0,
               }"
                 @click="changeFunction(0)">
              <session :username="CreateGroup.name" :user-avatar-url="CreateGroup.AvatarUrl"></session>
            </div>
          </div>
          <div class="addFriend-list">
            <div class="addFriend-topic">添加好友/群聊</div>
            <div class="divider"></div>
            <div class="addFriend"
                 :class="{
                  selected:selectFunction===1,
               }"
                 @click="changeFunction(1)">
              <session :user-avatar-url="AddFriend.AvatarUrl" :username="AddFriend.name"></session>
            </div>
          </div>
          <div class="apply-list">
            <div class="apply-topic">申 请</div>
            <div class="divider"></div>
            <div class="apply"
                 :class="{
                  selected:selectFunction===2,
               }"
                 @click="changeFunction(2)">
              <!-- 好友申请，群聊邀请，群聊审核等等 -->
              <session :user-avatar-url="ApplyInfo.AvatarUrl" :username="ApplyInfo.name"></session>
            </div>
          </div>
          <div class="group-list">
            <div class="group-topic">群 聊</div>
            <div v-for="group in groupList" :key="group.id" class="group" :class="{selected: selectGroupId===group.id}">
              <session @click="selectGroup(group)" :user-avatar-url="group.groupAvatarUrl" :username="group.name"></session>
            </div>
          </div>
          <div class="friend-list">
            <div class="friend-topic">好友</div>
            <div class="divider"></div>
            <div v-for="friend in friendList" :key="friend.id" class="friend" :class="{selected: selectFriendId===friend.id}">
              <session @click="selectFriend(friend)" :user-avatar-url="friend.avatar" :username="friend.name"></session>
            </div>
          </div>
        </div>
        <div class="function-right">
          <div class="function-topic">
            {{arr[selectFunction]}}
          </div>
          <div class="function-page">
            <div v-if="selectFunction===2" v-for="apply in ApplyList" :key="apply.id" class="apply-card">
              <ApplyCard :id="apply.id" :img="apply.img" :content="apply.content" :accepted="apply.accept" :name="apply.name"></ApplyCard>
            </div>
            <div v-if="selectFunction===1" class="add-friend-card">
              <AddFriendCard></AddFriendCard>
            </div>
            <div v-if="selectFunction===0" class="create-group-card">
              <CreateGroupCard></CreateGroupCard>
            </div>
            <div v-if="selectFriendId!==-1" class="friend-card">
              <member-card :id="selectFriendInfo.id" :name="selectFriendInfo.name" :account="selectFriendInfo.account" :avatar="selectFriendInfo.avatar" ></member-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {onMounted,ref,reactive}  from "vue";
import Session from '@/components/chat/session.vue';
import FunctionList from "@/components/chat/function-list.vue";
import ApplyCard from '@/components/chat/apply-card.vue';
import AddFriendCard from '@/components/chat/add-friend.vue';
import CreateGroupCard from '@/components/chat/create-group.vue';
import MemberCard from '@/components/chat/member-card.vue';

const router = useRouter();

onMounted(()=>{
  // 请求加载好友列表

})

let ApplyInfo = reactive({
  name:'申请消息',
  AvatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
})

let ApplyList = reactive([{
  id:1,
  name:'Apply A',
  type:'UserApply',
  img:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  content:'This is a content',
  accept:false,
},{
  id:2,
  name:'Group Invite',
  type:'GroupInvite',
  img:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  content: 'xxx invite you into Group Invite',
  accept: true,
}])

let CreateGroup = reactive({
  name:'创建群聊',
  AvatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
})

let AddFriend = reactive({
  name:'新增好友/群聊',
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
},{
  id:3,
  name:"群聊",
  groupAvatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  person:10
}])

let friendList = reactive([{
  id:1,
  name:'用户A',
  account:'155815',
  avatar:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
},{
  id:2,
  name:'用户B',
  account:'155815123',
  avatar:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
},{
  id:3,
  name:'用户C',
  account:'1637901557',
  avatar:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
},{
  id:4,
  name:'用户D',
  account:'1637901557123',
  avatar:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
}])

let selected = ref("friend_list")
let topMsg = ref('好友列表')
// 默认为添加好友 - 如果为-1则说明全部都没选中
let selectFunction = ref(2)
let arr = ['创建群聊','添加好友','申请信息'];

let selectGroupId = ref(-1)
let selectFriendId = ref(-1)
let selectFriendInfo = reactive({
  id:'-1',
  name:'',
  avatar:'',
  account:'',
})

let selectGroupInfo = reactive({

})

// 切换方法，并显示对应的页面
let changeFunction = (index) =>{
  if (index === 0 && selectFunction.value !== 0) {
    selectFunction.value = index
  }else if (index === 1 && selectFunction.value !== 1 ) {
    selectFunction.value = index
  }else if (index ===2 && selectFunction.value !== 2 ) {
    selectFunction.value = index
  }
  selectFriendId.value = -1
  selectGroupId.value = -1
}

let selectFriend = (friend) => {
  selectGroupId.value = -1
  selectFunction.value = -1
  selectFriendId.value = friend.id
  //TODO 发送http请求获得信息
  selectFriendInfo.id = friend.id
  selectFriendInfo.avatar=friend.avatar
  selectFriendInfo.name = friend.name
  selectFriendInfo.account = friend.account
  console.log(selectFriendInfo.id)
}

let selectGroup = (group) => {
  selectFunction.value = -1
  selectGroupId.value = group.id
  selectFriendId.value = -1
  // TODO 发送请求更新信息
  selectGroupInfo = group
}


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
        height: 670px;
        width: 17%;
        flex-direction: column;
        display: flex;
        border-right: 1px solid #ecf0f3;
        align-items: center;
        overflow: auto;
        .selected{
          background-color: #e7f5ee;
          cursor: pointer;
        }
        .createGroup-list{
          display: flex;
          width: 100%;
          flex-direction: column;
          .createGroup-topic {
            display: flex;
            height: 20px;
            width: 100%;
            margin-left: 10px;
            align-items: center;
            margin-top: 10px;
          }
          .createGroup{
            display: flex;
            width: 100%;
            height: 70px;
          }
          .createGroup :hover{
            background-color: #e7f5ee;
            cursor: pointer;
          }
        }
        .addFriend-list{
          display: flex;
          width: 100%;
          flex-direction: column;
          .addFriend-topic{
            display: flex;
            height: 20px;
            width: 100%;
            margin-left: 10px;
            align-items: center;
            margin-top: 10px;
          }
          .addFriend{
            display: flex;
            width: 100%;
            height: 70px;
          }
          .addFriend :hover{
            background-color: #e7f5ee;
            cursor: pointer;
          }
        }
        .apply-list{
          display: flex;
          width: 100%;
          flex-direction: column;
          .apply-topic {
            display: flex;
            height: 20px;
            width: 100%;
            margin-left: 10px;
            align-items: center;
            margin-top: 10px;
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
        .friend-list{
          display: flex;
          width: 100%;
          flex-direction: column;
          .friend-topic{
            display: flex;
            height: 20px;
            width: 100%;
            margin-left: 10px;
            align-items: center;
            margin-top: 10px;
          }
          .friend{
            display: flex;
            width: 100%;
            height: 70px;
          }
          .friend :hover{
            background-color: #e4e5e6;
            cursor: pointer;
          }
        }
      }
      .function-right{
        height: 670px;
        flex-grow: 1;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        .function-topic{
          height: 40px;
          width: 100%;
          font-size: medium;
          align-items: center;
          justify-content: center;
          display: flex;
        }
        .function-page{
          display: flex;
          width: 100%;
          flex-grow: 1;
          flex-direction: column;
          overflow: scroll;
          .apply-card{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 80px;
          }
          .add-friend-card{
            display: flex;
            border: 1px solid transparent;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
          }
          .create-group-card{
            display: flex;
            border: 1px solid transparent;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            height:100%;
            width: 100%;
            overflow: scroll;
          }
          .friend-card{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
        }
      }
    }
    .divider{
      display: flex;
      width: 100%;
      height: 5px;
      margin-top: 5px;
      border-bottom: #f2f2f2 1px solid;
    }
  }
}
</style>