<template>
  <div class="card">
    <div class="image">
      <img :src="cardInfo.avatar">
    </div>
    <div class="card-right">
      <div class="card-name">
        {{cardInfo.name}}
      </div>
      <div class="card-content">
        {{cardInfo.content}}
      </div>
    </div>
    <div class="accept-btn">
      <div class="btn" @click="accepeApply(cardInfo.id)" v-if="cardInfo.accepted===false">{{cardInfo.btnContent}}</div>
      <div class="accepted" v-if="cardInfo.accepted===true">已确定</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted,ref,reactive } from "vue";

const props = defineProps({
  id:String,
  accepted:Boolean,
  img:String,
  name:String,
  // 用户则是填写信息，群聊则是xxx邀请你加入
  content:String,
  btnContent:String,
})

let cardInfo = reactive({
  id:String,
  accepted:props.accepted,
  avatar:props.img,
  name:props.name,
  content:props.content,
  btnContent:props.btnContent||'确 定',
})

onMounted(()=>{

})

let accepeApply = (id)=>{

}
</script>

<style less scoped>
.card {
  width: 80%;
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  .image{
    height:45px;
    width: 45px;
    border-radius: 50%;
    img{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .card-right{
    width: 80%;
    //background-color: #2c3e50;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    border-bottom: #e7f5ee 1px solid;
    .card-name{
      display: flex;
      font-weight:bold;
      color:#000;
    }
    .card-content{
      display: flex;
    }
  }
  .accept-btn{
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    .btn{
      width: 50px;
      background-color:#e7f5ee ;
      justify-content: center;
      align-items: center;
      display: flex;
      border-radius: 5px;
      height: 25px;
      color:#000;
    }
    .btn:hover{
      cursor: pointer;
      background-color: #daf0e4;
    }
  }


}
</style>