<script setup>
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { useShoppingCart } from '@/stores/shopping-cart.js'

const router = useRouter()
const shopping_cart = useShoppingCart()

function goToHome() {
  router.push('/')
}

onBeforeRouteLeave(() => {
  localStorage.removeItem('shopping-cart')
  shopping_cart.cart = []
})
</script>

<template>
  <v-card 
    class="text-center pa-10 mt-3 mb-2" 
    width="100%" 
    variant="flat" 
    border
  >
    <v-icon 
      color="primary" 
      icon="$mdiCheckCircle" 
      size="120" 
    />
    
    <h1 class="text-h5 mt-3">Check out successful</h1>
    <h5 class="text-body-1 mt-2 mb-6">You will receive a text message or an email about the check out you made, check it for more details and update.</h5>
    
    <v-card-actions>
      <v-spacer />
      
      <v-btn
        @click="goToHome()"
        class="px-3"
        color="primary"
        variant="flat"
      >
        View More Product
      </v-btn>

      <v-spacer />
    </v-card-actions>
  </v-card>
</template>