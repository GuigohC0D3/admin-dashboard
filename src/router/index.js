import { createRouter, createWebHistory } from "vue-router";
import UserManagement from "@/views/UserManagement.vue";
import UserSettings from "@/views/UserSettings.vue";

const routes = [
  { path: "/users", name: "users", component: UserManagement },
  { path: "/settings", name: "UserSettings", component: UserSettings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
