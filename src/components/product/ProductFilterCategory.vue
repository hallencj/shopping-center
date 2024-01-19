<script setup>
import { ref } from 'vue'

const category = ref([])
</script>

<template>
  <h3 class="font-weight-bold text-body-1 align-center d-flex px-4 pt-4 pb-2">Categories</h3>

  <v-checkbox
    v-model="category" 
    class="px-3"
    color="primary"
    value="Bag" 
    label="Bag"
    density="comfortable"
    hide-details
  />

  <v-checkbox
    v-model="category" 
    class="px-3"
    color="primary"
    value="Jewelry" 
    label="Jewelry"
    density="comfortable"
    hide-details
  />

  <v-checkbox
    v-model="category" 
    class="px-3"
    color="primary"
    value="Cloth" 
    label="Cloth"
    density="comfortable"
    hide-details
  />

  <v-checkbox
    v-model="category" 
    class="px-3"
    color="primary"
    value="Monitor" 
    label="Monitor"
    density="comfortable"
    hide-details
  />

  <v-divider />
</template>