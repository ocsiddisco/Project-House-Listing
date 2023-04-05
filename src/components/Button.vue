<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="container">
    <button class="button" type="submit">{{ name }}</button>
  </div>
</template>