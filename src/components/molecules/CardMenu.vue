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

<style scoped lang='postcss'>
.card-menu-initial {

  @apply flex flex-col pb-[1rem] shadow-[0px_0px_5px_#524f4f] rounded-2xl;

  @screen laptop{
    
    @apply flex flex-col pb-[1rem] shadow-[0px_0px_5px_#524f4f] rounded-2xl;

    width: calc(30.6rem *var(--scale));
    height: calc(37rem *var(--scale));
    gap: calc(1rem *var(--scale));
    padding-bottom: calc(1rem *var(--scale));

  }


  & img {
    @apply w-full h-[19.4rem] rounded-t-2xl object-cover;
  }

  .info-container {
    @apply px-[2rem] flex flex-col justify-around h-full;
  }

  .info-header {
    @apply flex justify-between;
  }

  p {
    @apply text-[1.6rem] text-[#515151] leading-[1.92rem] font-normal;
  }

  .button-container {
    @apply flex justify-between;

    @screen laptop{

      @apply flex justify-between;

    }

  }

  .comprar {
    @apply w-full h-[4rem] text-[white] text-[1.4rem] font-bold;

    @screen laptop{

      @apply w-[9.6rem] h-[4rem] text-[white] text-[1.6rem] font-bold;

    }

  }

  .carro {
    @apply !bg-transparent  border-2 border-titleColor w-full h-[4rem] text-titleColor text-[1.4rem] font-bold;

    @screen laptop{

      @apply !bg-transparent border-2 border-titleColor h-[4rem] text-titleColor text-[1.6rem] font-bold;


    }

  }

  h3{

    @apply text-[1.8rem] font-bold ;

  }
}
</style>
