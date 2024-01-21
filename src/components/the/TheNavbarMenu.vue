<script setup>
import { useAlertMessage } from '@/stores/alert.js'

const alert_message = useAlertMessage()

function logout() {
  alert_message.showAlert({
    width: '400px',
    status: 'warning',
    title: 'This will logout your account',
    body: 'Do you want to continue?'
  })
    .then(response => {
      if (response) {
        user.toggleLoggedIn()
      }
    })
}
</script>

<template>
  <v-menu>
    <v-list>
      <v-list-item>
        <v-list-item-title class="font-weight-bold">Hi {{ user.credentials.first_name }} {{ user.credentials.last_name }}</v-list-item-title>
      </v-list-item>

      <v-divider />
      
      <v-list-item @click="alert_message.showNotAvailable()">
        <template v-slot:prepend>
          <v-icon icon="$mdiBank" />
        </template>

        <v-list-item-title>Accounts</v-list-item-title>
      </v-list-item>
      
      <v-divider />

      <v-list-item @click="alert_message.showNotAvailable()">
        <template v-slot:prepend>
          <v-icon icon="$mdiCog" />
        </template>

        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item>
      
      <v-divider />

      <v-list-item @click="logout()">
        <template v-slot:prepend>
          <v-icon icon="$mdiLogout" />
        </template>

        <v-list-item-title>Log out</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>