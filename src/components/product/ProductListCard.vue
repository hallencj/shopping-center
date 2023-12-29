<script setup>
import { ref } from 'vue'
import ViewProduct from './ViewProduct.vue'

defineProps({
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

const view_product = ref(null)

const viewProduct = () => {
  view_product.value.toggleDialog()
}
</script>

<template>
  <v-card @click="viewProduct()" class="text-center pa-5" height="290" variant="flat" border>
    <v-img :src="product.image" :title="product.title" :alt="product.title" class="mx-auto" draggable="false" height="150" width="150" />
    <v-divider class="mt-6 mb-2" />
    <v-card-title class="px-0 mb-1">{{ product.title }}</v-card-title>
    <v-card-text class="text-primary font-weight-bold text-subtitle-1">${{ product.price }}</v-card-text>
  </v-card>

  <ViewProduct :product="product" ref="view_product" />
</template>