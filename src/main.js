import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store';
import * as plugins from '@/plugins'

async function bootstrap(){
    // const pinia = crea
    const app = createApp(App)

    app.use(router)
    app.use(store)

    plugins.setupNaive(app);

    app.mount('#app')
}

bootstrap()
// createApp(App)
// .use(router)
// .use(store)
// .mount('#app');

