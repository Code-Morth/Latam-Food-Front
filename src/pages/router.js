import { createRouter, createWebHistory } from "vue-router";
import Home from '../pages/home/Home.vue'
import Menu from "./Menu/Menu.vue";
import Contacto from "./Contacto/Contacto.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path : '/',
        name : 'Home',
        component : Home
    },
    {
      path : '/Menu',
      name : 'Menu',
      component : Menu
  },
  {
    path : '/Contacto',
    name : 'Contacto',
    component : Contacto
}
],
});


export default router;