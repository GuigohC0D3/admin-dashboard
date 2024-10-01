<template>
  <TheNavbar />
  <TheSidebar />
  <DashboardHome />
  <router-view />
</template>

<script>
import TheNavbar from "./components/TheNavbar.vue";
import TheSidebar from "./components/TheSidebar.vue";
import DashboardHome from "./views/DashboardHome.vue";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheSidebar,
    DashboardHome
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  font-family: "Fredoka", sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
