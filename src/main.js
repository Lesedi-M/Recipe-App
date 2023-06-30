import { createApp } from 'vue'
import './style.css'
import router from './router'
import store from './store'
import App from './App.vue'
import * as truncateWords from './filters/truncateWords'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount("#app");

app.config.globalProperties.$filters = truncateWords;





