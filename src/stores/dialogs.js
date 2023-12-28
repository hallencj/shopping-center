import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotAvailableStore = defineStore('not_available', () => {
  const show = ref(false)

  const toggleDialog = () => {
    show.value = !show.value
  }

  return { show, toggleDialog }
})
