<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/index.js'

const show_dialog = ref(false)
const router = useRouter()
const user = useUserStore()

const toggleDialog = () => {
  show_dialog.value = !show_dialog.value
}

const checkOut = () => {
  router.push('/check-out/success')
}

defineExpose({
  toggleDialog
})
</script>

<template>
  <v-dialog v-model="show_dialog" width="380" persistent>
    <v-card class="text-center pa-5">
      <v-icon class="mx-auto" icon="$mdiInformation" color="primary-color" size="70"></v-icon>
      
      <h1 class="text-h6 mt-4">This will check out your cart.</h1>
      <h4 class="text-subtitle-1 mb-4">Are you sure you want to continue?</h4>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="checkOut()" class="px-4 mx-2" color="primary-color" variant="flat">Continue</v-btn>
        <v-btn @click="show_dialog = false" class="px-4 mx-2" text>Cancel</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>