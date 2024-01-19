<script setup>
import { useProduct } from '@/stores/product.js'
import ProductFilterSortBy from './ProductFilterSortBy.vue'
import ProductFilterCategory from './ProductFilterCategory.vue'
import ProductFilterRating from './ProductFilterRating.vue'
import ProductFilterPrice from './ProductFilterPrice.vue'

const product = useProduct()
</script>

<template>
  <v-sheet 
    variant="flat" 
    border
  >
    <ProductFilterSortBy />
    <ProductFilterCategory />
    <ProductFilterRating />
    <ProductFilterPrice @apply-filter="product.loadProductList($event)" />
  </v-sheet>
</template>