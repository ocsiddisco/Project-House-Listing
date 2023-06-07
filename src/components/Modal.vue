
<template>
  <div class="modal-container">
    <div class="modal-body">
      <h2>Delete listing</h2>
      <h3>Are you sure you want to delete this listing?</h3>
      <h3>This action cannot be undone.</h3>
      <div class="modal-action">
        <button class="modal-button orange" @click="emit('confirm')">
          Confirm
        </button>
        <button class="modal-button grey" @click="emit('cancel')">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["confirm", "cancel"]);
</script>

<style>
.modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #cececeb5;
}
.modal-body {
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 20px 40px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
}
.modal-action {
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  margin-top: 10px;
}
.modal-button {
  cursor: pointer;
  height: 30px;
  padding: 0 25px;
  border-radius: 5px;
  color: #fff;
}
.grey {
  background-color: rgb(74, 75, 76);
}

.orange {
  background-color: rgb(235, 84, 64);
}

h3 {
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 10px;
}
</style>
