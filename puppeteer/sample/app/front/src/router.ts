import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';

const About = () => import(/* webpackChunkName: "about" */ './views/about.vue');
const Spider = () => import(/* webpackChunkName: "spider" */ './views/spider.vue');

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About,
        },
        {
            path: '/spider',
            name: 'spider',
            // route level code-splitting
            // this generates a separate chunk (spider.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Spider,
        },
    ],
});
