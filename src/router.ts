// router/index.ts 文件

import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'
//由于router的API默认使用了类型进行初始化，内部包含类型定义，所以本文内部代码中的所有数据类型是可以省略的
//RouterRecordRaw是路由组件对象

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'Home', component: () => import('./views/home.vue') },
    { path: '/Login', name: 'Login', component: () => import('./views/Login.vue')},
    { path: '/Browse', name: 'Browse', component: () => import('./views/browse.vue')},
    { path: '/Material', name: 'Material', component: () => import('./views/Material.vue')},
    { path: '/Product', name: 'Product', component: () => import('./views/product.vue')},
    { path: '/Transation', name: 'Transation', component: () => import('./views/Transation.vue')},
    { path: '/Use', name: 'Use', component: () => import('./views/use.vue')},
    { path: '/User', name: 'User', component: () => import('./views/user.vue')},
]   

// RouterOptions是路由选项类型
const options: RouterOptions = {
    history: createWebHashHistory(),
    routes,
   }
   
   // Router是路由对象类型
   const router: Router = createRouter(options)
   
   export default router