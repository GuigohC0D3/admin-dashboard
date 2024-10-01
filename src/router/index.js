import { createRouter, createWebHistory } from 'vue-router';
import TheNavbar from '@/components/TheNavbar.vue';
import UserManagement from '@/views/UserManagement.vue';


const routes =[
    {path: '/', component: TheNavbar},
    {path: '/users', component: UserManagement}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;