<script setup>
defineProps(["houseSelected"]);
</script>

<template>
  <div class="container-details">
    <div class="details-inside">
      <h2>{{ houseSelected.location.street }}</h2>
      <div class="details-street">
        <img
          src="@/assets/ic_location@3x.png"
          style="width: 20px; height: 20px"
          alt=""
        />

        <h2>{{ houseSelected.location.zip }}</h2>
        <h2>{{ houseSelected.location.city }}</h2>
      </div>
      <div class="details-house-1">
        <img
          src="@/assets/ic_price@3x.png"
          style="width: 20px; height: 20px"
          alt=""
        />
        <h4>{{ houseSelected.price }}</h4>
        <img
          src="@/assets/ic_size@3x.png"
          style="width: 20px; height: 20px"
          alt=""
        />
        <h4>{{ houseSelected.size }}</h4>
        <img
          src="@/assets/ic_construction_date@3x.png"
          style="width: 20px; height: 20px"
          alt=""
        />
        <h4>Build in {{ houseSelected.constructionYear }}</h4>
      </div>
      <div class="details-house-1">
        <img
          src="@/assets/ic_bed@3x.png"
          style="width: 20px; height: 20px"
          alt=""
        />
        <h4>{{ houseSelected.rooms.bedrooms }}</h4>
        <img
          src="@/assets/ic_bath@3x.png"
          style="width: 20px; height: 20px"
          alt=""
        />
        <h4>{{ houseSelected.rooms.bathrooms }}</h4>
        <img
          src="@/assets/ic_garage@3x.png"
          style="width: 20px; height: 20px"
          alt=""
        />
        <h4 v-if="houseSelected.hasGarage">Yes</h4>
        <h4 v-else>No</h4>
      </div>
      <h3 class="text-description">{{ houseSelected.description }}</h3>
    </div>
  </div>
</template>

<style scoped>
.container-details {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255);
  margin-top: 30vw;
  -webkit-border-top-left-radius: 29px;
  -webkit-border-top-right-radius: 29px;
  -moz-border-radius-topleft: 29px;
  -moz-border-radius-topright: 29px;
  border-top-left-radius: 29px;
  border-top-right-radius: 29px;
}

.details-inside {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 80vw;
}

.details-street {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.details-house-1 {
  display: flex;
  flex-direction: row;
  align-items: center;
}

img,
h2,
h3,
h4 {
  margin-right: 10px;
}

.text-description {
  margin: 0;
  font-weight: 500;
  text-align: justify;
}
</style>