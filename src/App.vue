<script setup>
import { RouterView } from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import BaseNotAvailable from './components/base/BaseNotAvailable.vue'
</script>

<template>
  <v-layout>
    <TheNavbar />

    <v-main>
      <RouterView />
    </v-main>

    <BaseNotAvailable />
  </v-layout>
</template>
