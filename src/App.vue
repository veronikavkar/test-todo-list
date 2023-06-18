<template>
  <div id="app">
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/reset.css";
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@500;700&family=Montserrat:wght@400;600&family=Nunito:wght@600&family=Raleway&family=Roboto:wght@400;500&display=swap");

#app {
  font-family: "Inter", sans-serif;
}
.wrapper {
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("@/assets/main.jpg");
  height: 100vh;
  background-size: cover;
}
</style>
