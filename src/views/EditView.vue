<script setup>
import GoBackGrey from "../components/GoBackGrey.vue";
import Header from "../components/Header.vue";
import InputFormCopy from "../components/InputFormCopy.vue";
import NavBar from "../components/NavBar.vue";
</script>

<template>
  <div class="container">
    <Header title="Edit listing">
      <template #left>
        <GoBackGrey />
      </template>
      <template #right></template>
    </Header>
    <InputFormCopy />
    <NavBar :active="'home'" />
  </div>
</template>

<style scoped>
.container {
  background-color: #f6f6f6;
}
</style>