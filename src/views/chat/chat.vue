<template>
  <div class="border">
    <div class="function-list-parent">
      <FunctionList :username="userInfo.name" :user-avatar-url="userInfo.userAvatarUrl" :select="selected"></FunctionList>
    </div>
    <div class="function-page">
      <div class="top">
        {{topMsg}}
      </div>
      <div class="mymsg">
        <div class="session-list">
          <div class="session-list-topic">会话列表</div>
          <div class="session" v-for="info in sessionList" :key="info.id">
            <session :username="info.username" :user-avatar-url="info.userAvatarUrl" :content="info.content" :time="info.time"></session>
          </div>
        </div>
        <div class="chat-area">
          <div class="chat-top">
            {{talkInfo.name}}
          </div>
          <div class="text-area">
            <div class="msg" v-for="msg in msgList" :key="msg.id" >
              <TextMessage v-if="msg.type==='text'"
               :float="msg.sender === 1 ? 'right' : 'left'"
               :name="msg.username"
               :time="msg.sendTime"
               :content="msg.content"
               :src="msg.src"
               :mine-src="msg.mineSrc">
              </TextMessage>
            </div>
          </div>
          <div class="send-area">
            <div class="function-list">
              <div class="function">
                <img src="@/assets/image/emoij.png">
              </div>
            </div>
            <div class="textarea">
              <textarea class="sub-textArea"></textarea>
            </div>
            <div class="sendBorder">
              <div class="send">发 送</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted,ref,reactive } from "vue";
import Session from '@/components/chat/session.vue';
import FunctionList from '@/components/chat/function-list.vue'
import TextMessage from '@/components/chat/textMessage.vue'

const router = useRouter();

onMounted(()=>{
  // 从缓存加载会话列表
  // 如果是今天的，则显示时间，反之则显示日期
})

let topMsg = ref("我的消息")

// 用户信息
let userInfo = reactive({
  name:'Mormon',
  userAvatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
})

let selected = ref("Home")

let talkInfo = reactive({
  name:'你好',
  userAvatarUrl:'',
})

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

let msgList = reactive([{
  id:1,
  type:'text',
  sender:1,
  username:"123",
  content:'This is a content 1',
  mineSrc:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  src:'',
  sendTime:'2023/01/03 09:40:00',
},{
  id:2,
  type:'text',
  sender:2,
  username: "457",
  content: 'This is a content 2',
  src:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  mineSrc:'',
  sendTime: '2023/01/03 10:50:00',
}])




</script>

<style less scoped>
.border {
  width: 100vw;
  height: 100vh;
  display: flex;
  .function-list-parent{
    display: flex;
    width:15%;
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

    .mymsg {
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

      .session-list {
        height: 100%;
        width: 17%;
        flex-direction: column;
        display: flex;
        overflow: scroll;
        border-right: 1px solid #ecf0f3;

        .session-list-topic {
          width: 100%;
          display: flex;
          border-left-radius: 10px;
          height: 40px;
          justify-content: center;
          align-items: center;
          border-bottom:#f2f2f2 1px solid;
        }

        .session {
          width: 100%;
          height: 70px;
        }

        .session :hover {
          background-color: #e4e5e6;
          cursor: pointer;
        }
      }

      .chat-area {
        height: 100%;
        flex-grow: 1;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        .chat-top{
          height: 40px;
          width: 100%;
          font-size: medium;
          align-items: center;
          justify-content: center;
          display: flex;
          border-bottom:#f2f2f2 1px solid;
        }
        .text-area{
          display: flex;
          width: 100%;
          height: 70%;
          border-bottom:#f2f2f2 1px solid;
          flex-direction: column;
          overflow: scroll;
          .msg{
            width: 100%;
          }
        }
        .send-area{
          display: flex;
          flex-grow: 1;
          flex-direction: column;
          .function-list{
            display: flex;
            height:20%;
            width: 100%;
            align-items: center;
            .function{
              width:30px;
              height: 30px;
              margin-left: 20px;
              margin-top:5px;
              img{
                width: 100%;
                height: 100%;
              }
            }
            .function{
              &:hover{
                img{
                  content:url('@/assets/image/emoij_color.png');
                }
              }
            }
          }
          .textarea{
            max-height:55%;
            min-height: 55%;
            width: 100%;
            .sub-textArea{
              height: 100%;
              width: calc(100% - 10px);
              letter-spacing: 1px;
              word-spacing: 2px;
              border:none;
              caret-color: black;
              margin-top:10px;
              margin-left: 10px;
              margin-right: 10px;
              resize: none;
            }
            .sub-textArea:focus{
              outline: none;
            }
          }
          .sendBorder{
            display: flex;
            flex-grow: 1;
            width: 100%;
            align-items: center;
            justify-content: right;
            padding-right: 15px;
            .send{
              width: 80px;
              background-color: #e4e5e6;
              height:70%;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 5px;
              color:#000;
            }
            .send:hover{
              color: #2ecb77;
              background-color: #e7f5ee;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}


</style>