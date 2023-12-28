<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/the/TheNavbar.vue'
import TheFooter from './components/the/TheFooter.vue'
import BaseNotAvailable from './components/base/BaseNotAvailable.vue'
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
    <BaseNotAvailable />
  </v-layout>
</template>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>