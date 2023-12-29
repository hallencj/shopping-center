<script setup>
import { useNotAvailableStore } from '@/stores/index.js'

const not_available = useNotAvailableStore()
</script>

<template>
  <v-dialog v-model="not_available.show" width="500">
    <v-card>
      <v-alert
        @click:close="not_available.toggleDialog()"
        text="Sorry, but this section is not yet available."
        color="primary-color"
        type="info"
        variant="text"
        border="start"
        closable
      />
    </v-card>
  </v-dialog>
</template>
