import { createRouter, createWebHistory } from 'vue-router'
import AppPosts from './pages/AppPosts.vue';
import AppPostsShow from './pages/AppPostShow.vue';
import AppPostCreate from './pages/AppPostCreate.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: AppPosts
    },
    {
      path: '/:slug',
      name: 'post-show',
      component: AppPostsShow
    },
    {
      path: '/create',
      name: 'post-create',
      component: AppPostCreate
    },
    // imposto una rotta di fallback
    // in caso di errore di pagina non trovata, mi redireziona qua 
    // ricordati che questa rotta va messa sempre per ultima
    {
      path: "/:pathMatch(.*)*",
      name:"not-found",
      component: NotFound
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
