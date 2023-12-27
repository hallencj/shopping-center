import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotAvailableStore = defineStore('not_available', () => {
  const show_dialog = ref(false)

  const toggleDialog = () => {
    show_dialog.value = !show_dialog.value
  }

  return { show_dialog, toggleDialog }
})
