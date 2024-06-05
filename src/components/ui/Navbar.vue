<script setup lang="ts">
import ContainerGlobal from "../global/ContainerGlobal.vue";
</script>

<template>
  <ContainerGlobal>
    <div class="box_navbar">
      <h2 class="logo_navbar">logo</h2>
      <nav class="container_section ">
        <div class="navbar_link">
          <router-link to="/">Inicio</router-link>
          <router-link to="/Menu">Menú</router-link>
          <router-link to="/Contacto">Contacto</router-link>
        </div>

        <div class="navbar_icons_">
          <img
            class="navbar_icon"
            src="/components/ui/userIcon.png"
            alt="userIcono"
          />
          <img
            class="navbar_icon"
            src="/components/ui/cardIcon.png"
            alt="cardIcono"
          />
        </div>
      </nav>
    </div>
  </ContainerGlobal>
</template>

<style scoped></style>
