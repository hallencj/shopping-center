<script setup>
import { ref } from 'vue'

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

const show = ref(false)

const toggleDialog = () => {
  show.value = !show.value
}

defineExpose({
  toggleDialog
})
</script>

<template>
  <v-dialog v-model="show" width="1200" persistent>
    <v-card class="px-8 pt-6 pb-2">
      <v-row align="center">
        <v-col class="px-10" cols="12" sm="12" md="6" lg="5">
          <v-img :src="product.image" :title="product.title" :alt="product.title" class="mx-auto" draggable="false" height="380" width="380" />
        </v-col>

        <v-col cols="12" sm="12" md="6" lg="7">
          <h1 class="text-h5 my-4">{{ product.title }}</h1>
          <h4 class="text-capitalize text-body-1">{{ product.description }}</h4>

          <v-sheet class="mt-6 px-4 py-2" color="grey-lighten-4">
            <h6 class="text-body-2 text-grey-darken-2 mb-1">Ratings</h6>
            
            <v-row class="ma-0" align="center">
              <v-rating :model-value="product.rating.rate" active-color="primary-color" color="secondary-color" size="25" half-increments readonly />
              <span class="text-grey-darken-2 text-subtitle-2 ml-2">{{ product.rating.rate }} ({{ product.rating.count }})</span>
            </v-row>
          </v-sheet>

          <v-sheet class="mt-6 px-4 py-2" color="grey-lighten-4">
            <h6 class="text-grey-darken-2 text-body-2">Price</h6>
            <h6 class="font-weight-bold text-primary-color text-h5">${{ product.price }}</h6>
          </v-sheet>
        </v-col>
      </v-row>
      
      <v-divider class="mt-12 mb-2" />

      <v-card-actions>
        <v-btn @click="toggleDialog()" class="mx-auto" size="large" text>CLOSE</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>