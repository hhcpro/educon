import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Embed from 'v-video-embed';

Vue.use(Embed);
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import(/* webpackChunkName: "register" */ '../views/Register.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    },
    {
        path: '/videos',
        name: 'Videos',
        component: () =>
            import(/* webpackChunkName: "login" */ '../views/Videos.vue'),
    },
    {
        path: '/Mainframe',
        name: 'Mainframe',
        component: () =>
            import(/* webpackChunkName: "Mainframe" */ '../views/Mainframe.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;