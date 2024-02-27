import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

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
        component: () => import('@/pages/Home/index.vue'),//因为ant切换语言的缘故，需要改成动态导入组件
    },
    {
        path: "/test", // 默认路由 home页面
        name: 'test',
        component: () => import('@/pages/Test/index.vue'),
    },
    {
        path: "/about", // 默认路由 home页面
        name: 'test',
        component: () => import('@/pages/AboutPage/index.vue'),
    },
    {
        path: "/404", // 默认路由 home页面
        name: '404',
        component: () => import('@/pages/NotFound/index.vue'),
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