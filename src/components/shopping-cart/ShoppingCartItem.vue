<script setup>
defineProps({
  cart: {
    type: Object,
    default() {
      return {
        id: '',
        selected: '',
        image: '',
        title: '',
        price: '',
        quantity: ''
      }
    }
  }
})

defineEmits(['removeProduct'])
</script>

<template>
  <v-row 
    class="pa-5" 
    align="center"
  >
    <v-col 
      cols="12" 
      sm="" 
      md="1" 
      lg="1"
    >
      <v-checkbox 
        v-model="cart.selected" 
        color="primary" 
        hide-details 
       />
    </v-col>

    <v-col 
      cols="12" 
      sm="" 
      md="1" 
      lg="1"
    >
      <v-img 
        :src="cart.image" 
        height="50" 
        width="50" 
      />
    </v-col>
    
    <v-col 
      cols="12" 
      sm="2" 
      md="2" 
      lg="3"
    >
      <span>{{ cart.title }}</span>
    </v-col>

    <v-col 
      cols="12" 
      sm="2" 
      md="2" 
      lg="2"
    >
      <span>${{ cart.price }}</span>
    </v-col>

    <v-col 
      cols="12" 
      sm="2" 
      md="2" 
      lg="2"
    >
      <span>{{ cart.quantity }}</span>
    </v-col>

    <v-col 
      cols="12" 
      sm="2" 
      md="2" 
      lg="2"
    >
      <span>${{ cart.price * cart.quantity }}</span>
    </v-col>

    <v-col 
      cols="12" 
      sm="2" 
      md="2" 
      lg="1"
    >
      <v-btn 
        @click="$emit('removeProduct', cart.id)" 
        color="error" 
        size="small"
      >
        Delete
      </v-btn>
    </v-col>
  </v-row>
</template>