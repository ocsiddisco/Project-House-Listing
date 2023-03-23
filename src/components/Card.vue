<script setup>
defineProps(["house"]);
</script>

<template>
  <router-link :to="{ path: `/house/${house.id}` }">
    <img :src="house.image" class="img-home" />
    <div class="adress-price-details">
      <p>{{ house.location.street }}</p>
      <p>{{ house.price }}</p>
      <p>{{ house.location.city }} {{ house.location.zip }}</p>
      <div class="details">
        <img class="ici" />
        <p>{{ house.rooms.bedrooms }}</p>
        <img class="ici" />
        <p>{{ house.rooms.bathrooms }}</p>
        <img class="ici" />
        <p>{{ house.size }} m2</p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
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