import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/index.vue')
    },
    {
        path: '/settings/banner',
        name: 'banner',
        component: () => import('../views/settings/banner.vue')
    }
]


const index = createRouter({
    history: createWebHistory(),
    routes
})


export default index