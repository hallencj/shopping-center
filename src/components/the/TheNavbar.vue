<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useShoppingCart } from '@/stores/shopping-cart.js'
import { useUserStore } from '@/stores/user.js'
import { useNotAvailableStore } from '@/stores/dialog.js'

const search = ref('')
const router = useRouter()
const shopping_cart = useShoppingCart()
const user = useUserStore()
const not_available = useNotAvailableStore()

const goToHome = () => {
  router.push({ path: '/', query: {}})
  search.value = ''
}

const goToShoppingCart = () => {
  router.push({ path: '/cart' })
}

const goToLogin = () => {
  if (user.credentials.logged_in) return
  router.push('/login')
  search.value = ''
}

const handleSearch = () => {
  if (search.value) {
    router.push({ path: '/', query: { search: search.value } })
    return
  }

  router.push({ path: '/', query: {} })
}
</script>

<template>
  <v-app-bar color="primary-color" height="80">
    <v-container class="justify-center align-center mx-auto d-flex">
      <v-app-bar-title>
        <span @click="goToHome()" class="cursor-pointer"><v-icon icon="$mdiBagChecked" size="40" start /> Shopping Center</span>
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
      
      <v-btn @click="goToShoppingCart()" class="ml-6 mr-3" stacked>
        <v-badge :model-value="shopping_cart.carts.length > 0" :content="shopping_cart.carts.length" color="red-lighten-1">
          <v-icon icon="$mdiCart" />
        </v-badge>
      </v-btn>

      <v-btn @click="goToLogin()" stacked>
        <div>
          <v-icon icon="$mdiAccount" />
          <v-icon v-if="user.credentials.logged_in" icon="$mdiChevronDown" size="x-small"></v-icon>
        </div>

        <v-menu v-if="user.credentials.logged_in" activator="parent" location="bottom right">
          <v-list>
            <v-list-item>
              <v-list-item-title class="font-weight-bold">Hi {{ user.credentials.first_name }} {{ user.credentials.last_name }}</v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>
            
            <v-list-item @click="not_available.toggleDialog()">
              <template v-slot:prepend>
                <v-icon icon="$mdiBank"></v-icon>
              </template>

              <v-list-item-title>Accounts</v-list-item-title>
            </v-list-item>
            
            <v-divider></v-divider>

            <v-list-item @click="not_available.toggleDialog()">
              <template v-slot:prepend>
                <v-icon icon="$mdiCog"></v-icon>
              </template>

              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>
            
            <v-divider></v-divider>

            <v-list-item @click="user.toggleLoggedIn()">
              <template v-slot:prepend>
                <v-icon icon="$mdiLogout"></v-icon>
              </template>

              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>