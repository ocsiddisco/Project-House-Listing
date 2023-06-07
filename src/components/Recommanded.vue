<script setup>
import Card from "@/components/Card.vue";

defineProps(["recommandedHouses"]);
</script>

<template>
  <!-- similar houses -->
  <div v-if="!!recommandedHouses.length" class="container-recommendation">
    <div class="recommendation-inside">
      <div class="container-text">
        <h4>Recommanded for you</h4>
      </div>
      <div v-for="house in recommandedHouses" :key="house.id">
        <!-- commented as I will use router link in card component -->
        <!-- <router-link
          :to="{ path: `/house/${newHouseId}` }"
          class="text-decoration"
        > -->
        <Card :house="house" />
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>