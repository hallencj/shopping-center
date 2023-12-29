<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/the/TheNavbar.vue'
import TheFooter from './components/the/TheFooter.vue'
import DialogNotAvailable from './components/dialog/DialogNotAvailable.vue'
</script>

<template>
  <v-layout>
    <TheNavbar />
    
    <v-main>
      <v-container class="py-10">
        <RouterView />
      </v-container>
    </v-main>
    
    <TheFooter />
    <DialogNotAvailable />
  </v-layout>
</template>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>