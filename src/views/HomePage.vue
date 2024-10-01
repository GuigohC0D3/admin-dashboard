<template>
  <div>
    <TheNavbar />
    <TheSidebar />
    <DashboardHome />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from "../components/TheSidebar.vue";
import DashboardHome from "./DashboardHome.vue";

export default {
  name: "HomePage",
  components: {
    TheNavbar,
    TheSidebar,
    DashboardHome,
  },
};
</script>

<style scoped></style>
