import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const crendentialsHolder = {
    logged_in: false,
    first_name: 'Hallen',
    last_name: 'Corpuz  ',
    username_email: 'HallenCJ',
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
