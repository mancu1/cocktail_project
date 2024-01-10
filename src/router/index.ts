import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import CocktailView from '@/views/CocktailView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/cocktail/margarita'
  },
  {
    path: '/cocktail/:cocktailCode',
    name: 'Cocktail',
    component: CocktailView,
    props: true
  },
  // Catch all route for 404 Not Found page
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
