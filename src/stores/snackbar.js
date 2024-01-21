import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSnackbar = defineStore('snackbar', () => {
  let show = ref(false)
  let color = ref('')
  let icon = ref('')
  let text = ref('')

  function toggleSnackbar(content) {
    show.value = !show.value

    if (content) {
      color.value = content.color
      icon.value = content.icon
      text.value = content.text
    }
  }

  return {
    show,
    color,
    icon,
    text,
    toggleSnackbar
  }
})