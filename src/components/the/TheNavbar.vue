<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const search = ref('')
const router = useRouter()

const goToHome = () => {
  router.push({ path: '/', query: {}})
  search.value = ''
}

const goToLogin = () => {
  router.push('/login')
  search.value = ''
}

const handleSearch = () => {
  if (search.value) {
    router.push({ path: '/', query: { search: search.value } })
    return
  }

  router.push({ path: '/', query: {} })
}
</script>

<template>
  <v-app-bar color="primary-color" height="80">
    <v-container class="justify-center align-center mx-auto d-flex">
      <v-app-bar-title>
        <span @click="goToHome()" class="cursor-pointer"><v-icon icon="$mdiBagChecked" size="40" start /> Shopping Center</span>
      </v-app-bar-title>
  
      <v-sheet width="500">
        <v-text-field 
          v-model="search" 
          @click:append-inner="handleSearch()"
          @keyup.enter="handleSearch()"
          append-inner-icon="$mdiMagnify"
          placeholder="Search for whatever you want" 
          density="compact"
          variant="solo" 
          hide-details
        />
      </v-sheet>
  
      <v-btn class="ml-6 mr-3" icon="$mdiCart" />
      <v-btn @click="goToLogin()" icon="$mdiAccount" />
    </v-container>
  </v-app-bar>
</template>