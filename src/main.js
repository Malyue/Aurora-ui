import { createApp } from 'vue'
// import '@/styles/tailwind.css'
import './style.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store';
import {setupNaive, setupNaiveDiscreteApi} from './plugins';


async function bootstrap(){
    // const pinia = crea
    const app = createApp(App)

    app.use(router)
    app.use(store)

    setupNaive(app);
    setupNaiveDiscreteApi();
    // setupNaiveDiscreteApi();


    // https://www.naiveui.com/en-US/os-theme/docs/style-conflict#About-Tailwind's-Preflight-Style-Override
    // const meta = document.createElement('meta');
    // meta.name = 'naive-ui-style';
    // document.head.appendChild(meta);

    app.mount('#app')
}

bootstrap()
// createApp(App)
// .use(router)
// .use(store)
// .mount('#app');

