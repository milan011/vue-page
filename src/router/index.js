import Vue from 'vue';
import Router from 'vue-router';

// 同步加载
import Home from '@/pages/index';

// 按需加载
// const Home = () => import('@/pages/index');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        { path: '*', redirect: '/' }
    ]
})
