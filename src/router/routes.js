import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Home = () => import('../views/Home');
const Top = () => import('../views/Top');
const Painters = () => import('../views/Painters');
const Design = () => import('../views/Design');
const Tags = () => import('../views/Tags');

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { title: 'IBUY.ART' },
    },
    {
        path: '/top',
        name: 'top',
        component: Top,
        meta: { title: 'IBUY.ART - Top' },
    },
    {
        path: '/painters',
        name: 'painters',
        component: Painters,
        meta: { title: 'IBUY.ART - Painters' },
    },
    {
        path: '/design',
        name: 'design',
        component: Design,
        meta: { title: 'IBUY.ART - Design' },
    },
    {
        path: '/tags',
        name: 'tags',
        component: Tags,
        meta: { title: 'IBUY.ART - Tags' },
    }
];

export default routes;