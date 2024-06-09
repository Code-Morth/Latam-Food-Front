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
    <div class="box-recomendation-container">
      <div v-for="menu in platos" :key="menu.id">
        <CardMenu :menu="menu" />
      </div>
    </div>
    <ButtonsGlobal class="ver-todos">Ver Todos</ButtonsGlobal>
  </section>
</template>


<style scoped>
.box_Our_recomendations {
  @apply w-full h-auto flex flex-col gap-[3rem] items-center;

  @screen laptop {

    @apply w-full h-auto flex flex-col items-center;

    gap:calc(3rem *var(--scale));


  }

  & h4 {
    @apply text-black text-[2.2rem] font-medium;

    @screen laptop{

      @apply text-black;

      font-size:calc(2rem *var(--scale));

    }

  }


  .box-recomendation-container {

    @apply flex flex-col gap-[3rem];


    @screen laptop {

      @apply flex flex-row py-[1rem] gap-[5rem] w-full justify-center;

      padding-left:calc(1rem *var(--scale));
      padding-rigth:calc(1rem *var(--scale));
      gap:calc(5rem *var(--scale));


    }


  }

  .ver-todos{

    @apply w-fit h-fit text-[white] text-[1.5rem] p-[1rem] px-[3rem] flex flex-col justify-center items-center font-bold ;

    @screen laptop{

      @apply  text-[white]  font-bold ;

      font-size:calc(2.6rem *var(--scale));
      height:calc(6rem *var(--scale));
      width:calc(19rem *var(--scale));

    }

  }

}
</style>