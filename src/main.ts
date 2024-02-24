import { createApp } from 'vue'
import 'ant-design-vue/dist/reset.css'
import './index.css'
import App from './App.vue'
import router from "./router/index"
import { createPinia } from 'pinia';
// 创建 Pinia 实例
const pinia = createPinia();

// 创建 Vue 应用
const app = createApp(App);

app.use(pinia).use(router).mount('#app')
