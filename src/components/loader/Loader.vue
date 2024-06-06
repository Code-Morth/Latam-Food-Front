<script setup lang='ts'>
import { ref } from 'vue';

const completed = ref<any>(false)

setTimeout(() => {
    completed.value = true
}, 2000);

</script>

<template>
   <div class="main_box_loader">
    <div class="border-[#bbecd8] h-[15rem] w-[15rem] animate-spin rounded-full border-8 border-t-[#29ca8a] relative z-20 " >
        
        </div>
    <img v-if="completed" src="/components/contact/completed.png" alt="completado" class="absolute top-[40rem] rotate-[-5deg] w-[6rem] h-[3.5rem] main-page">

    <div v-if="completed" class="flex flex-col justify-center items-center  gap-[.5rem]">
        <h2 > ¡Compra exitosa!</h2>
    <p >En breve tendrás tu pedido</p>
    </div>
    
    <div v-else class="flex flex-col justify-center items-center gap-[.5rem]">
        <h2 >Aguarde un momento</h2>
        <p >Estamos procesando tu pedido</p>
    </div>
    
   </div>
</template>


<style lang="postcss" scoped>

.main_box_loader{
    @apply w-full h-full flex flex-col gap-[.4rem] justify-center items-center fixed top-[5%]  ;
    & h2 {
        @apply text-[3rem] text-[black] font-bold;
        @screen laptop{
            font-size: calc(4.5rem * var(--scale));
        } 
    }
    & p {
        @apply text-[#515151] font-semibold  text-[1.5rem];
        @screen laptop{
            font-size: calc(2.5rem * var(--scale));
        } 
    }
}

</style>