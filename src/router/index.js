import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShoppingCartView from '@/views/ShoppingCartView.vue'
import CheckOutView from '@/views/CheckOutView.vue'
import CheckOutSuccessView from '@/views/CheckOutSuccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cart',
      name: 'shopping-cart',
      component: ShoppingCartView
    },
    {
      path: '/check-out',
      name: 'check-out',
      component: CheckOutView,
      beforeEnter: (to, from, next) => {
        const shopping_cart = localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : []
        const credentials = localStorage.getItem('user-credentials') ? JSON.parse(localStorage.getItem('user-credentials')) : {}
        
        if (credentials.logged_in && shopping_cart.length > 0) {
          next()
        } else {
          next('/cart')
        }
      }
    },
    {
      path: '/check-out/success',
      name: 'check-out-success',
      component: CheckOutSuccessView,
      beforeEnter: (to, from, next) => {
        const shopping_cart = localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : []
        const credentials = localStorage.getItem('user-credentials') ? JSON.parse(localStorage.getItem('user-credentials')) : {}
        
        if (credentials.logged_in && shopping_cart.length > 0) {
          next()
        } else {
          next('/cart')
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      beforeEnter: (to, from, next) => {
        const credentials = localStorage.getItem('user-credentials') ? JSON.parse(localStorage.getItem('user-credentials')) : {}

        if (credentials.logged_in) {
          next('/')
        } else {
          next()
        }
      }
    }
  ]
})

export default router
