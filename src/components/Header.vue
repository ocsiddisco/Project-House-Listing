<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <div class="container">
    <div>
      <slot name="left"></slot>
    </div>
    <div class="title">
      {{ title }}
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
.title {
  font-weight: bold;
}
</style>