<script setup>
import { useHouseStore } from "../stores/houses";
import Card from "./Card.vue";
import { ref, onMounted, computed } from "vue";

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

let input = ref("");

const filteredHouses = computed(() => {
  const filterText = input.value.toLowerCase().trim();
  return houses.value.filter((house) => {
    return (
      house.location.street.toLowerCase().includes(filterText) ||
      house.location.city.toLowerCase().includes(filterText) ||
      house.location.zip.toLowerCase().includes(filterText) ||
      house.price.toString().includes(filterText) ||
      house.size.toString().includes(filterText)
    );
  });
});

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
      <div class="input-inside">
        <img src="@/assets/ic_search@3x.png" style="width: 20px" alt="" />
        <input v-model="input" type="text" placeholder="Search" />
        <div class="container-assets-clear">
          <img
            class="align-right"
            src="@/assets/ic_clear@3x.png"
            style="width: 20px"
            alt=""
          />
        </div>
      </div>
    </div>
    <div classs="container-buttons">
      <div class="buttons-inside">
        <button class="button orange" @click="sortByPrice">Price</button>
        <button class="button grey" @click="sortBySize">Size</button>
      </div>
    </div>
    <div class="container-count">
      <h2>{{ count }} results founds</h2>
    </div>

    <div v-for="house in filteredHouses" :key="house.id" class="container-card">
      <!-- <router-link :to="{ path: `/house/${house.id}` }"> -->
      <Card :house="house" />
      <!-- </router-link> -->
    </div>
    <div class="no-house" v-if="input && !filteredHouses.length">
      <!-- redirect to error page -->
      <img
        class="img-empty-house"
        src="@/assets/img_empty_houses@3x.png"
        alt=""
      />
      <p>No result found.</p>
      <p>Please try another keyword.</p>
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

.container-input {
  display: flex;
  flex-direction: row;
  width: 80vw;
  background-color: #e8e8e8;
  border-radius: 5px;
}

.input-inside {
  display: flex;
  flex-direction: row;
  padding: 10px 20px 10px 20px;
}

input {
  background-color: #e8e8e8;
  border: none;
  margin-left: 10px;
  outline: none;
  width: 60vw;
}

.container-assets-clear {
  display: flex;
  flex-direction: row;
}

.align-right {
  justify-items: end;
}
/* img{
    width:50px;
    height: 50px;
} */

.container-buttons {
  width: 80vw;
  margin-top: 15px;
}
.buttons-inside {
  display: flex;
  flex-direction: row;
  border: none;
  border-radius: 10px;
}
.button {
  width: 40vw;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #ffffff;
  border: none;
  margin: 15px 0px 15px 0px;
}

.orange {
  background-color: #eb5440;
}

.grey {
  background-color: #c3c3c3;
}

.container-count {
  width: 80vw;
  text-align: left;
}

.container-card {
  display: flex;
  flex-direction: row;
  border: none;
  height: 20%;
  width: 80vw;
}

.no-house {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  margin-top: 25px;
}

.img-empty-house {
  width: 40vw;
}
</style>