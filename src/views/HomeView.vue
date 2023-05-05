<script setup>
import NavBar from "../components/NavBar.vue";
import ListCard from "../components/ListCard.vue";
import Header from "../components/Header.vue";
import ImageAdd from "../assets/ic_plus_grey@3x.png";
import { useHouseStore } from "../stores/houses";
import { onMounted, computed } from "vue";

const store = useHouseStore();

onMounted(() => {
  store.fetchHouses();
});

const houses = computed(() => {
  return store.houses;
});

const count = computed(() => {
  return store.count;
});
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
    <ListCard v-if="!!houses.length" :houses="houses" :count="count" />
    <NavBar :active="'home'" />
  </div>
</template>


<style scoped>
.container {
  width: 100%;
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

.button {
  text-align: center;
  width: 40%;
}
</style>