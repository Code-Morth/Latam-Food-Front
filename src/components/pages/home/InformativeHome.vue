<script setup>
import ButtonsGlobal from '../../atoms/ButtonsGlobal.vue';

</script>

<template>
    <div class="box_initial_Home_informati">
        <div class=" information_text_home_initial  ">
            <h1>Tus platos favoritos al
                <br>
                alcance de un <br><span class="text-titleColor">click</span>
            </h1>

            <div class="flex flex-col gap-[.5rem] text-[#151515]">
                <h3>Combinamos las mejores recetas de </h3>
                <h3>Latinoamérica y las traemos directo a tu</h3>
                <h3> mesa.</h3>
            </div>
            <ButtonsGlobal class="btn_informati_initial ">Ordenar ahora</ButtonsGlobal>
        </div>

    </div>
</template>

<style scoped>
.box_initial_Home_informati {
    @apply pt-[9rem] flex bg-cover bg-no-repeat bg-[url("/components/molecules/fondoHome.jpg")];

    h1 {

        @apply text-[2.7rem] font-bold;

    }

    

    @screen laptop {

        @apply pt-[9rem] flex h-[80rem] bg-cover bg-no-repeat bg-[url("/components/molecules/fondoHome.jpg")];

    }

    .information_text_home_initial {

        @apply flex flex-col justify-center p-[3rem] gap-[1rem] w-full text-[1.7rem];

        @screen laptop {

            @apply flex flex-col justify-evenly pl-[10rem];


        }

    }

    .btn_informati_initial {
        @apply text-white text-[1.4rem] w-fit m-auto  h-auto flex justify-center items-center p-[1rem];

        @screen laptop {

            @apply text-white text-[2.4rem] h-[6rem] w-[20rem];


        }

    }
}
</style>
