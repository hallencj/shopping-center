import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUser = defineStore('user', () => {
  let credentials = ref(localStorage.getItem('user-credentials') ? JSON.parse(localStorage.getItem('user-credentials')) : {
    logged_in: false,
    first_name: 'Hallen',
    last_name: 'Corpuz',
    username_email: 'user',
    address: 'Pasig City, Philippines',
    contact_number: '09067377295',
    preferred_mode_of_payment: 'Cash on Delivery'
  })

  function toggleLoggedIn() {
    credentials.value.logged_in = !credentials.value.logged_in

    if (credentials.value.logged_in) {
      localStorage.setItem('user-credentials', JSON.stringify(credentials.value))
    } else {
      localStorage.removeItem('user-credentials')
      localStorage.removeItem('shopping-cart')
      window.location.reload()
    }
  }

  return { 
    credentials,
    toggleLoggedIn
  }
})