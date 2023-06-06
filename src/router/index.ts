import { createMemoryHistory, createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
// 创建路由规则
const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layou',
        component: () => import(/* webpackChunkName: "home" */'../views/layou/layou.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {
                    title: '首页',
                },
                component: () => import(/* webpackChunkName: "default" */ '../views/home/home.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),//不隐藏路由
    // history: createMemoryHistory(),//隐藏路由
    routes: constantRoutes as RouteRecordRaw[],
    // 刷新时，滚动条位置还原
    scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach((to, from, next) => {
    next();
})


// 将路由对象暴露出去
export default router
