<script setup>
import { useHouseStore } from "../stores/houses";
import { computed } from "vue";
import { useRoute } from "vue-router";
import Card from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";
import { createConfirmDialog } from "vuejs-confirm-dialog";
import NavBar from "../components/NavBar.vue";
import Header from "../components/Header.vue";
import GoBackWhite from "../components/GoBackWhite.vue";

const store = useHouseStore();

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

const { reveal, onConfirm } = createConfirmDialog(Modal);

defineProps(["house"]);

onConfirm(() => {
  store.delete(houseId);
  console.log("house deleted here");
});

console.log("filteredHouses", filteredHouses);

const backgroundImage = computed(() => {
  return `url(${houseSelected.image})`;
});
</script>


<template>
  <div class="container">
    <div
      class="container-image"
      :style="{
        'background-image': backgroundImage,
      }"
    >
      <Header title="">
        <template #left> <GoBackWhite /></template>
        <template #right>
          <div v-if="houseSelected.madeByMe === true">
            <router-link :to="{ path: `/house/${houseSelected.id}/edit` }">
              <img
                src="@/assets/ic_edit_white@3x.png"
                style="width: 20px"
                alt=""
              />
            </router-link>
            <img
              src="@/assets/ic_delete_white@3x.png"
              style="width: 20px"
              alt=""
              @click="reveal"
            />
          </div>
        </template>
      </Header>
      <DialogsWrapper />
    </div>
    <div>
      <h2>{{ houseSelected.location.street }}</h2>
      <div>
        <img src="@/assets/ic_location@3x.png" style="width: 20px" alt="" />

        <h2>{{ houseSelected.location.zip }}</h2>
        <h2>{{ houseSelected.location.city }}</h2>
      </div>
      <div>
        <img src="@/assets/ic_price@3x.png" style="width: 20px" alt="" />
        <h4>{{ houseSelected.price }}</h4>
        <img src="@/assets/ic_size@3x.png" style="width: 20px" alt="" />
        <h4>{{ houseSelected.size }}</h4>
        <img
          src="@/assets/ic_construction_date@3x.png"
          style="width: 20px"
          alt=""
        />
        <h4>Build in {{ houseSelected.constructionYear }}</h4>
      </div>
      <div>
        <img src="@/assets/ic_bed@3x.png" style="width: 20px" alt="" />
        <h4>{{ houseSelected.rooms.bedrooms }}</h4>
        <img src="@/assets/ic_bath@3x.png" style="width: 20px" alt="" />
        <h4>{{ houseSelected.rooms.bathrooms }}</h4>
        <img src="@/assets/ic_garage@3x.png" style="width: 20px" alt="" />
        <h4 v-if="houseSelected.hasGarage">Yes</h4>
        <h4 v-else>No</h4>
      </div>
      <h3>{{ houseSelected.description }}</h3>
    </div>

    <!-- similar houses -->
    <div>
      <h4>Recommanded for you</h4>
      <div v-for="house in filteredHouses" :key="house.id">
        <!-- <router-link :to="{ path: `/house/${house.id}` }"> -->
        <Card :house="house" />
        <!-- </router-link> -->
      </div>
    </div>
    <NavBar :active="'home'" />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}

.container-image {
  width: 100%;
  height: 50%;
}
img {
  width: 10vw;
}
</style>