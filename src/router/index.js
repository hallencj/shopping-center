import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShoppingCartView from '@/views/ShoppingCartView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shopping-cart',
      name: 'shopping-cart',
      component: ShoppingCartView
    },
    {
      path: '/check-out',
      name: 'check-out',
      component: () => import('@/views/CheckOutView.vue'),
      beforeEnter: (to, from, next) => {
        const shopping_cart = localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : []
        const credentials = localStorage.getItem('user-credentials') ? JSON.parse(localStorage.getItem('user-credentials')) : {}
        
        if (credentials.logged_in && shopping_cart.length > 0) {
          next()
        } else {
          next('/shopping-cart')
        }
      }
    },
    {
      path: '/check-out/success',
      name: 'check-out-success',
      component: () => import('@/views/CheckOutSuccessView.vue'),
      beforeEnter: (to, from, next) => {
        const shopping_cart = localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : []
        const credentials = localStorage.getItem('user-credentials') ? JSON.parse(localStorage.getItem('user-credentials')) : {}
        
        if (credentials.logged_in && shopping_cart.length > 0) {
          next()
        } else {
          next('/shopping-cart')
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      beforeEnter: (to, from, next) => {
        const credentials = localStorage.getItem('user-credentials') ? JSON.parse(localStorage.getItem('user-credentials')) : {}

        if (credentials.logged_in) {
          next('/')
        } else {
          next()
        }
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: HomeView
    }
  ]
})

export default router
