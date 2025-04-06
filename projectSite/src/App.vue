<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/navBar.vue'
</script>

<template>
  <header>
    <UApp>
      <NavBar>
        <RouterLink to="/">Home</RouterLink>
      </NavBar>
    </UApp>
  </header>

  <RouterView />
</template>

<style scoped></style>
