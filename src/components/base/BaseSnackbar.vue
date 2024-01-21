<script setup>
import { useSnackbar } from '@/stores/snackbar.js'

const snackbar = useSnackbar()
</script>

<template>
  <v-snackbar 
    v-model="snackbar.show" 
    :color="snackbar.color"
  >
    <div class="align-center d-flex">
      <v-icon 
        :icon="snackbar.icon" 
        class="mr-2" 
        size="large" 
      />
      
      <span class="text-body-1">{{ snackbar.text }}</span>
    </div>

    <template v-slot:actions>
      <v-btn 
        @click="snackbar.toggleSnackbar()" 
        variant="text"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>