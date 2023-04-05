<script setup>
import NavBar from "../components/NavBar.vue";
import ListCard from "../components/ListCard.vue";
import Header from "../components/Header.vue";
import ImageAdd from "../assets/ic_plus_grey@3x.png";
</script>

<template>
  <div class="container">
    <Header title="Houses">
      <template #left> </template>
      <template #right>
        <router-link :to="{ path: '/form' }">
          <img :src="ImageAdd" style="width: 20px" alt="" />
        </router-link>
      </template>
    </Header>
    <ListCard />
    <NavBar :active="'home'" />
  </div>
</template>


<style scoped>
.container {
  width: 100vw;
}

.container-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.button-add {
  display: flex;
  justify-content: flex-end;
}

.third-lign {
  display: flex;
  justify-content: center;
}

.container-input {
  display: flex;
  justify-content: center;
}

input {
  width: 80%;
}

.button {
  text-align: center;
  width: 40%;
}
</style>