<script setup>
import InputForm from "../components/InputForm.vue";
import NavBar from "../components/NavBar.vue";
import GoBackGrey from "../components/GoBackGrey.vue";
import Header from "../components/Header.vue";
</script>

<template>
  <div class="container">
    <Header title="Create new listing">
      <template #left>
        <GoBackGrey />
      </template>
      <template #right></template>
    </Header>
    <InputForm />
    <NavBar :active="'home'" />
  </div>
</template>

<style scoped>
.container {
  background-image: url("img_placeholder_house@3x.png");
  background-attachment: fixed;
  background-position: top;
  width: 100%;
}
</style>
