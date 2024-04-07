<template>
<!--  <div class="session-list">-->
    <div class="session">
      <div class="image">
        <img :src="userInfo.userAvatarUrl">
      </div>
      <div class="session-right">
        <div class="session-top">
          <div v-bind:class="[userInfo.content == '' ? 'name' : 'nameWithContent']">
            {{userInfo.name}}
          </div>
          <div v-if="userInfo.content!=''" class="time">
            {{userInfo.time}}
          </div>
        </div>
        <div v-if="userInfo.content!=''" class="chat-content">
          {{userInfo.content}}
        </div>
      </div>
    </div>
<!--  </div>-->
</template>

<script setup>
import { onMounted,ref,reactive } from "vue";

const props = defineProps({
  username:String,
  userAvatarUrl:String,
  content:String,
  type:String,
  time:String,
});

let userInfo = reactive({
  name:props.username || '默认名',
  userAvatarUrl:props.userAvatarUrl||'',
  content:props.content||'',
  type:props.type||'text',
  time:props.time||'',
})

// 如果内容为空，则不展示内容和时间，需要改变样式
// 如果为文件等其他样式，则无法显示，显示为对应的内容

</script>

<style less scoped>
  .session{
    width:100%;
    height:100%;
    display: flex;
    flex-display: row;
    align-items: center;
    padding-left: 8%;
    padding-right: 3%;
  }
  .session .image{
    height:45px;
    width: 45px;
    border-radius: 50%;
  }
  .session img{
    width:100%;
    height:100%;
    border-radius: 50%;
  }
  .session-right{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    flex-direction: column;
    flex-grow: 1;
    .session-top{
      display:flex;
      flex-direction:row;
      width:100%;
      .name{
        height:50%;
        width: 80%;
        color:#666;
        font-size: 12px;
        overflow: hidden;
        letter-spacing: 2px;
      }
      .nameWithContent{
        height: 100%;
        color:#666;
        width: 80%;
        margin-right: auto;
        font-size: 12px;
        letter-spacing: 2px;
        overflow: hidden;
      }
      .time{
        display:inline-block;
        height:50%;
        text-align: right;
        margin-right: 5px;
        flex-grow: 1;
      }
    }
    .chat-content{
      display: flex;
      width: 100%;
      flex-grow: 1;
      overflow: hidden;
      margin-top:5px;
    }
  }
</style>