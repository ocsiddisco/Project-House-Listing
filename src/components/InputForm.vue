<script setup>
import { computed, ref } from "vue";
import { useHouseStore } from "../stores/houses";
import ClientInput from "./ClientInput.vue";

const store = useHouseStore();

const houses = computed(() => {
  return store.houses;
});

const file = computed(() => {
  return store.file;
});

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

  store.createHouse(formData);
};
</script>


<template>
  <div class="container-inputform">
    <ClientInput :formSubmitted="onSubmit" :fileSubmitted="onFileChanged" />
  </div>
</template>

<style scopde>
.container-inputform {
  width: 100%;
}
</style>
