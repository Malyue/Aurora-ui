<template>
    <div class="border">
        <div class="left-border">
            <div class="icon"></div>
            <div class="title">
                <h1 class="text-background fade-in-text">Aurora</h1>
            </div>
            <div class="content text-background">
                A simple IM system that brings you seamless&nbsp  
                <p class="animated-text"> {{ animatedText }} </p>
                <!-- <div v-for="(text,index) in texts" :key="index" class="text-background">
                    <p :style="{ animationDirection: direction}">{{ animatedText }}</p>
                </div> -->
                &nbspfunctionality
            </div>
            <div class="copyright">
                <span>©2023 Aurora IM</span>
                <span><a href="http://beian.miit.gov.cn" target="_blank">粤ICP备2022078475号-1</a></span>
            </div>
        </div>
        <div class="auth-border">
            <div class="auth">
                <div class="container">
                    <div class="auth-field">
                        <div class="signin" @click="loginChange" :class="{ 'font-swell':isSiginSwell === 'login' }">Login</div>
                        <div class="signup" @click="registerChange" :class="{'font-swell': isSiginSwell === 'signup'}" @mouseover="handleMouseOver" @mouseout="handleMouseOut">Signup</div>
                        <div class="board left" :class="{'right':isRight}"></div>
                    </div>
                </div>
                <div class="login-form">
                    <div class="label account-label">Account</div>
                    <div class="account-input input">
                        <n-input v-model:value="model.account" class="coverParent n-input" type="text" placeholder="Please input your account" clearable >
                            <template #clear-icon>
                                <n-icon :component="TrashBinOutline" />
                            </template>
                        </n-input>
                    </div>
                    <div class="label password-label">Password</div>
                    <div class="password-input input">
                        <n-input
                            type="password"
                            show-password-on="mousedown"
                            placeholder="Input Password"
                            :maxlength="15"
                            class="coverParent n-input"
                            v-model:value="model.password"
                        >
                        </n-input>
                    </div>
                </div>
                <div class="auth-btn" @click="login">
                    <span>
                        {{ authText }}
                    </span>
                </div>
                <div class="auth-text">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted,ref,reactive } from 'vue';
import { TrashBinOutline } from '@vicons/ionicons5'
import {LoginApi} from '@/api/auth'
import { useRouter } from 'vue-router';
import {setAccessToken,setRefreshToken,getAccessToken} from '@/utils/auth.js';


const texts = ref(["Chat","Video"]);
const router = useRouter();


// 显示的文字及其索引
let animatedText = ref('');
let animatedTextIndex = ref(0);
let direction = ref('normal');

let intervalID = null;

// 顶部login/register切换
let isRight = ref(false)
let isSiginSwell = ref('login')

// 登录按钮显示文字
let authText = ref("Login")

let model = reactive({
  account: '',
  password:'',
})

// 鼠标悬浮
let handleMouseOver = (event)=>{
    let className = event.target.classList[0]
    if (className === 'signup' ){
        isRight.value = true
        isSiginSwell.value = 'signup'
    }else{
        isRight.value = false
        isSiginSwell.value = 'login'
    }
}

// 鼠标移开
let handleMouseOut = (event) => {
    let className = event.target.classList[0]
    if (className === 'signup' ){
        isRight.value = false;
        isSiginSwell.value = 'login';
    }else{
        isRight.value = true
        isSiginSwell.value = 'signup'
    }
}


// login-register selector
let registerChange = () => {
    router.push('/user/register')
}

let loginChange = () => {
    // console.log("login")
    // if (isSiginSwell.value == 'login') {
    //     return
    // }
    // isSiginSwell.value = 'login'
    // isRight.value = false
    // authText.value = 'login'
}

let login = () => {
  if(model.account === "") {
    window['$message'].warning('The account is invalid')
    return
  }
  if (model.password === ""){
    window['$message'].warning('The password is invalid')
    return
  }

  let response = LoginApi({
    account: model.account,
    password:model.password,
  })

  response.then(async (res) => {
    if (res.code === 200) {
      window['$message'].success('登陆成功')
      console.log(res)
      // TODO setToken
      setAccessToken(res.data.accessToken)
      setRefreshToken(res.data.refreshToken)
      // storage user info
      router.push("/chat/contact")
    }else{
      // console.log(res);
      window['$message'].warning(res.msg);
    }
  })
}
   
// 首页文字动画
let toggleText = () =>{
    const currentText = texts.value[animatedTextIndex.value];
    const length = animatedText.value.length;

    // 长度一致时，会暂停2s,可以看到完整的文字
    if (currentText.length === length) {
        clearInterval(intervalID);
        setTimeout(()=>{
             // 减少一个文字
            direction.value = 'normal'
            animatedText.value = animatedText.value.slice(0,length-1);
            // 重新启动计时
            intervalID = setInterval(toggleText,200);
            return
        },1000)
    }

    // 大于0且需要递减
    if ( direction.value == 'normal' && length > 0) {
        animatedText.value = animatedText.value.slice(0,length-1);
        return
    }
    if (direction.value == 'reverse') {
        // 开始递增
        animatedText.value = currentText.slice(0,length+1)
        return
    }
    // 切换为下一个
    animatedTextIndex.value = (animatedTextIndex.value + 1) % texts.value.length
    animatedText.value = '';
    direction.value = 'reverse';
}

onMounted(()=>{
    intervalID = setInterval(()=>{
        toggleText();
    },300)
  // 如果存在token，则直接跳过
  if (getAccessToken() !== ''){
    router.push('/chat/contact')
  }
})

</script>


<style less scoped>
@import url(https://fonts.googleapis.com/css?family=Cute+Font);

/* @login-text-font-family: 'Cute Font',cursive; */


.coverParent{
    width: 100%;
    height: 100%;
    /* height: 100%; */
}
.text-background {
    background: linear-gradient(
        to right,
        hsl(98 100% 62%),
        hsl(204 100% 59%)
    );
    /* display: flex; */
    /* align-items: center; */
    /* align-content: center; */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    background-clip: text;
    display: inline;
    animation: fadeIn 2s ease-in-out;
    /* animation-delay: 500ms; */
}
.border{
    /* background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); */
    /* background-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%); */
    /* background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%); */
    /* background-image: linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%); */
    background: hsl(204 100% 5%);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
}
.left-border {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* text-align: center; */
}
.left-border .icon {
    display: flex;
}
.left-border .title{
    display: flex;
    text-align: center;
}
.left-border h1{
    text-align: center;
    font-size: 16vmin;
    line-height: 1.1;
    margin: 0;
    /* font-family: "Dank Mono", ui-monospace, monospace; */
    font-family: 'Dancing Script',cursive;
}
.left-border .content {
    display: flex;
    margin-top: 30px;
    text-align: center;
    font-size: 13vmin;
    line-height: 1.1;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: min(200%,5vmin);
}
.text-transition {
    /* 调整动画时间和循环次数 */
    /* animation: slideInOut 4s Infinite;  */
    animation: slideInOut 5s steps(50,end);
    display: inline-block;
}

@keyframes slideInOut {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

.fade-in-text {
    animation: fadeIn 2s ease-in-out;
}

/* 渐现效果 */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* 文字交换 */
@keyframes reveal {
   from {
    width: 0;
   }
   to {
    width: 100%;
   }
}
/* 
.text-background p {
    animation: reveal 0.2s;
} */
.animated-text {
    display: inline;
    /* background: hsl(30,100%,50); */
    background: linear-gradient(
        to right,
        /* hsl(98 100% 62%), */
        hsl(201 100% 62%),
        hsl(278 100% 62%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
}


/* Auth-border */
.auth-border{
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.auth-border .auth{
    display: flex;
    width: 80%;
    /* align-items: center; */
    height: 90%;
    background-color: #d6d6d6;
    border-radius: 30px;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
}

.auth-border .auth{
    .login-form{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 70%;
        justify-content: center;
        align-items: center;

    }
    .label{
        display: flex;
        width: 60%;
        height: 20px;
        align-items: center;
        color: #36ad6a;
        font-size: 14px;
        text-decoration: dotted;
    }
    .account-label{
        margin-top: 100px;
    }
    .password-label {
        margin-top: 40px;
    }
    .input {
        display: flex;
        border-radius: 50px;
        width: 60%;
        height: 50px;
        align-items: center;
        justify-content: center;
        background-color: #f1f1f1;
    }

    .account-input {
        /* margin-top: 100px; */
        margin-top: 10px;
    }

    .password-input {
        /* margin-top: 30px; */
        margin-top: 10px;
    }
    .n-input{
        border-radius: 20px;
        box-sizing: border-box;
        text-align: center;
        line-height: 50px;
    }


    .auth-btn{
        /* color: #8fe4c7; */
        background-color: #4dccc6;
        background-image: linear-gradient(315deg,#4dccc6 0%,#96e4df 74%);
        line-height: 42px;
        padding:0;
        border:none;
        border-radius: 10px;
        width: 40%;
        height: 7%;
        color: #f1f1f1;
        font-family: 'Lato',sans-serif;
        background-color: transparent;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 1px;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        box-shadow: inset 2px 2px 2px 0px rgba(255,255,255,.5),
            7px 7px 20px 0px rgba(0,0,0,.1),
            4px 4px 5px 0px rgba(0, 0, 0, .1);
        outline: none;
        align-items: center;
        justify-content: center;
        display: flex;;
    }
    .auth-btn:hover{
        background-color: #89d8d3;
        background-image: linear-gradient(315deg,#89d8d3 0%,#03c8a8 74%);
    }
    .auth-btn span {
        position: relative;
        display: flex;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
    }
    .auth-btn:before,
    .auth-btn:after {
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
                    -4px -4px 6px 0 rgba(116, 125, 136, .2), 
            inset -4px -4px 6px 0 rgba(255,255,255,.9),
            inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
        transition: all 0.3s ease;
    }
    .auth-btn:before {
        height: 0%;
        width: .1px;
    }
    .auth-btn:after {
        width: 0%;
        height: .1px;
    }
    .auth-btn:hover:before {
        height: 100%;
    }
    .auth-btn:hover:after {
        width: 100%;
    }
    .auth-btn span:before,
    .auth-btn span:after {
        position: absolute;
        content: "";
        left: 0;
        bottom: 0;
        box-shadow:  4px 4px 6px 0 rgba(255,255,255,.9),
                    -4px -4px 6px 0 rgba(116, 125, 136, .2), 
            inset -4px -4px 6px 0 rgba(255,255,255,.9),
            inset 4px 4px 6px 0 rgba(116, 125, 136, .3);
        transition: all 0.3s ease;
    }
    .auth-btn span:before {
        width: .1px;
        height: 0%;
    }
    .auth-btn span:after {
        width: 0%;
        height: .1px;
    }
    .auth-btn span:hover:before {
        height: 100%;
    }
    .auth-btn span:hover:after {
       width: 100%;
    }

}


/* copyright */
.copyright {
    display: flex;
    margin-top: 100px;
    text-align: center;
    font-size: 14px;
    color:#b1a0a0
}

.copyright span{
    margin: 0 5px;
}
.copyright a {
    color: #777272;
    font-weight: 400;
}


/* Login/Signup */
.container {
    display: flex;
    width: 70%;
    height: 100px;
    background-color: #d6d6d6;
    margin-top: 25px;

    .auth-field{
        height: 50px;
        width: 300px;
        display: flex;
        margin: auto;
        background: #f1f1f1;
        border-radius: 50px;
        justify-content: space-between;
        position: relative;
        box-shadow: 1px 1px 10px 0px #9898;
    }

    .signin{
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        width: 100%;
        z-index: 1;
        flex-grow:1;
        font-size: 32px;
        font-family: 'Cute Font',cursive;
        transition: font-size 0.3s;
    }
    .signup{
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        width: 100%;
        z-index: 1;
        flex-grow:1;
        font-size: 32px;
        font-family: 'Cute Font',cursive;
        transition: font-size 0.3s;
    }
    .board{
        /* width: 300px*0.5; */
        width: 150px;
        /* 50*1.15 */
        height: 57.5px;
        position: absolute;
        background-color: #45D3A2;
        opacity: .6;
        z-index: 0;
        transition: border-radius 0.4s,transform 0.3s;
        box-shadow: 1px 1px 10px 0px #989898;
    }
    .left {
        /* width*-0.01 height*-0.06 */
        transform: translate(-3px,-3px);
        border-radius: 50px 10px 10px 50px;
    }
    .right {
        /*         transform: translate((200-200/2)+200*0.012,50*-0.06);
 */
        transform: translate(151.8px,-3px);
        border-radius: 10px 50px 50px 10px;
        /* background-color: #E63946; */
        background-color: #34b1f1;
    }
    .font-swell {
        font-size: 40px;
    }
}

</style>