<script setup>
import { provide,ref,computed } from 'vue'
// import {}
import {
  NNotificationProvider,
  NMessageProvider,
  NDialogProvider,
  NConfigProvider,
  zhCN,
  dateZhCN,
  darkTheme,
  NLayoutContent
} from 'naive-ui'

</script>

<template>
 <div class="wrapper">
  <div class="content">
    <RouterView></RouterView>
  </div>
  <!-- <div class="footer">
    <div>
      Copyright © 2023 Malyue Coding
    </div>
  </div> -->
 </div>
</template>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width:100vw;
}

.content{
  flex:1,
}

.footer{
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 12px;
}
</style>