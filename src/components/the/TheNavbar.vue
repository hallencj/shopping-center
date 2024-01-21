<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUser } from '@/stores/user.js'
import { useShoppingCart } from '@/stores/shopping-cart.js'
import TheNavbarMenu from './TheNavbarMenu.vue'

const search = ref('')
const router = useRouter()
const user = useUser()
const shopping_cart = useShoppingCart()

function goToHome() {
  router.push({ path: '/', query: {}})
  search.value = ''
}

function goToShoppingCart() {
  router.push({ path: '/shopping-cart' })
  search.value = ''
}

function goToLogin() {
  if (user.credentials.logged_in) return
  router.push('/login')
  search.value = ''
}

function handleSearch() {
  if (search.value) {
    router.push({ path: '/', query: { search: search.value } })
    return
  }

  router.push({ path: '/', query: {} })
}
</script>

<template>
  <v-app-bar 
    color="primary" 
    height="80"
  >
    <v-container class="justify-center align-center mx-auto d-flex">
      <v-app-bar-title>
        <span 
          @click="goToHome()" 
          class="cursor-pointer"
        >
          <v-icon 
            icon="$mdiBagChecked" 
            size="40" 
            start 
          /> 
          
          Shopping Center
        </span>
      </v-app-bar-title>
  
      <v-sheet width="500">
        <v-text-field 
          v-model="search" 
          @click:append-inner="handleSearch()"
          @keyup.enter="handleSearch()"
          append-inner-icon="$mdiMagnify"
          placeholder="Search for whatever you want" 
          density="compact"
          variant="solo" 
          hide-details
        />
      </v-sheet>
      
      <v-btn 
        @click="goToShoppingCart()" 
        class="ml-6 mr-3" 
        stacked
      >
        <v-badge 
          :model-value="shopping_cart.cart.length > 0" 
          :content="shopping_cart.cart.length" 
          color="error"
        >
          <v-icon icon="$mdiCart" />
        </v-badge>
      </v-btn>

      <v-btn 
        @click="goToLogin()" 
        stacked
      >
        <div>
          <v-icon icon="$mdiAccount" />
          <v-icon 
            v-if="user.credentials.logged_in" 
            icon="$mdiChevronDown" 
            size="x-small" 
          />
        </div>

        <TheNavbarMenu 
          v-if="user.credentials.logged_in" 
          activator="parent" 
          location="bottom right" 
        />
      </v-btn>
    </v-container>
  </v-app-bar>
</template>