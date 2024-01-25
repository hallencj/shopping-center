<script setup>
import ProductFilter from '@/components/product/ProductFilter.vue'
import ProductList from '@/components/product/ProductList.vue'
</script>

<template>
  <v-row>
    <v-col 
      cols="12" 
      sm="4" 
      md="3"
    >
      <ProductFilter />
    </v-col>

    <v-col 
      cols="12" 
      sm="8" 
      md="9"
    >
      <ProductList />
    </v-col>
  </v-row>
</template>