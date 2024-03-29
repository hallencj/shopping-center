<script setup>
import { ref } from 'vue'
import { useSnackbar } from '@/stores/snackbar.js'
import { useShoppingCart } from '@/stores/shopping-cart.js'

const props = defineProps({
  product: {
    type: Object,
    default() {
      return {
        id: Number,
        title: String,
        price: Number,
        category: String,
        description: String,
        image: String,
        rating: {
          type: Object,
          default() {
            return {
              rate: Number,
              count: Number
            }
          }
        }
      }
    }
  }
})

const show = ref(false)
const shopping_cart = useShoppingCart()
const snackbar = useSnackbar()

function toggleDialog() {
  show.value = !show.value
}

function addToCart() {
  shopping_cart.addToCart(props.product)
  snackbar.toggleSnackbar({
    color: 'primary',
    icon: '$mdiCheckCircle',
    text: 'Item has been added to your shopping cart.'
  })
}

defineExpose({
  toggleDialog
})
</script>

<template>
  <v-dialog 
    v-model="show" 
    width="1200" 
    persistent
  >
    <v-card class="px-8 pt-6 pb-2">
      <v-row align="center">
        <v-col 
          class="px-10" 
          cols="12" 
          sm="12" 
          md="6" 
          lg="5"
        >
          <v-img
            :src="product.image"
            :title="product.title"
            :alt="product.title"
            class="mx-auto"
            draggable="false"
            height="380"
            width="380"
          />
        </v-col>

        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="7"
        >
          <h1 class="text-h5 my-4">{{ product.title }}</h1>
          <h4 class="text-capitalize text-body-1">{{ product.description }}</h4>

          <v-sheet 
            class="mt-6 px-4 py-2" 
            color="grey-lighten-4"
          >
            <h6 class="text-body-2 text-grey-darken-2 mb-1">Ratings</h6>
            
            <v-row 
              class="ma-0" 
              align="center"
            >
              <v-rating
                :model-value="product.rating.rate"
                active-color="primary"
                color="secondary"
                size="25"
                half-increments
                readonly
              />

              <span class="text-grey-darken-2 text-subtitle-2 ml-2">{{ product.rating.rate }} ({{ product.rating.count }})</span>
            </v-row>
          </v-sheet>

          <v-sheet 
            class="mt-6 px-4 py-2" 
            color="grey-lighten-4"
          >
            <h6 class="text-grey-darken-2 text-body-2">Price</h6>
            <h6 class="font-weight-bold text-primary text-h5">${{ product.price }}</h6>
          </v-sheet>
        </v-col>
      </v-row>
      
      <v-divider class="mt-12 mb-2" />

      <v-card-actions>
        <v-spacer />
        
        <v-btn 
          @click="addToCart()" 
          class="px-4 mx-2" 
          color="primary" 
          size="large" 
          variant="flat"
        >
          Add to Cart
        </v-btn>

        <v-btn
          @click="toggleDialog()"
          class="px-4 mx-2"
          size="large"
          text
        >
          Close
        </v-btn>
        
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>