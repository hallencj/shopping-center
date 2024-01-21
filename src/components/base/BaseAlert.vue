<script setup>
import { computed } from 'vue'
import { useAlertMessage } from '@/stores/alert.js'

const alert_message = useAlertMessage()

const icon_details = computed(() => {
  if (alert_message.alert.status === 'success') {
    return {
      icon: '$mdiCheckCircle',
      color: 'primary'
    }
  }

  if (alert_message.alert.status === 'error') {
    return {
      icon: '$mdiCloseCircle',
      color: 'error'
    }
  }

  return {
    icon: '$mdiInformation',
    color: 'primary'
  }
})
</script>

<template>
  <v-dialog
    v-model="alert_message.alert.show"
    :width="alert_message.alert.width"
    persistent
  >
    <v-card class="text-center pa-5">
      <v-icon
        :icon="icon_details.icon"
        :color="icon_details.color"
        class="mx-auto"
        size="70"
      />
      
      <h1 class="text-h6 mt-4">{{ alert_message.alert.title }}</h1>
      <h4 class="text-subtitle-1 mb-4">{{ alert_message.alert.body }}</h4>

      <v-card-actions>
        <v-spacer />

        <v-btn 
          v-if="alert_message.alert.status === 'error'" 
          @click="alert_message.handleAction(true)" 
          class="px-4 mx-2" 
          color="grey-darken-2"
          variant="outlined" 
        >
          Ok
        </v-btn>
        
        <template v-else>
          <v-btn 
            @click="alert_message.handleAction(true)" 
            class="px-4 mx-2" 
            color="primary" 
            variant="flat"
          >
            Yes
          </v-btn>

          <v-btn 
            @click="alert_message.handleAction(false)" 
            class="px-4 mx-2" 
            color="grey-darken-2"
            variant="outlined" 
          >
            No
          </v-btn>
        </template>
        
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>