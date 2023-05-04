<script setup>
import { useHouseStore } from "../stores/houses";
import Modal from "../components/Modal.vue";
import { createConfirmDialog } from "vuejs-confirm-dialog";
import { useRoute } from "vue-router";

const store = useHouseStore();

defineProps(["house"]);

const route = useRoute();

const { reveal, onConfirm, onCancel } = createConfirmDialog(Modal);

onConfirm(() => {
  const houseId = parseInt(route.params.id);
  store.delete(houseId);
  console.log("house deleted there");
});

onCancel(() => {
  Modal.close();
});
</script>

<template>
  <router-link :to="{ path: `/house/${house.id}` }" class="text-decoration">
    <div class="card-inside">
      <div class="card-inception">
        <div class="container-img-home">
          <img :src="house.image" class="img-home" />
        </div>
        <div class="container-details">
          <div class="container-first-lign">
            <div>
              <p>{{ house.location.street }}</p>
            </div>
            <div v-if="house.madeByMe === true" class="align-right">
              <router-link :to="{ path: `/house/${house.id}/edit` }">
                <img
                  src="@/assets/ic_edit@3x.png"
                  style="width: 20px; height: 20px"
                  alt=""
                />
              </router-link>
              <img
                src="@/assets/ic_delete@3x.png"
                style="width: 20px; height: 20px"
                alt=""
                @click="reveal"
              />
            </div>
            <DialogsWrapper />
          </div>
          <p>€ {{ house.price }}</p>
          <p>{{ house.location.zip }} {{ house.location.city }}</p>
          <div class="container-fourth-lign">
            <img
              src="@/assets/ic_bed@3x.png"
              style="width: 20px; height: 20px"
              alt=""
            />
            <p>{{ house.rooms.bedrooms }}</p>
            <img
              src="@/assets/ic_bath@3x.png"
              style="width: 20px; height: 20px"
              alt=""
            />
            <p>{{ house.rooms.bathrooms }}</p>
            <img
              src="@/assets/ic_size@3x.png"
              style="width: 20px; height: 20px"
              alt=""
            />
            <p>{{ house.size }} m2</p>
          </div>
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

.text-decoration {
  text-decoration: none;
}

.card-inside {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80vw;
  margin-top: 10px;
  box-shadow: 4px 3px 15px 0px rgba(183, 183, 183, 0.4);
}

.card-inception {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255);
}

.container-details {
  display: flex;
  flex-direction: column;
  width: 60%;
  min-width: 60%;
  padding: 15px 0px 15px 0px;
}

.container-details,
p {
  margin: 5px;
}

.container-first-lign {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
}

.align-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.details {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.container-img-home {
  display: flex;
  align-self: center;
  justify-self: center;
  width: 30%;
  min-width: 30%;
  padding: 10px;
}

.img-home {
  width: 100%;
  height: fit-content;
  border: none;
  border-radius: 10px;
}

.container-fourth-lign {
  display: flex;
  flex-direction: row;
  padding-top: 10px;
}

.container-fourth-lign,
p {
  padding-left: 5px;
}
</style>