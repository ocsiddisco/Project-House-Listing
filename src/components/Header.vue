<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="container">
    <div class="containe-inside">
      <div class="container-left">
        <slot name="left"></slot>
      </div>
      <div class="title">
        {{ title }}
      </div>
      <div class="container-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
}

.containe-inside {
  display: flex;
  flex-direction: row;
  width: 80vw;
  padding-top: 15px;
  padding-bottom: 15px;
  justify-content: space-between;
}
.title {
  font-weight: bold;
  align-self: center;
}

.container-right {
  padding: 15px 15px 15px 0px;
}

.container-left {
  padding: 15px 0px 15px 15px;
}
</style>