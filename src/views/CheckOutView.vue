<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAlertMessage } from '@/stores/alert.js'
import { useUser } from '@/stores/user.js'

const input_fields = reactive([
  { label: 'First Name', value: 'first_name' },
  { label: 'Last Name', value: 'last_name' },
  { label: 'Username / Email', value: 'username_email' },
  { label: 'Address', value: 'address' },
  { label: 'Contact Number', value: 'contact_number' },
  { label: 'Mode of Payment', value: 'preferred_mode_of_payment' }
])

const router = useRouter()
const alert_message = useAlertMessage()
const user = useUser()

function checkOut() {
  alert_message.showAlert({
    width: '400px',
    status: 'warning',
    title: 'This will check out your cart',
    body: 'Do you want to continue?'
  })
  .then(response => {
    if (response) {
      router.push('/check-out/success')
    }
  })
}
</script>

<template>
  <h1 class="text-h5 mt-4">Delivery Information</h1>
  <h5 class="text-body-1 mt-2">Please confirm the following information before checking out.</h5>

  <v-divider class="mt-4 mb-10" />

  <v-row align="center">
    <v-col 
      v-for="input in input_fields" 
      :key="input.value" 
      cols="12" 
      sm="6" 
      md="4" 
      lg="4"
    >
      <v-text-field
        v-model="user.credentials[input.value]"
        :label="input.label" 
        readonly
      />
    </v-col>
  </v-row>

  <v-divider class="my-6" />

  <div class="text-right">
    <v-btn
      @click="alert_message.showNotAvailable()"
      class="mx-2"
      variant="outlined"
      color="grey-darken-2"
    >
      Edit
    </v-btn>

    <v-btn
      @click="checkOut()"
      class="mx-2"
      color="primary"
      variant="flat"
    >
      Check Out
    </v-btn>
  </div>
</template>