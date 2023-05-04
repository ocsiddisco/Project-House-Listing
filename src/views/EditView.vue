<script setup>
import { useHouseStore } from "../stores/houses";
import { useRoute } from "vue-router";
import GoBackGrey from "../components/GoBackGrey.vue";
import Header from "../components/Header.vue";
import ClientInput from "../components/ClientInput.vue";
import NavBar from "../components/NavBar.vue";

const store = useHouseStore();
const route = useRoute();
const houseId = parseInt(route.params.id);
const houseSelected = store.houses.find((h) => h.id === houseId);
console.log("houseselecteddit", houseSelected);
const onFileChanged = (event) => {
  const photo = event.target.files[0];
  const file = new File([photo], photo.name);
  store.image = file;
};

const onSubmit = (data) => {
  console.log({ data });

  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  //formdata console log will return empty, to get the data inside, see code bellow
  for (var pair of formData.entries()) {
    console.log(pair[0] + ", " + pair[1]);
  }

  store.editHouse(houseId, formData);
};
</script>

<template>
  <div class="container">
    <Header title="Edit listing">
      <template #left>
        <GoBackGrey />
      </template>
      <template #right></template>
    </Header>
    <ClientInput
      :houseSelected="houseSelected"
      :formSubmitted="onSubmit"
      :fileSubmitted="onFileChanged"
    />
    <NavBar :active="'home'" />
  </div>
</template>

<style scoped>
.container {
  background-color: #f6f6f6;
}
</style>