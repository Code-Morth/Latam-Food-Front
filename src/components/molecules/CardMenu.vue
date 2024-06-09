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
        <ButtonsGlobal class="carro">Añadir al carro</ButtonsGlobal>
      </div>
    </div>
  </div>
</template>

<style scoped lang='postcss'>
.card-menu-initial {

  @apply flex flex-col pb-[2rem] shadow-[0px_0px_5px_#524f4f] gap-[1rem] rounded-2xl;

  @screen laptop {

    @apply flex flex-col pb-[1rem] shadow-[0px_0px_5px_#524f4f] rounded-2xl;

    width: calc(30.6rem *var(--scale));
    height: auto;
    gap: calc(1rem *var(--scale));
    padding-bottom: calc(1rem *var(--scale));

  }


  & img {
    @apply w-full rounded-t-2xl object-cover;

    @screen laptop {

      height: calc(19.4rem *var(--scale));

    }

  }

  .info-container {
    @apply px-[2rem] flex flex-col justify-around h-full gap-[1.5rem];

    @screen laptop {

      @apply flex flex-col justify-around h-full;

      padding-left: calc(2rem *var(--scale));
      padding-rigth: calc(2rem *var(--scale));

    }

  }

  .info-header {
    @apply flex justify-between;
  }

  p {
    @apply text-[1.6rem] text-[#515151] leading-[1.92rem] font-normal;
  }

  .button-container {
    @apply flex justify-between gap-[2rem];

    @screen laptop {

      @apply flex justify-between;

    }

  }

  .comprar {
    @apply w-full h-[4rem] text-[white] text-[1.4rem] font-bold;

    @screen laptop {

      @apply text-[white] flex justify-center items-center font-bold;

      width: calc(9.6rem *var(--scale));
      height: calc(4rem *var(--scale));
      font-size: calc(1.6rem *var(--scale));

    }

  }

  .carro {
    @apply !bg-transparent border-2 border-titleColor w-full h-[4rem] text-titleColor text-[1.3rem] font-bold;

    @screen laptop {

      @apply !bg-transparent flex justify-center items-center border-2 border-titleColor text-titleColor font-bold;

      font-size: calc(1.5rem *var(--scale));
      height: calc(4rem *var(--scale));
      line-height:calc(1.5rem *var(--scale));




    }

  }

  h3 {

    @apply text-[1.8rem] font-bold;

  }
}
</style>
