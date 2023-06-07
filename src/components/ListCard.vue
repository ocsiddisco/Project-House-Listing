<script setup>
import Card from "./Card.vue";
import { ref, computed } from "vue";

const props = defineProps({
  houses: Array,
});
console.log("props houses", props.houses);

let input = ref("");
let sortBy = ref(""); // Added a reactive variable to keep track of the sort option

const filteredHouses = computed(() => {
  const filterText = input.value.toLowerCase().trim();
  return props.houses.filter((house) => {
    return (
      house.location.street.toLowerCase().includes(filterText) ||
      house.location.city.toLowerCase().includes(filterText) ||
      house.location.zip.toLowerCase().includes(filterText) ||
      house.price.toString().includes(filterText) ||
      house.size.toString().includes(filterText)
    );
  });
});

const sortedHouses = computed(() => {
  const sorted = [...filteredHouses.value]; // Create a new array to avoid mutating the computed property
  if (sortBy.value === "price") {
    sorted.sort((a, b) => parseInt(a.price) - parseInt(b.price));
  } else if (sortBy.value === "size") {
    sorted.sort((a, b) => parseInt(a.size) - parseInt(b.size));
  }
  return sorted;
});

const count = computed(() => {
  return filteredHouses.value.length;
});

function sortByPrice() {
  sortBy.value = "price";
}

function sortBySize() {
  sortBy.value = "size";
}
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
      <h2>{{ count }} results found</h2>
    </div>

    <div v-for="house in sortedHouses" :key="house.id" class="container-card">
      <!-- router link commented as I want to use it in Card component -->
      <!-- <router-link :to="{ path: `/house/${house.id}` }" class="text-decoration"> -->
      <Card :house="house" />
      <!-- </router-link> -->
    </div>

    <!-- redirect to error information -->
    <div class="no-house" v-if="input && !filteredHouses.length">
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
  margin-bottom: 40px;
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
  width: 100%;
  justify-content: space-between;
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
  -webkit-border-top-left-radius: 10px;
  -webkit-border-bottom-left-radius: 10px;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-bottomleft: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.grey {
  background-color: #c3c3c3;
  -webkit-border-top-right-radius: 10px;
  -webkit-border-bottom-right-radius: 10px;
  -moz-border-radius-topright: 10px;
  -moz-border-radius-bottomright: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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