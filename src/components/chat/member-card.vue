<template>
  <div class="member-card-border">
    <div class="userInfo">
      <div class="image">
        <img :src="userInfo.avatar">
      </div>
      <div class="info_border">
        <div class="name">
          {{userInfo.name}}
        </div>
        <div class="account">
          账号: {{userInfo.account}}
        </div>
      </div>
    </div>
<!--    <div class="divider"></div>-->
    <div class="detail">
      <div class="account-border">
        <div class="account-topic">账 号</div>
        <div class="account">
          {{userInfo.account}}
        </div>
      </div>
      <div class="introduce-border">
        <div class="introduce-topic">个性签名</div>
        <div class="introduce">
<!--          {{userInfo.introduce}}-->
          这是一个很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的个性签名
        </div>
      </div>
    </div>
    <div class="function">
      <div class="sendMsgBorder">
        <div class="sendMsg-btn">发送消息</div>
      </div>
      <div class="deleteUserBorder">
        <div class="delete-btn">删除好友</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted,ref,reactive,watchEffect } from "vue";
onMounted(()=>{
  console.log(111,props)
})
const props = defineProps({
  id:String,
  account:String,
  name:String,
  avatar:String,
  introduce:String,
})

const userInfo = reactive({
  id:props.id,
  account:props.account,
  name:props.name,
  avatar:props.avatar,
  introduce:props.introduce,
})

watchEffect(() => {
  userInfo.id = props.id,
      userInfo.account = props.account,
      userInfo.name = props.name,
      userInfo.avatar = props.avatar,
  userInfo.introduce=props.introduce
});
</script>

<style less scoped>
.member-card-border {
  display: flex;
  width: 40%;
  height: 60%;
  margin-top: 20px;
  flex-direction: column;
  .userInfo {
    margin-top: 20px;
    height: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    background-color: #f5f5f5;
    .image {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      display: flex;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .info_border {
      display: flex;
      height: 80px;
      flex-direction: column;
      margin-left: 20px;
      justify-content: center;
      .name{
        display: flex;
        font-size: 15px;
        color: #000;
      }
      .account{
        display: flex;
        margin-top:10px;
      }
    }
  }
  .detail{
    display: flex;
    margin-top: 10px;
    width: 100%;
    background-color: #f5f5f5;
    flex-direction: column;
    .account-border{
      display:flex;
      height:30px;
      align-items: center;
      flex-direction: row;
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
      .account-topic{
        display: flex;
        width:70px;
        height: 100%;
        align-items: center;
        justify-content: center;
        color:#000;
      }
      .account{
        display: flex;
        height: 100%;
        width: 300px;
        align-items: center;
      }
    }
    .introduce-border{
      display:flex;
      min-height:30px;
      align-items: center;
      flex-direction: row;
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
      .introduce-topic{
        display: flex;
        width:70px;
        height: 100%;
        align-items: center;
        color:#000;
        justify-content: center;
      }
      .introduce{
        display: flex;
        height: 100%;
        width: 300px;
        align-items: center;
      }
    }
  }
  .function{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
    align-items: center;
    .sendMsgBorder{
      display: flex;
      height: 30px;
      width: 200px;
      .sendMsg-btn{
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: #e7f5ee;
      }
    }
    .deleteUserBorder{
      display: flex;
      height: 30px;
      width: 200px;
      margin-top: 10px;
      .delete-btn{
        height: 100%;
        width: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: #f7dee3;
      }
    }
  }
  .divider{
    display: flex;
    height: 10px;
    width: 100%;
    border-bottom: #a0a5a8 1px solid;
  }
}


</style>