import { createRouter, createWebHistory } from 'vue-router'

import Main from '../pages/MainPage.vue'
import Account from '../pages/AccountPage.vue'
import Article from '../pages/ArticlePage.vue'


export default createRouter({
    routes: [{
            path: '/',
            component: Main
        },

        {
            path: '/account',
            component: Account
        },
        {
            path: '/article',
            component: Article
        },
    ],

    history: createWebHistory()
})