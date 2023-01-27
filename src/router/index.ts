import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/',
      name: 'cards',
      component: () => import('../views/CardsView.vue')
    },
    {
      path: '/create-card',
      name: 'card creator',
      component: () => import ('../views/CardCreatorView.vue')
    },
    {
      path: '/characters',
      name: 'characters list',
      component: () => import ('../views/CharacterListView.vue')
    },
    {
      path: '/character/:id',
      name: 'character-view',
      component: () => import('@/views/CharacterView.vue')
    },
    {
      path: '/registration',
      name: 'registration-view',
      component: () => import('@/views/RegistrationView.vue')
    },
    {
      path: '/login',
      name: 'login-view',
      component: () => import('@/views/LoginView.vue')
    },
  ]
})

export default router
