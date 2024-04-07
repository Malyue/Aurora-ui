<template>
  <div class="textMessage" :class="{
    leftText:float==='left',
    rightText:float==='right'}">
    <div class="image-left" v-if="float==='left'">
      <img :src="receiverSrc">
    </div>
    <div class="buble">
      <div class="name" :class="{
        leftName:float==='left',
        rightName:float==='right'}"
      >{{name}}</div>
      <div class="message-text" :class="{
    left:float==='left',
    right:float==='right',
    maxwidth:true,
  }">
        <pre v-html="textContent"></pre>
      </div>
      <div class="time">
        {{sendTime}}
      </div>
    </div>
    <div class="image-right" v-if="float==='right'">
      <img :src="mineSrc">
    </div>
  </div>
</template>

<script setup>
import { textReplaceEmoji } from '@/utils/emojis'


const props = defineProps({
  float:String,
  content:String,
  name:String,
  time:String,
  src:String,
  mineSrc:String,
})

const float = props.float;
const receiverSrc = props.src;
const mineSrc = props.mineSrc;
const sendTime = props.time;
const name = props.name;

let textContent = props.content;
textContent = textReplaceEmoji(textContent);
</script>

<style less scoped>
.textMessage{
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  width:100%;
  &.rightText{
    justify-content: flex-end;
  }
}
.image-left{
  display: flex;
  margin-right: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 10px;
  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
.buble{
  min-height: 30px;
  display: flex;
  flex-direction: column;
  .name{
    display: flex;
    justify-content: flex-start;
    &.rightName{
      justify-content: flex-end;
    }
  }
  .message-text{
    min-width: 100%;
    min-height: 30px;
    padding:3px;
    color:#333;
    background:#eff0f1;
    border-radius: 0px 10px 10px 10px;
    &.right{
      display: flex;
      background-color: #daf3fd;
      color:#333;
      border-radius:10px 0px 10px 10px;
      float: right;
    }

    &.maxwidth{
      max-width:40%;
    }

    pre {
      white-space: pre-wrap;
      overflow: hidden;
      word-break: break-word;
      word-wrap: break-word;
      font-size: 14px;
      padding: 3px 5px;
      font-family: 'PingFang SC', 'Microsoft YaHei', 'Alibaba PuHuiTi 2.0 45';
      line-height: 25px;

      :deep(.emoji) {
        vertical-align: text-bottom;
        margin: 0 5px;
      }

      :deep(a) {
        color: #2196f3;
        text-decoration: revert;
      }
    }
  }
  .time{
    display: flex;
    justify-content: flex-end;
    font-size: smaller;
  }
}
.image-right{
  display: flex;
  margin-right: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 10px;
  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>