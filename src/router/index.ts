import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "@/pages/Home/index.vue";
import TestPage from "@/pages/Test/index.vue";
import NotFoundPage from "@/pages/NotFound/index.vue";

// 1. 配置路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        redirect: '/home', // 根路由重定向到 /home
    },
    {
        path: "/home", // 默认路由 home页面
        name: 'home',
        component: () => HomePage,
    },
    {
        path: "/test", // 默认路由 home页面
        name: 'test',
        component: () => TestPage,
    },
    {
        path: "/404", // 默认路由 home页面
        name: '404',
        component: () => NotFoundPage,
    },
    {
        path: "/:path(.*)", // 通配符路由，匹配任何路径
        redirect: '/404'
    }

];
// 2.返回一个 router 实列，为函数，配置 history 模式
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 3.导出路由   去 main.ts 注册 router.ts
export default router