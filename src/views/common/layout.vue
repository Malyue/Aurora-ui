<script setup>
// import { isElectronMode } from '@/utils/common'
</script>

<template>
  <!-- <div id="logo-name" v-if="!isElectronMode()">Aurora IM</div> -->
  <div id="logo-name" >Aurora</div>
  <section class="section">
    <router-view />
  </section>

  <!-- <div class="copyright">
    <span>©2023 Aurora IM</span>
    <span><a href="http://beian.miit.gov.cn" target="_blank">粤ICP备2022078475号-1</a></span>
  </div> -->

  <div class="fly-box">
    <div class="fly bg-fly-circle1"></div>
    <div class="fly bg-fly-circle2"></div>
    <div class="fly bg-fly-circle3"></div>
    <div class="fly bg-fly-circle4"></div>
  </div>
</template>

<style lang="less" scoped>
body {
  -webkit-app-region: drag;
}
@import '@/assets/css/layout.less';

.section {
  height: 100vh;
  width: 100vw;
}
</style>
