import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShoppingCart = defineStore('shopping_cart', () => {
  let cart = ref(localStorage.getItem('shopping-cart') ? JSON.parse(localStorage.getItem('shopping-cart')) : [])
  
  function addToCart(product) {
    const index = cart.value.findIndex(element => element.id === product.id)

    if (index >= 0) {
      cart.value[index].quantity += 1
    } else {
      cart.value.push({  
        quantity: 1,
        ...product
      })
    }

    localStorage.setItem('shopping-cart', JSON.stringify(cart.value))
  }
  
  function removeToCart(id) {
    const index = cart.value.findIndex(element => element.id === id)
    cart.value.splice(index, 1)
    localStorage.setItem('shopping-cart', JSON.stringify(cart.value))
  }

  return {
    cart,
    addToCart,
    removeToCart
  }
})