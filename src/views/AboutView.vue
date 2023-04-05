<script setup>
import NavBar from "../components/NavBar.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <div class="container">
    <Header title="About">
      <template #left></template>
      <template #right></template>
    </Header>
    <NavBar :active="'about'" />
  </div>
</template>

<style scoped>
.container {
  background-color: #f6f6f6;
}
</style>