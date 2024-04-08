<template>
  <div></div>
  <div class="create-group-border">
    <div class="upload-img-topic">上传头像（不上传则使用默认头像）</div>
    <div class="upload">
      <n-upload
          action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
          list-type="image-card"
          :max="1"
      >
        点击上传
      </n-upload>
    </div>
    <n-divider />
    <div class="group-name-topic">群名称</div>
    <div class="group-name">
      <n-input placeholder="请输入用户名" maxlength="15" show-count clearable />
    </div>
    <n-divider />
    <div class="group-introduce-topic">群介绍</div>
    <div class="group-introduce">
      <n-input placeholder="输入群介绍" type="textarea" maxlength="50" show-count clearable />
    </div>
    <n-divider />
    <div class="invite-user-topic">邀请好友</div>
    <div class="invite-user">
<!--      <div></div>-->
      <div class="invite-user-btn" @click="showInvite">+</div>
    </div>
    <n-divider />
    <div class="select-list-topic">群功能</div>
    <div class="select-list">
      <n-switch v-model:value="ifApply" />  是否需要审批
      <n-switch class="marginLeft" v-model:value="ifAllowInvite" />  是否支持邀请
    </div>
    <div class="confirmBtn">
      <n-button strong secondary type="success" @click="search">
        创 建
      </n-button>
    </div>
    <n-modal v-model:show="inviteShow">
      <div class="center">
        <div class="transfer">
          <n-transfer
              ref="transfer"
              v-model:value="value"
              :options="options"
              :render-target-label="renderLabel"
              source-filterable
          />
        </div>
        <div class="select-btn-border">
          <div class="select-btn">确 定</div>
        </div>
      </div>
    </n-modal>
  </div>
</template>

<script setup>
import {onMounted,ref,reactive,h}  from "vue";
import { ArchiveOutline as ArchiveIcon } from "@vicons/ionicons5";
import { NAvatar } from 'naive-ui'


let ifApply = ref(false)
let ifAllowInvite = ref(true)
let inviteShow = ref(false);

let showInvite = ()=>{
  inviteShow.value = true
}

const options = [
  {
    label: "07akioni",
    value: "https://avatars.githubusercontent.com/u/18677354?s=60&v=4"
  },
  {
    label: "amadeus711",
    value: "https://avatars.githubusercontent.com/u/46394163?s=60&v=4"
  },
  {
    label: "Talljack",
    value: "https://avatars.githubusercontent.com/u/34439652?s=60&v=4"
  },
  {
    label: "JiwenBai",
    value: "https://avatars.githubusercontent.com/u/43430022?s=60&v=4"
  },
  {
    label: "songjianet",
    value: "https://avatars.githubusercontent.com/u/19239641?s=60&v=4"
  },
  {
    label: "07akioni",
    value: "https://avatars.githubusercontent.com/u/18677354?s=60&v=4"
  },
  {
    label: "amadeus711",
    value: "https://avatars.githubusercontent.com/u/46394163?s=60&v=4"
  },
  {
    label: "Talljack",
    value: "https://avatars.githubusercontent.com/u/34439652?s=60&v=4"
  },
  {
    label: "JiwenBai",
    value: "https://avatars.githubusercontent.com/u/43430022?s=60&v=4"
  },
  {
    label: "songjianet",
    value: "https://avatars.githubusercontent.com/u/19239641?s=60&v=4"
  },
  {
    label: "07akioni",
    value: "https://avatars.githubusercontent.com/u/18677354?s=60&v=4"
  },
  {
    label: "amadeus711",
    value: "https://avatars.githubusercontent.com/u/46394163?s=60&v=4"
  },
  {
    label: "Talljack",
    value: "https://avatars.githubusercontent.com/u/34439652?s=60&v=4"
  },
  {
    label: "JiwenBai",
    value: "https://avatars.githubusercontent.com/u/43430022?s=60&v=4"
  },
  {
    label: "songjianet",
    value: "https://avatars.githubusercontent.com/u/19239641?s=60&v=4"
  },
  {
    label: "07akioni",
    value: "https://avatars.githubusercontent.com/u/18677354?s=60&v=4"
  },
  {
    label: "amadeus711",
    value: "https://avatars.githubusercontent.com/u/46394163?s=60&v=4"
  },
  {
    label: "Talljack",
    value: "https://avatars.githubusercontent.com/u/34439652?s=60&v=4"
  },
  {
    label: "JiwenBai",
    value: "https://avatars.githubusercontent.com/u/43430022?s=60&v=4"
  },
  {
    label: "songjianet",
    value: "https://avatars.githubusercontent.com/u/19239641?s=60&v=4"
  },{
    label: "07akioni",
    value: "https://avatars.githubusercontent.com/u/18677354?s=60&v=4"
  },
  {
    label: "amadeus711",
    value: "https://avatars.githubusercontent.com/u/46394163?s=60&v=4"
  },
  {
    label: "Talljack",
    value: "https://avatars.githubusercontent.com/u/34439652?s=60&v=4"
  },
  {
    label: "JiwenBai",
    value: "https://avatars.githubusercontent.com/u/43430022?s=60&v=4"
  },
  {
    label: "songjianet",
    value: "https://avatars.githubusercontent.com/u/19239641?s=60&v=4"
  }
];

let value =  ref([options[0].value]);

const renderLabel = function({ option }) {
  return h(
      "div",
      {
        style: {
          display: "flex",
          margin: "6px 0"
        }
      },
      {
        default: () => [
          h(NAvatar, {
            round: true,
            src: option.value,
            size: "small",
            fallbackSrc: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          }),
          h(
              "div",
              {
                style: {
                  display: "flex",
                  marginLeft: "6px",
                  alignSelf: "center"
                }
              },
              { default: () => option.label }
          )
        ]
      }
  );
};


</script>

<style less scoped>
.create-group-border{
  width: 90%;
  height: 100%;
  .upload-img-topic{
    width: 100%;
    height: 30px;
  }
  .upload{
    margin-left: 10px;
    margin-bottom: 20px;
  }
  .group-name-topic{
    width: 100%;
    height: 30px;
  }
  .group-name{
    margin-top: 10px;
  }
  .group-introduce-topic{
    width: 100%;
    height: 30px;
  }
  .group-introduce{
    margin-top: 10px;
  }
  .invite-user-topic {
    width: 100%;
    height: 30px;
  }
  .invite-user{
    width: 100%;
    min-height: 30px;
  }
  .invite-user-btn{
    font-size: 14px;
    height:30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafc;
  }
  .invite-user-btn:hover{
    cursor: pointer;
    border:1px dotted #18a058;
  }
  .select-list-topic{
    width: 100%;
    height: 30px;
  }
  .select-list{
    margin-top: 10px;
    .marginLeft{
      margin-left: 10px;
    }
  }
  .confirmBtn{
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-top:20px;
  }
}
.center{
  width: 40%;
  .transfer{
    :deep(n-transfer){
      border-bottom: none;
    }
  }
  .select-btn-border{
    width: 100%;
    background-color: #fff;
    border-top: none;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: end;
    .select-btn{
      margin-right: 15px;
      display: flex;
      justify-content: center;
      background-color: #e7f5ee;
      width:70px;
      height: 20px;
      border-radius: 5px;
    }
    .select-btn:hover{
      background-color: #ccead3;
      cursor: pointer;
    }
  }
}
</style>