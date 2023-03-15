1// importiamo i metodi da vue-router
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';
import SinglePost from './pages/SinglePost.vue';
import NotFound from './pages/NotFound.vue';
import Contacts from './pages/Contacts.vue';
import ThankYou from './pages/ThankYou.vue';

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
        },
        //rotta dettaglio post 
       {
            path:'/progetti/:slug',//il nome del parametro deve conciderre con qeullo dato in api.php di laravel
            name:'single-post',
            component: SinglePost

       },
       {
            path:'/contatti',
            name:'contacts',
            component: Contacts

       },
       {
        path:'/thankYou',
        name:'thank-you',
        component: ThankYou

   },
       //pagina not-found deve essere sempre per ultima 
       {
            path: '/*',
            name: 'not-found',
            component: NotFound 
       }
    ]
}); 
export { router };