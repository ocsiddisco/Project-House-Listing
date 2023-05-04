<script setup>
import { ref, computed } from "vue";
import imageActiveAbout from "@/assets/ic_mobile_navigarion_info_active@3x.png";
import imageInactiveAbout from "@/assets/ic_mobile_navigarion_info@3x.png";
import imageActiveHome from "@/assets/ic_mobile_navigarion_home_active@3x.png";
import imageInactiveHome from "@/assets/ic_mobile_navigarion_home@3x.png";

const props = defineProps({
  active: String,
});

const active = ref(props.active);
const imageAbout = computed(() => {
  return active.value === "about" ? imageActiveAbout : imageInactiveAbout;
});

const imageHome = computed(() => {
  return active.value === "home" ? imageActiveHome : imageInactiveHome;
});
</script>

<template>
  <div class="container">
    <router-link :to="{ path: '/' }">
      <div>
        <img :src="imageHome" style="width: 20px" alt="" />
      </div>
    </router-link>
    <router-link :to="{ path: '/about' }">
      <div>
        <img :src="imageAbout" style="width: 20px" alt="" />
      </div>
    </router-link>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 6vh;
  position: fixed;
  background-color: rgba(255, 255, 255);
  overflow: hidden;
  z-index: 200;
  left: 0;
  bottom: 0;
  box-shadow: 0px -5px 15px 0px rgba(183, 183, 183, 0.75);
}
</style>