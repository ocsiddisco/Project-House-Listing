<script setup>
import { useHouseStore } from "../stores/houses";
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import Card from "../components/JustCard.vue";

const store = useHouseStore();

const getHouses = computed(() => {
  return store.getHouses;
});
const houses = computed(() => {
  return store.houses;
});

const route = useRoute();

const houseId = parseInt(route.params.id);

const houseSelected = store.houses.find((h) => h.id === houseId);

console.log("houseSelected", houseSelected);

const filteredHouses = store.houses.filter(function (h) {
  return h.location.city === houseSelected.location.city;
});

console.log("filteredHouses", filteredHouses);
</script>


<template>
  <div>
    <div>
      <img :src="`${houseSelected.image}`" />
    </div>
    <div>
      <h2>{{ houseSelected.location.street }}</h2>
      <div>
        <!-- add img location -->
        <h2>{{ houseSelected.location.zip }}</h2>
        <h2>{{ houseSelected.location.city }}</h2>
      </div>
      <div>
        <!-- add img price -->
        <h4>{{ houseSelected.price }}</h4>
        <!-- add img size -->
        <h4>{{ houseSelected.size }}</h4>
        <!-- add img build -->
        <h4>Build in {{ houseSelected.constructionYear }}</h4>
      </div>
      <div>
        <!-- add img bed -->
        <h4>{{ houseSelected.rooms.bedrooms }}</h4>
        <!-- add img bath -->
        <h4>{{ houseSelected.rooms.bathrooms }}</h4>
        <!-- add img garage -->
        <h4>{{ houseSelected.hasGarage }}</h4>
      </div>
      <h3>{{ houseSelected.description }}</h3>
    </div>

    <!-- similar houses -->
    <div>
      <h4>Recommanded for you</h4>
      <div v-for="house in filteredHouses" :key="house.id">
        <Card :house="house" />
      </div>
    </div>
  </div>
</template>


<style scoped>
img {
  width: 100vw;
}
</style>