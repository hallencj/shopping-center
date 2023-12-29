<script setup>
import { ref } from 'vue'
import { useNotAvailableStore, useUserStore } from '@/stores/index.js'
import DialogCheckOut from '@/components/dialog/DialogCheckOut.vue'

const dialog_check_out = ref(null)
const not_available = useNotAvailableStore()
const user = useUserStore()
</script>

<template>
  <h1 class="text-h5 mt-4">Delivery Information</h1>
  <h5 class="text-body-1 mt-2">Please confirm the following information before checking out.</h5>

  <v-divider class="mt-4 mb-10"></v-divider>

  <v-row align="center">
    <v-col cols="12" sm="6" md="4" lg="4">
      <v-text-field v-model="user.credentials.first_name" label="First Name" readonly></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="4" lg="4">
      <v-text-field v-model="user.credentials.last_name" label="Last Name" readonly></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="4" lg="4">
      <v-text-field v-model="user.credentials.username_email" label="Username / Email" readonly></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="4" lg="4">
      <v-text-field v-model="user.credentials.address" label="Address" readonly></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="4" lg="4">
      <v-text-field v-model="user.credentials.contact_number" label="Contact Number" readonly></v-text-field>
    </v-col>

    <v-col cols="12" sm="6" md="4" lg="4">
      <v-text-field v-model="user.credentials.preferred_mode_of_payment" label="Mode of Payment" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-divider class="my-6"></v-divider>

  <div class="text-right">
    <v-btn @click="not_available.toggleDialog()" class="mx-2" variant="outlined" color="grey-darken-2">Edit</v-btn>
    <v-btn @click="dialog_check_out.toggleDialog()" class="mx-2" color="primary" variant="flat">Check Out</v-btn>
  </div>

  <DialogCheckOut ref="dialog_check_out" />
</template>