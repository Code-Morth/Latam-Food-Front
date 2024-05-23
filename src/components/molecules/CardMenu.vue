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
  <div class="card_menu_initial shadow-[0px_0px_5px_#524f4f]">
    <img :src="menu?.foto" alt="Foto del plato" class="rounded-t-2xl" />
    <div class="px-[2rem] flex flex-col justify-around h-full">
        <header class="flex justify-between"> 
            <h3>{{ menu?.title }}</h3>
            <h3>${{ menu?.precio }}</h3>
        </header>
     
      <p class="text-[1.6rem] text-[#515151] leading-[1.92rem] font-normal">{{ menu?.description }}</p>
      

      <div class="flex justify-between ">
        <ButtonsGlobal class="w-[9.6rem] h-[4rem] text-[white] text-[1.6rem] font-bold">Comprar</ButtonsGlobal>
        <ButtonsGlobal class=" !bg-transparent border-2 border-titleColor  h-[4rem] text-titleColor  text-[1.6rem] font-bold">Añadir al carro</ButtonsGlobal>
      </div>
    </div>
  </div>
</template>
