<script setup>

</script>

<template>
  <h3 class="font-weight-bold text-body-1 align-center d-flex px-4 pt-4">Ratings</h3>

  <v-list>
    <v-list-item 
      v-for="n in 5" 
      :key="n"
    >
      <div class="align-center d-flex">
        <v-rating 
          :model-value="6 - n" 
          active-color="primary" 
          color="secondary" 
          size="25" 
          half-increments 
          readonly 
        />
        <span 
          v-if="n > 1" 
          class="text-grey-darken-2 text-body-2 ml-1"
        >
          & up
        </span>
      </div>
    </v-list-item>
  </v-list>

  <v-divider />
</template>