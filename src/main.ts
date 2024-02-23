import { createApp } from 'vue'
import 'ant-design-vue/dist/reset.css'
import './index.css'
import App from './App.vue'
import router from "./router/index"

createApp(App).use(router).mount('#app')
