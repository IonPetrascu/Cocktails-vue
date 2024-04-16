import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import CocktailRandom from '@/pages/CocktailRandom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/random',
      name: 'cocktailRandom',
      component: CocktailRandom
    },
    {
      path: '/cocktails/:id',
      name: 'cocktail',
      component: () => import('@/pages/Cocktail.vue')
    }
  ]
})

export default router
