import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import Main from './pages/Main.vue'
import Favorites from './pages/Favorites.vue'
import Pokemon from './pages/pokemon/index.vue'

const routes = [
    { path: '/', component: Main },
    { path: '/favorites', component: Favorites },
    { path: '/pokemon/:id', component: Pokemon },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
