import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import isAuthenticatedGuard from '../modules/auth/router/auth-guard'

import productsRouter from '../modules/products/router'
import shopRouter from '../modules/shop/router'
import authRouter from '../modules/auth/router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/auth',
    ...authRouter
  },
  {
    path: '/products',
    beforeEnter : [isAuthenticatedGuard],
    ...productsRouter
  },
  {
    path: '/shop',
    ...shopRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
