<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNotAvailableStore } from '@/stores/dialog.js'

const form = ref(null)
const rules = [(v) => !!v || 'Field is required.']
const username_email = ref('')
const password = ref('')
const show_password = ref(false)
const loading = ref(false)
const invalid_login = ref(false)
const router = useRouter()
const not_available = useNotAvailableStore()

const submitForm = async () => {
  const { valid } = await form.value.validate()
  if (!valid) return

  loading.value = true

  setTimeout(() => { // For API simulation
    if (username_email.value === 'user' && password.value === 'password') {
      router.push('/')
      return
    }

    invalid_login.value = true
    loading.value = false
  }, 2000)
}
</script>

<template>
  <v-card class="pa-6 mx-auto mt-16" elevation="3" width="450">
    <v-form :readonly="loading" @keyup.enter="submitForm()" ref="form">
      <v-icon class="d-block mx-auto" color="primary-color" icon="$mdiBagChecked" size="50" />

      <v-card-title class="text-primary-color text-center text-h5 mb-5 mt-1">LOGIN</v-card-title>

      <v-divider class="mb-6" />

      <v-alert
        v-model="invalid_login"
        class="mb-5"
        text="Invalid credentials, failed to login."
        type="error"
        variant="tonal"
      />

      <v-text-field
        v-model="username_email"
        :rules="rules"
        class="my-2"
        placeholder="Username / Email"
        required
      />

      <v-text-field
        v-model="password"
        :rules="rules"
        :type="show_password ? 'text' : 'password'"
        class="my-2"
        placeholder="Password"
        required>
        <template #append-inner>
          <v-btn
            :icon="show_password ? '$mdiEye' : '$mdiEyeOff'"
            @click="show_password = !show_password"
            variant="plain"
            density="compact">
          </v-btn>
        </template>
      </v-text-field>

      <v-btn :loading="loading" @click="submitForm()" color="secondary-color" block>Log In</v-btn>
    </v-form>

    <v-row class="text-center mt-3">
      <v-col cols="12" lg="6">
        <v-btn :disabled="loading" @click="not_available.toggleDialog()" class="text-body-2" variant="text" block>Sign Up</v-btn>
      </v-col>

      <v-col cols="12" lg="6">
        <v-btn :disabled="loading" @click="not_available.toggleDialog()" class="text-body-2" variant="text" block>Forgot Password</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
