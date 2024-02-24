import { createApp } from 'vue'
import 'ant-design-vue/dist/reset.css'
import './index.css'
import App from './App.vue'
import router from "./router/index"
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import zhCN from './language/zh-CN'
import enUS from './language/en-US'

// 创建 Pinia 实例
const pinia = createPinia();

const language = { 'zh-CN':zhCN,'en-US':enUS };
//注意：在创建实例时，一定要将 legacy 属性设置为 false，因为 legacy 默认为 true，它支持使用 Vue2 框架中的 Options API，如果要在 Vue3 更好的使用 Composition API 模式，那么就需要将此属性手动设置为 false
// 上述来自 https://blog.csdn.net/forever__fish/article/details/134335402

const i18n = createI18n({
    legacy: false,
    messages: language,
    // locale: 'zh-CN'
})

// 创建 Vue 应用
const app = createApp(App);

app.use(pinia)
    .use(router)
    .use(i18n)
    .mount('#app')
