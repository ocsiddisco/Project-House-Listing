<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="container">
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
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
}
.title {
  font-weight: bold;
}

.container-right {
  padding: 15px 15px 15px 0px;
}

.container-left {
  padding: 15px 0px 15px 15px;
}
</style>