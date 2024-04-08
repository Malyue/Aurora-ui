<template>
  <div></div>
  <div class="card-border">
    <div class="search-border">
      <div class="search">
        <n-input placeholder="用户id / 用户名 / 群名称">
          <template #prefix>
            <n-icon :component="FlashOutline" />
          </template>
        </n-input>
      </div>
      <div class="search-btn">
        <n-button strong secondary type="success" @click="search">
          Search
        </n-button>
      </div>
    </div>
    <div class="user-list-topic" v-if="searchUserList.length !== 0">
      用 户
    </div>
    <div class="user-list" v-for="user in searchUserList" :key="user.id">
      <ApplyCard :accepted="false" :name="user.name" :img="user.avatar" :id="user.id" btn-content="申 请"></ApplyCard>
    </div>
    <div class="group-list-topic" v-if="searchGroupList.length !== 0">
      群 聊
    </div>
    <div class="group-list" v-for="group in searchGroupList" :key="group.id">
      <ApplyCard :accepted="false" :name="group.name" :img="group.avatar" :id="group.id" btn-content="申 请"></ApplyCard>
    </div>
    <div class="no-content" v-if="ifSearch === false">
      <img src="@/assets/image/no_data.png">
    </div>
    <div class="no-search" v-if="ifSearch===true && searchUserList.length===0 && searchGroupList.length===0">
      <img src="@/assets/image/no_search.png">
    </div>
  </div>
</template>

<script setup>
import {FlashOutline} from "@vicons/ionicons5";
import {onMounted,ref,reactive}  from "vue";
import ApplyCard from '@/components/chat/apply-card.vue';

let ifSearch = ref(true);

let search = ()=>{

}

let searchUserList = reactive([
  {
    id:'1',
    name:'搜索用户1',
    avatar:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  },
  {
    id:'2',
    name:'搜索用户B',
    avatar:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  }
])

let searchGroupList = reactive([
  {
    id:'1',
    name:'搜索群组1',
    avatar:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  },
  {
    id:'2',
    name:'搜索群组2',
    avatar:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm',
  }
])

</script>

<style less scoped>
.card-border{
  height: 80%;
  width: 100%;
  display:flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  .search-border{
    width: 70%;
    display: flex;
    flex-direction: row;
    .search {
      width: 100%;
      height: 100%;
      margin-right: 10px;
    }
    .search-btn{

    }
  }
  .user-list-topic{
    display: flex;
    border-bottom:#f2f2f2 1px solid;
    width: 80%;
    height: 30px;
    margin-top: 40px;
    justify-content: flex-start;
    color:#000;
    font-size: 12px;
  }
  .user-list{
    display: flex;
    width: 80%;
    height: 100px;
    justify-content: center;
    align-items: center;
  }
  .group-list-topic{
    display: flex;
    border-bottom:#f2f2f2 1px solid;
    width: 80%;
    height: 30px;
    margin-top: 40px;
    justify-content: flex-start;
    color:#000;
    font-size: 12px;
  }
  .group-list{
    display: flex;
    width: 80%;
    height: 100px;
    justify-content: center;
    align-items: center;
  }
  .no-content{
    width: 50%;
    display: flex;
    flex-grow: 1;
    margin-top: 10px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .no-search{
    width: 50%;
    margin-top: 10px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
</style>