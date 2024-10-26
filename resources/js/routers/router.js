// importa vue router

import { createRouter, createWebHistory } from 'vue-router';

import home from '../components/home.vue';
import inicio from '../components/inicio.vue';
const routes = [
    {
        path: '/',
        name: 'home',
        component: home 
    },
    {path: '/inicio', name: 'inicio', component: inicio}
];

const router = createRouter({
    history: createWebHistory(),    
    routes
});

export default router
