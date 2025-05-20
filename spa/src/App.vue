<!-- src/App.vue -->
<template>
  <header>
    <Header />
  </header>
  <main> 
    <router-view />
  </main>  
</template>

<script setup>
import Header from './components/Header.vue'
</script>