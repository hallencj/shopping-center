<script setup>
import { ref } from 'vue'

const loading_categories = ref(true)
const categories = ref([])
const selected_category = ref([])

function getProductCategories() {
  loading_categories.value = true

  fetch('https://fakestoreapi.com/products/categories')
    .then(response => response.json())
    .then(json => {
      categories.value = json
      loading_categories.value = false
    })
}

getProductCategories()
</script>

<template>
  <h3 class="font-weight-bold text-body-1 align-center d-flex px-4 pt-4 pb-2">Categories</h3>

  <v-skeleton-loader
    v-if="loading_categories"
    class="mt-n1 mb-2"
    type="list-item"
  />
  
  <v-checkbox
    v-for="category in categories"
    v-model="selected_category" 
    :key="category"
    :value="category" 
    :label="category"
    class="px-3"
    color="primary"
    density="comfortable"
    hide-details
  />

  <v-divider />
</template>