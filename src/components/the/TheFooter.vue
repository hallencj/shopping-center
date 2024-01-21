<script setup>
function openInNewTab(url) {
  window.open(url, '_blank', 'noreferrer')
}
</script>

<template>
  <v-footer 
    color="grey-lighten-4" 
    app
  >
    <v-container>
      <v-row 
        justify="space-between" 
        align="center"
      >
        <v-col cols="auto">
          <h6 class="text-body-2">© 2023 <span class="text-primary font-weight-bold">Shopping Center</span>. All Rights Reserved .</h6>
        </v-col>

        <v-col 
          class="align-center d-flex flex-gap-2" 
          cols="auto"
        >
          <h6 class="text-body-2 mr-1">Follow us</h6>

          <v-icon 
            @click="openInNewTab('https://www.facebook.com/shopping-center')" 
            class="mx-1" 
            color="grey-darken-2" 
            icon="$mdiFacebook" 
          />

          <v-icon
            @click="openInNewTab('https://twitter.com/shopping-center')"
            class="mx-1"
            color="grey-darken-2"
            icon="$mdiTwitter"
          />

          <v-icon
            @click="openInNewTab('https://www.instagram.com/shopping-center/')"
            class="mx-1"
            color="grey-darken-2"
            icon="$mdiInstagram"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>