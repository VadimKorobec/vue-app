import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

import './assets/scss/index.scss'

const router = createRouter({
    histor: createWebHistory(),
    routes:[{}]
})




createApp(App).mount('#app')
