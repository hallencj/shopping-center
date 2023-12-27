<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNotAvailableStore } from '@/stores/dialogs.js'

const form = ref(null)
const rules = ref([(v) => !!v || 'Field is required.'])
const username_email = ref('')
const password = ref('')
const show_password = ref(false)
const invalid_login = ref(false)
const router = useRouter()
const not_available = useNotAvailableStore()

const submitForm = async () => {
  const { valid } = await form.value.validate()

  if (valid) {
    if (username_email.value === 'user' && password.value === 'password') {
      router.push('/')
    } else {
      invalid_login.value = true
    }
  }
}
</script>

<template>
  <v-row class="mt-16" justify="center">
    <v-col cols="12" lg="3">
      <v-card class="pa-6" elevation="3">
        <v-form @keyup.enter="submitForm()" ref="form">
          <v-card-title class="text-primary-color text-center text-h5 mb-5">LOGIN</v-card-title>

          <v-divider class="mb-6"></v-divider>

          <v-alert
            v-model="invalid_login"
            class="mb-5"
            text="Invalid credentials, failed to login."
            type="error"
            variant="tonal">
          </v-alert>

          <v-text-field
            v-model="username_email"
            :rules="rules"
            class="my-2"
            placeholder="Username / Email"
            required>
          </v-text-field>

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

          <v-btn @click="submitForm()" color="secondary-color" block>Log In</v-btn>
        </v-form>

        <v-row class="text-center mt-3">
          <v-col cols="12" lg="6">
            <v-btn @click="not_available.toggleDialog()" class="text-body-2" variant="text" block>Sign Up</v-btn>
          </v-col>

          <v-col cols="12" lg="6">
            <v-btn @click="not_available.toggleDialog()" class="text-body-2" variant="text" block>Forgot Password</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
