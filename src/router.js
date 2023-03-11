1// importiamo i metodi da vue-router
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/progetti',
            name: 'post_list',
            component: PostList
        }
    ]
}); 
export { router };