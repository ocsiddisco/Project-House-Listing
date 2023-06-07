<script setup>
import { useHouseStore } from "../stores/houses";
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Modal from "@/components/Modal.vue";
import Details from "@/components/Details.vue";
import Recommanded from "@/components/Recommanded.vue";

import { createConfirmDialog } from "vuejs-confirm-dialog";
import NavBar from "../components/NavBar.vue";
import Header from "../components/Header.vue";
import GoBackWhite from "../components/GoBackWhite.vue";

onMounted(() => {
  store.fetchHouses();
});

const store = useHouseStore();
const route = useRoute();

const houses = computed(() => {
  return store.houses;
});

const houseId = parseInt(route.params.id);

const houseSelected = computed(() => {
  return store.houses.find((h) => h.id === houseId);
});

// const recommandedHouses = computed(() => {
//   return houses.value.filter((house) => {
//     return house.location.city === houseSelected?.location?.city;
//   });
// });

const { reveal, onConfirm } = createConfirmDialog(Modal);

onConfirm(() => {
  store.delete(houseId);
  console.log("house deleted here");
});
</script>


<template>
  <div class="container-background">
    <div
      v-if="!!houseSelected"
      class="container"
      :style="{
        'background-image': `url(${houseSelected.image})`,
      }"
    >
      <div class="container-top">
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
      <Details v-if="!!houseSelected" :houseSelected="houseSelected" />
      <!-- <Recommanded
      v-if="!!houseSelected"
      :recommandedHouses="recommandedHouses"
    /> -->
      <NavBar :active="'home'" />
    </div>
  </div>
</template>


<style scoped>
.container-background {
  background-color: white;
  height: 100vh;
  z-index: -5;
}
.container {
  width: 100vw;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: -1;
}

.container-top {
}

img {
  width: 10vw;
  padding-right: 10px;
}

h4 {
  padding-right: 10px;
}

.container-recommendation {
  display: flex;
  flex-direction: column;
  background-color: #f6f6f6;
  margin-bottom: 40px;
}

.recommendation-inside {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80vw;
}

.text-decoration {
  text-decoration: none;
}
</style>