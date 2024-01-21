import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAlertMessage = defineStore('alert_message', () => {
  let resolvePromise = () => void 0

  const alert = ref({
    show: false,
    width: '',
    status: '',
    title: '',
    body: ''
  })

  function showAlert(details) {
    alert.value = { 
      show: true,
      ...details 
    }

    return new Promise((resolve) => resolvePromise = resolve)
  }

  function showNotAvailable() {
    alert.value = {
      show: true,
      width: '480px',
      status: 'error',
      title: 'Sorry, but this section is not yet available.'
    }

    return new Promise((resolve) => resolvePromise = resolve)
  }

  function handleAction(status) {
    resolvePromise(status)
    alert.value.show = false
  }

  return { 
    alert, 
    showAlert,
    showNotAvailable,
    handleAction
  }
})