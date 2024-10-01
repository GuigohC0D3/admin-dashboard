import { createRouter, createWebHistory } from "vue-router";
import UserManagement from "@/views/UserManagement.vue";
import UserSettings from "@/views/UserSettings.vue";
import HomePage from "@/views/HomePage.vue";

const routes = [
  { path: "/users", name: "users", component: UserManagement },
  { path: "/settings", name: "UserSettings", component: UserSettings },
  {path: "/Home", name: "Home", component: HomePage}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
