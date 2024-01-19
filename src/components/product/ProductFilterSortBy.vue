<script setup>

</script>

<template>
  <h3 class="font-weight-bold text-body-1 align-center d-flex px-4 pt-4">Sort By</h3>

  <v-list>
    <v-list-item>Latest</v-list-item>
    <v-list-item>Ratings</v-list-item>
    <v-list-item>Sales</v-list-item>

    <v-list-group value="Price">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props">Price</v-list-item>
      </template>

      <v-list-item>Low to High</v-list-item>
      <v-list-item>High to Low</v-list-item>
    </v-list-group>
  </v-list>

  <v-divider />
</template>