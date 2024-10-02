<template>
  <div>
    <TheNavbar />
    <DashboardHome />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import DashboardHome from "./DashboardHome.vue";

export default {
  name: "HomePage",
  components: {
    TheNavbar,
    DashboardHome
  },
};
</script>

<style scoped></style>
