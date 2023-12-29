<script setup>
import { onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onBeforeUnmount(() => {
  localStorage.removeItem('shopping-cart')
  window.location.reload()
})
</script>

<template>
  <v-card class="text-center pa-10 mt-3 mb-2" width="100%" variant="flat" border>
    <v-icon color="primary-color" icon="$mdiCheckCircle" size="120"></v-icon>
    <h1 class="text-h5 mt-3">Check out successful</h1>
    <h5 class="text-body-1 mt-2 mb-6">You will receive a text message or an email about the check out you made, so please check it for more details.</h5>
    
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="router.push('/')" class="px-3" color="primary-color" variant="flat">View More Product</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>