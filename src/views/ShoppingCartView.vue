<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAlertMessage } from '@/stores/alert.js'
import { useUser } from '@/stores/user.js'
import { useShoppingCart } from '@/stores/shopping-cart.js'
import ProductNotFound from '@/components/product/ProductNotFound.vue'
import ShoppingCartItem from '@/components/shopping-cart/ShoppingCartItem.vue'

const select_all = ref(false)
const router = useRouter()
const alert_message = useAlertMessage()
const user = useUser()
const shopping_cart = useShoppingCart()

const total_item_selected = computed(() => shopping_cart.cart.filter(element => element.selected))
const total_amount = computed(() => {
  const prices = total_item_selected.value.map(element => element.price * element.quantity)
  return prices.reduce((prev, next) => prev + next, 0).toFixed(2)
})

function handleSelectAll() {
  shopping_cart.cart.forEach(element => element.selected = select_all.value)
}

function removeProduct(id) {
  alert_message.showAlert({
    width: '400px',
    status: 'warning',
    title: 'This product will be removed',
    body: 'Do you want to continue?'
  })
  .then(response => {
    if (response) {
      shopping_cart.removeToCart(id)
    }
  })
}

function checkOut() {
  if (!user.credentials.logged_in) {
    router.push('/login')
    return
  }
  
  if (total_item_selected.value.length === 0) return
  router.push('/check-out')
}
</script>

<template>
  <v-card 
    elevation="0" 
    border
  >
    <v-card-item>
      <v-row align="center">
        <v-col
          cols="12"
          sm="4"
          md="4"
          lg="5"
        >
          <v-checkbox 
            v-model="select_all" 
            @change="handleSelectAll()" 
            color="primary" 
            label="Select All" 
            hide-details 
          />
        </v-col>

        <v-col 
          cols="12" 
          sm="2" 
          md="2" 
          lg="2"
        >
          <span>Price</span>
        </v-col>

        <v-col 
          cols="12" 
          sm="2" 
          md="2" 
          lg="2"
        >
          <span>Quantity</span>
        </v-col>

        <v-col 
          cols="12" 
          sm="2" 
          md="2" 
          lg="2"
        >
          <span>Total Price</span>
        </v-col>

        <v-col 
          cols="12" 
          sm="2" 
          md="2" 
          lg="1" 
        />
      </v-row>
    </v-card-item>

    <v-card-item v-if="shopping_cart.cart.length === 0">
      <ProductNotFound />
    </v-card-item>

    <v-card-item 
      v-for="cart in shopping_cart.cart" 
      :key="cart.id" 
      class="pa-0"
    >
      <v-divider />

      <ShoppingCartItem 
        :cart="cart" 
        @remove-product="removeProduct($event)" 
      />
    </v-card-item>
  </v-card>
  
  <div class="justify-end align-center d-flex mt-6">
    <span class="text-body-1 mr-6">
      Total Item:
      <span class="text-primary font-weight-bold">{{ total_item_selected.length }}</span>
    </span>

    <span class="text-body-1 mr-6">
      Total Amount: 
      <span class="text-primary font-weight-bold">${{ total_amount }}</span>
    </span>

    <v-btn 
      :disabled="total_item_selected.length === 0" 
      @click="checkOut()" 
      color="primary"
    >
      Check Out
    </v-btn>
  </div>
</template>