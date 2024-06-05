
<script setup>

defineProps({
    menu: {
    type: Object,
    required: true,
  },
});

</script>


<template>
    <div class='card_box_content_main_'>
        <img class="absolute top-[-1rem] -rotate-12 left-[-1.2rem]" src="/components/molecules/pais.png" alt="bandera">
        <img :src='menu?.foto' alt="menu">
        <section class='info_box_main_card'>
            <article class='box_price_name'>
                <h3>{{ menu?.title }} (x1)</h3>
                <h3>${{ menu?.precio }}</h3>
            </article>

            <p>{{ menu?.description }}</p>

            <article class='box_btn_card_main'>
                <button>Añadir al Carro</button>
            </article>
        </section>
    </div>
</template>



<style lang="postcss" scoped>
.card_box_content_main_ {
    @apply relative w-[30.6rem] h-[42rem] flex flex-col  rounded-[2rem] shadow-[0px_0px_10px_#E2E2E2] ;
    .info_box_main_card {
        @apply p-[1.5rem]  flex flex-col  justify-between   h-full   ;

        .box_price_name{
            @apply flex justify-between ;
             & h3{
                @apply text-[1.8rem] font-bold;
             }
        }
       & p {
        @apply text-[1.6rem]  text-[#515151] font-medium ;;
       } 
    }

    .box_btn_card_main{
        @apply w-full h-auto ;
        & button {
            @apply bg-[#F08A1D] w-full py-[.8rem] rounded-2xl text-white font-semibold text-[1.5rem] duration-300 ease-in-out hover:bg-[#f08a1db7];
        }
    }
    
}


</style>