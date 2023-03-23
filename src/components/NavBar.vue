<template>
  <div class="container">
    <router-link :to="{ path: '/' }">
      <h4>home<img alt="home" /></h4>
    </router-link>
    <router-link :to="{ path: '/about' }">
      <h4>about<img alt="about" /></h4>
    </router-link>
  </div>
</template>


<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  width: 100vw;
  position: fixed;
  background-color: #ffffff;
}
</style>