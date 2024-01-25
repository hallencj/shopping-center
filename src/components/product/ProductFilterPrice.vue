<script setup>
import { ref } from 'vue'
import { useNumberOnly } from '@/composables/number.js'

const emit = defineEmits(['applyFilter'])

const min_price = ref(null)
const max_price = ref(null)
const show_invalid_amount = ref(false)
const number_only = useNumberOnly()

function applyPriceFilter() {
  show_invalid_amount.value = false

  if ((!min_price.value && !max_price.value) || min_price.value > max_price.value) {
    show_invalid_amount.value = true
    min_price.value = null
    max_price.value = null
    return
  } else {
    emit('applyFilter', { 
      min_price: min_price.value,
      max_price: max_price.value
    })
  }
}
</script>

<template>
  <h3 class="font-weight-bold text-body-1 align-center d-flex pa-4">Price</h3>

  <v-row class="px-4">
    <v-col 
      cols="12" 
      sm="6"
    >
      <v-text-field 
        v-model.number="min_price"
        @keypress="number_only.integerNumberOnly($event)"
        onpaste="return false"
        label="Min" 
        hide-details
      />
    </v-col>

    <v-col 
      cols="12" 
      sm="6"
    >
      <v-text-field 
        v-model.number="max_price"
        @keypress="number_only.integerNumberOnly($event)"
        onpaste="return false"
        label="Max" 
        hide-details
      />
    </v-col>

    <v-col cols="12">
      <v-alert
        v-model="show_invalid_amount"
        class="text-body-2 mb-4 mt-n1"
        type="error"
        text="Invalid Amount"
        density="compact"
        variant="tonal"
      />

      <v-btn 
        @click="applyPriceFilter()"
        class="mb-4"
        color="secondary" 
        block
      >
        Apply
      </v-btn>
    </v-col>
  </v-row>
</template>