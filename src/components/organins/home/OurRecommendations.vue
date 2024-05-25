<script setup>
import ButtonsGlobal from '../../atoms/ButtonsGlobal.vue';
import CardMenu from '../../molecules/CardMenu.vue';

const platos = [
  {
    id: 1,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
  },
  {
    id: 2,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
  },
  {
    id: 3,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
  },
  {
    id: 4,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
  },
];
</script>

<template>
  <section class="box_Our_recomendations !mt-[-5rem] pb-[2rem]">
    <h4>Nuestras recomendaciones</h4>
    <div class="flex  py-[1rem] gap-[5rem] w-full justify-center">
      <div v-for="menu in platos" :key="menu.id" >
        <CardMenu :menu="menu"/>
      </div>
    </div>
    <ButtonsGlobal class="w-[19rem] h-[6rem] text-[white] text-[2.6rem] font-bold">Ver Todos</ButtonsGlobal>
  </section>
</template>
