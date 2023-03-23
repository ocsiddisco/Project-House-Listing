<script setup>
import { useHouseStore } from "../stores/houses";
import Card from "./JustCard.vue";
import { ref, onMounted, computed, watch } from "vue";

const store = useHouseStore();

onMounted(() => {
  store.fetchHouses();
});
const getHouses = computed(() => {
  return store.getHouses;
});
const houses = computed(() => {
  return store.houses;
});

const search = ref("");

const count = computed(() => {
  return store.count;
});

const sortByPrice = computed(() => {
  return store.sortByPrice;
});

const sortBySize = computed(() => {
  return store.sortBySize;
});
</script>

<template>
  <div class="container-cards">
    <div class="container-input">
      <input v-model="search" type="text" placeholder="Search" />
    </div>
    <div classs="third-lign">
      <button class="button" @click="sortByPrice()">Price</button>
      <button class="button" @click="sortBySize()">Size</button>
    </div>
    <div v-for="house in store.houses" :key="house.id" class="container-card">
      <h2>{{ count }}</h2>
      <Card :house="house" />
    </div>
    <div class="no-house" v-if="input && !houses.length">
      <!-- redirect to error page -->
      No result found
    </div>
    <!-- must be visible only if you are the owner of the listing -->
    <div>
      <h4><img edit />Edit</h4>
      <h4><img delete />Delete</h4>
    </div>
  </div>
</template>

<style scoped>
.container-cards {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.container-card {
  display: flex;
  flex-direction: row;
  border: none;
  border-radius: 10px;
  margin: 20px 20px 0 20px;
  background-color: rgba(255, 255, 255);
  height: 20%;
  width: 80%;
}

/* img{
    width:50px;
    height: 50px;
} */

.adress-price.details {
  display: flex;
  flex-direction: column;
}

.details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.img-home {
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 20px;
  padding: 10px;
}

.ici {
  width: 10px;
  height: 10px;
}
</style>