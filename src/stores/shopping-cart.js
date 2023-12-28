import { ref } from 'vue'
import { defineStore } from 'pinia'

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
