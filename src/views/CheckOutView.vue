<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { useNotAvailableStore } from '@/stores/dialog.js'
import CheckOutDialog from '@/components/CheckOutDialog.vue'

const check_out_dialog = ref(null)
const user = useUserStore()
const not_available = useNotAvailableStore()
</script>

<template>
  <h1 class="text-h5">Delivery Information</h1>
  <h5 class="text-body-1 mt-2">Please confirm the following information before checking out.</h5>

  <v-divider class="mt-4 mb-10"></v-divider>

  <v-row align="center">
    <v-col cols="12" lg="4">
      <v-text-field v-model="user.credentials.first_name" label="First Name" readonly></v-text-field>
    </v-col>

    <v-col cols="12" lg="4">
      <v-text-field v-model="user.credentials.last_name" label="Last Name" readonly></v-text-field>
    </v-col>

    <v-col cols="12" lg="4">
      <v-text-field v-model="user.credentials.username_email" label="Username / Email" readonly></v-text-field>
    </v-col>

    <v-col cols="12" lg="4">
      <v-text-field v-model="user.credentials.address" label="Address" readonly></v-text-field>
    </v-col>

    <v-col cols="12" lg="4">
      <v-text-field v-model="user.credentials.contact_number" label="Contact Number" readonly></v-text-field>
    </v-col>

    <v-col cols="12" lg="4">
      <v-text-field v-model="user.credentials.preferred_mode_of_payment" label="Mode of Payment" readonly></v-text-field>
    </v-col>
  </v-row>

  <v-divider class="mt-6 mb-4"></v-divider>

  <div class="text-right">
    <v-btn @click="not_available.toggleDialog()" class="mx-2" variant="outlined" color="grey-darken-2">Edit</v-btn>
    <v-btn @click="check_out_dialog.toggleDialog()" class="mx-2" color="primary-color" variant="flat">Check Out</v-btn>
  </div>

  <CheckOutDialog ref="check_out_dialog" />
</template>