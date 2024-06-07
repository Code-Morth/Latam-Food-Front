<script setup lang="ts">
import { ref } from 'vue';
import ContainerGlobal from "../global/ContainerGlobal.vue";
import Login from '../global/modals/Login.vue';

const visible = ref(false);

const closeModal = () => {
  visible.value = false;
  console.log("cerrando" , visible.value = false)
};

const openModal = () => {
  visible.value = true;
  console.log("visible.value", visible.value);
};
</script>

<template>
  <ContainerGlobal>
    <div class="box_navbar">
      <h2 class="logo_navbar">logo</h2>
      <nav class="container_section">
        <div class="navbar_link">
          <router-link to="/">Inicio</router-link>
          <router-link to="/Menu">Menú</router-link>
          <router-link to="/Contacto">Contacto</router-link>
        </div>
        <div class="navbar_icons_">
          <img @click="openModal" class="navbar_icon" src="/components/ui/userIcon.png" alt="userIcono" />
          <img class="navbar_icon" src="/components/ui/cardIcon.png" alt="cardIcono" />
        </div>
      </nav>
    </div>
  </ContainerGlobal>
  <Login :visible="visible" :closeModal="closeModal" />
</template>

<style scoped></style>
