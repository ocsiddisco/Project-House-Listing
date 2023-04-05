<script setup>
import { useHouseStore } from "../stores/houses";
import Modal from "../components/Modal.vue";
import { ref, watch } from "vue";
import { createConfirmDialog } from "vuejs-confirm-dialog";

const { reveal, onConfirm } = createConfirmDialog(Modal);

defineProps(["house"]);

const store = useHouseStore;

// const houseId = parseInt(route.params.id);

// const getId = (house) => {
//   console.log("get ID house", this.house);
//   return house.id;
// };

// onConfirm(() => {
//   console.log("here");
//   window.onload = function () {
//     console.log("now here");
//     if (route != undefined) {
//       console.log("Here?");
//       const houseId = parseInt(route.params.id);
//       store.delete(houseId);
//       console.log("house deleted");
//     }
//   };
// });
</script>

<template>
  <router-link :to="{ path: `/house/${house.id}` }">
    <div>
      <img :src="house.image" class="img-home" />
      <div class="adress-price-details">
        <div>
          <p>{{ house.location.street }}</p>
          <div v-if="house.madeByMe === true">
            <img src="@/assets/ic_edit@3x.png" style="width: 20px" alt="" />
            <img
              src="@/assets/ic_delete@3x.png"
              style="width: 20px"
              alt=""
              @click="reveal()"
            />
            <DialogsWrapper />
          </div>
        </div>
        <p>{{ house.price }}</p>
        <p>{{ house.location.city }} {{ house.location.zip }}</p>
        <div class="details">
          <img src="@/assets/ic_bed@3x.png" style="width: 20px" alt="" />
          <p>{{ house.rooms.bedrooms }}</p>
          <img src="@/assets/ic_bath@3x.png" style="width: 20px" alt="" />
          <p>{{ house.rooms.bathrooms }}</p>
          <img src="@/assets/ic_size@3x.png" style="width: 20px" alt="" />
          <p>{{ house.size }} m2</p>
        </div>
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