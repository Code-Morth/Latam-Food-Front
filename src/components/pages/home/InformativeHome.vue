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

    @screen laptop {

        @apply bg-cover bg-no-repeat bg-[url("/components/molecules/fondoHome.jpg")];

        padding-top: calc(9rem * var(--scale));
        height: calc(80rem * var(--scale));

    }

    h1 {

        @apply text-[2rem] font-bold;

        @screen laptop{

            @apply  font-bold;

            font-size: calc(4.7rem *var(--scale));

        }

    }

    h3{

        @apply text-[1.7rem] font-medium ;

    }
    



    .information_text_home_initial {

        @apply flex flex-col justify-center p-[3rem] gap-[1rem] w-full text-[1.7rem];

        @screen laptop {

            @apply flex flex-col justify-start;

            gap: calc(4rem * var(--scale));
            padding-rigth: calc(10rem *var(--scale));
            padding-left: calc(10rem *var(--scale));

        }

    }

    .btn_informati_initial {
        @apply text-white text-[1.4rem] w-fit m-auto  h-auto flex justify-center items-center px-[2.5rem] p-[1rem];

        @screen laptop {

            @apply text-white font-semibold m-0 w-fit;

            font-size: calc(2.4rem * var(--scale));
            height: calc(6rem * var(--scale));


        }

    }
}
</style>
