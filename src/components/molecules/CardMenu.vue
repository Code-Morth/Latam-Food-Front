<script setup>
import { defineProps } from "vue";
import ButtonsGlobal from "../atoms/ButtonsGlobal.vue";


defineProps({
  menu: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="card-menu-initial">
    <img :src="menu?.foto" alt="Foto del plato" />
    <div class="info-container">
      <header class=" info-header ">
        <h3>{{ menu?.title }}</h3>
        <h3>${{ menu?.precio }}</h3>
      </header>
      <p>{{ menu?.description }}</p>
      <div class="button-container">
        <ButtonsGlobal class="comprar">Comprar</ButtonsGlobal>
        <ButtonsGlobal class="carro">Añadir
          al carro</ButtonsGlobal>
      </div>
    </div>
  </div>
</template>
