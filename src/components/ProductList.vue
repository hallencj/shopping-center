<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductListCard from './ProductListCard.vue'
import ProductNotFound from './ProductNotFound.vue'

const product_list = ref([])
const loading = ref(true)
const route = useRoute()

const getProductList = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const result = await response.json()
  return result
}

const displayProductList = async () => {
  product_list.value = []
  loading.value = true
  
  let response = await getProductList()

  if (route.query.search) { // Front end search filter since the API for search is not available.
    response = response.filter(element => element.title.toLowerCase().includes(route.query.search.toLowerCase()))
  }

  product_list.value = response
  loading.value = false
}

watch(() => route.query,
async () => {
  displayProductList()
})

displayProductList()
</script>

<template>
  <v-row class="mb-2" align="center" dense>
    <v-col cols="12" sm="">
      <v-divider></v-divider>
    </v-col>

    <v-col cols="12" sm="auto">
      <h6 class="text-grey-darken-2 text-body-2">{{ product_list.length }} products found out of {{ product_list.length }}</h6>
    </v-col>
  </v-row>  

  <v-row justify="start" align="center">
    <v-col v-if="loading" cols="12">
      <v-card class="text-center pa-10 mt-3" width="100%" variant="flat" border>
        <v-progress-circular color="primary-color" size="60" indeterminate rounded></v-progress-circular>
        <h6 class="text-grey-darken-2 text-body-1 mt-6">Loading Products...</h6>
      </v-card>
    </v-col>

    <v-col v-else-if="!loading && product_list.length === 0" cols="12">
      <ProductNotFound />
    </v-col>

    <v-col v-for="product in product_list" :key="product.id" cols="12" sm="4" md="3" lg="3">
      <ProductListCard :product="product" />
    </v-col>
  </v-row>
</template>