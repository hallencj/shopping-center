import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotAvailableStore = defineStore('not_available', () => {
  const show = ref(false)

  const toggleDialog = () => {
    show.value = !show.value
  }

  return { 
    show, 
    toggleDialog 
  }
})

export const useUserStore = defineStore('user', () => {
  const crendentialsHolder = {
    logged_in: false,
    first_name: 'Hallen',
    last_name: 'Corpuz',
    username_email: 'user',
    address: 'Pasig City, Philippines',
    contact_number: '09067377295',
    preferred_mode_of_payment: 'Cash on Delivery'
  }

  const credentials = ref(crendentialsHolder)

  credentials.value = localStorage.getItem('user-credentials') ? JSON.parse(localStorage.getItem('user-credentials')) : crendentialsHolder // This should be in cookies and encrypted but I put this here just to mimic.

  const toggleLoggedIn = () => {
    credentials.value.logged_in = !credentials.value.logged_in

    if (credentials.value.logged_in) {
      localStorage.setItem('user-credentials', JSON.stringify(credentials.value))
    } else {
      localStorage.removeItem('user-credentials')
      window.location.reload()
    }
  }

  return { 
    credentials,
    toggleLoggedIn
  }
})

export const useShoppingCart = defineStore('shopping_cart', () => {
  let carts = ref([])
  
  carts.value = localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : []

  const addToCart = (product) => {
    const index = carts.value.findIndex(element => element.id === product.id)

    if (index >= 0) {
      carts.value[index].quantity += 1
    } else {
      carts.value.push({  
        quantity: 1,
        ...product
      })
    }

    localStorage.setItem('shopping-cart', JSON.stringify(carts.value))
  }
  
  const removeToCart = (id) => {
    const index = carts.value.findIndex(element => element.id === id)
    carts.value.splice(index, 1)
    localStorage.setItem('shopping-cart', JSON.stringify(carts.value))
  }

  return {
    carts,
    addToCart,
    removeToCart
  }
})
