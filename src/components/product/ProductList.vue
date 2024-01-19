<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProduct } from '@/stores/product.js'
import ProductListLoader from './ProductListLoader.vue'
import ProductListCard from './ProductListCard.vue'
import ProductNotFound from './ProductNotFound.vue'

const product_list = ref([])
const route = useRoute()
const product = useProduct()

watch(() => product.loading, (val) => val ? displayProductList() : null)
watch(() => route.query, () => product.loadProductList())

async function displayProductList() {
  product.loadProductList()
  
  product_list.value = []
  product_list.value = await product.getProductList()

  // Front end search filter, since the API for search is not available.
  if (route.query.search) {
    product_list.value = product_list.value.filter(element => element.title.toLowerCase().includes(route.query.search.toLowerCase()))
  }

  product.unloadProductList()
}

product.loadProductList()
</script>

<template>
  <div class="align-center d-flex mb-5">
    <v-divider />
    <h6 class="text-grey-darken-2 text-body-2 text-no-wrap ml-3">{{ product_list.length }} products found out of {{ product_list.length }}</h6>
  </div>  

  <v-row 
    justify="start" 
    align="center"
  >
    <v-col 
      v-if="product.loading" 
      cols="12"
    >
      <ProductListLoader />
    </v-col>

    <v-col 
      v-else-if="!product.loading && product_list.length === 0" 
      cols="12"
    >
      <ProductNotFound />
    </v-col>

    <v-col 
      v-for="product in product_list" 
      :key="product.id" 
      cols="12" 
      sm="4" 
      md="3" 
      lg="3"
    >
      <ProductListCard :product="product" />
    </v-col>
  </v-row>
</template>