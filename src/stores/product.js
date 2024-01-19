import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProduct = defineStore('product', () => {
  let loading = ref(false)
  
  function loadProductList() {
    loading.value = true
  }

  function unloadProductList() {
    loading.value = false
  }

  async function getProductList() {
    // TODO: Filter
    const response = await fetch('https://fakestoreapi.com/products')
    const result = await response.json()
    return result
  }

  return {
    loading,
    loadProductList,
    unloadProductList,
    getProductList
  }
})