<script setup>
import { ref, computed } from 'vue'
import { useShoppingCart } from '@/stores/shopping-cart.js'
import ProductNotFound from '@/components/ProductNotFound.vue'
import CheckOutDialog from '@/components/CheckOutDialog.vue'

const select_all = ref(false)
const check_out_dialog = ref(null)
const shopping_cart = useShoppingCart()

const total_item_selected = computed(() => {
  return shopping_cart.carts.filter(element => element.selected)
})

const total_amount = computed(() => {
  const prices = total_item_selected.value.map(element => element.price * element.quantity)
  return prices.reduce((prev, next) => prev + next, 0).toFixed(2)
})

const handleSelectAll = () => {
  shopping_cart.carts.forEach(element => {
    element.selected = select_all.value
  })
}

const checkOut = () => {
  if (total_item_selected.value.length === 0) return
  check_out_dialog.value.toggleDialog()
}
</script>

<template>
  <v-card elevation="0" border>
    <v-card-item>
      <v-row align="center">
        <v-col cols="12" lg="5">
          <v-checkbox v-model="select_all" @change="handleSelectAll()" label="Select All" hide-details />
        </v-col>

        <v-col cols="12" lg="2">
          <span>Price</span>
        </v-col>

        <v-col cols="12" lg="2">
          <span>Quantity</span>
        </v-col>

        <v-col cols="12" lg="2">
          <span>Total Price</span>
        </v-col>

        <v-col cols="12" lg="1"></v-col>
      </v-row>
    </v-card-item>

    <v-card-item v-if="shopping_cart.carts.length === 0">
      <ProductNotFound />
    </v-card-item>

    <v-card-item v-for="cart in shopping_cart.carts" :key="cart.id" class="pa-0">
      <v-divider></v-divider>

      <v-row class="pa-5" align="center">
        <v-col cols="12" lg="1">
          <v-checkbox v-model="cart.selected" hide-details />
        </v-col>
  
        <v-col cols="12" lg="1">
          <v-img :src="cart.image" height="50" width="50" />
        </v-col>
        
        <v-col cols="12" lg="3">
          <span>{{ cart.title }}</span>
        </v-col>
  
        <v-col cols="12" lg="2">
          <span>${{ cart.price }}</span>
        </v-col>
  
        <v-col cols="12" lg="2">
          <span>{{ cart.quantity }}</span>
        </v-col>
  
        <v-col cols="12" lg="2">
          <span>${{ cart.price * cart.quantity }}</span>
        </v-col>
  
        <v-col cols="12" lg="1">
          <v-btn @click="shopping_cart.removeToCart(cart.id)" color="red-lighten-1" size="small">Delete</v-btn>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
  
  <div class="justify-end align-center d-flex mt-6">
    <span class="text-body-1 mr-6">Total Item: <span class="text-primary-color font-weight-bold">{{ total_item_selected.length }}</span></span>
    <span class="text-body-1 mr-6">Total Amount: <span class="text-primary-color font-weight-bold">${{ total_amount }}</span> </span>
    <v-btn :disabled="total_item_selected.length === 0" @click="checkOut()" color="primary-color">Check Out</v-btn>
  </div>

  <CheckOutDialog ref="check_out_dialog" />
</template>