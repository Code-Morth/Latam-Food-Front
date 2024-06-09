<script setup lang="ts">
import ButtonsGlobal from '../../atoms/ButtonsGlobal.vue';


</script>

<template>
    <section class='CountrySection'>
        <div class='country-section-container'>
            <h1>Unimos lo mejor</h1>
            <div class='flags-container'>
                <div class='flag-text-container'>
                    <div class='image-container'>
                        <img src="/MexicoFlag.svg" alt="MexicoFlag">
                    </div>
                    <h2>México</h2>
                    <p>Conocida por sus sabores vibrantes y variados. Sus platillos son emblemáticos y resultan
                        aclamados por el mundo.</p>

                </div>
                <div class='flag-text-container'>
                    <div class='image-container'>
                        <img src="/ArgentinaFlag.svg" alt="ArgentinaFlag">
                    </div>
                    <h2>Argentina</h2>
                    <p>Conocida por sus sabores vibrantes y variados. Sus platillos son emblemáticos y resultan
                        aclamados por el mundo.</p>

                </div>
                <div class='flag-text-container'>
                    <div class='image-container'>
                        <img src="/ColombiaFlag.svg" alt="ColombiaFlag">
                    </div>
                    <h2>Colombia</h2>
                    <p>Conocida por sus sabores vibrantes y variados. Sus platillos son emblemáticos y resultan
                        aclamados por el mundo.</p>

                </div>
            </div>
            <ButtonsGlobal class='saber-mas'>Saber Más</ButtonsGlobal>
        </div>
    </section>
</template>

<style scoped>
.CountrySection {
    @apply flex justify-center items-center w-full mt-[7rem];

    @screen laptop{

        @apply flex justify-center items-center w-full mt-[17rem];


    }

    .country-section-container {
        @apply flex flex-col gap-[4rem] justify-center items-center;
    }

    h1{

        @apply text-[2.7rem] font-bold ;

    }

    .flags-container {
        @apply flex flex-col gap-[3rem] justify-around items-center w-full border-[0.15rem] border-[#2F695C] rounded-[2rem] p-[4rem];

        @screen laptop{

            @apply flex justify-around items-center w-full border-[0.15rem] border-[#2F695C] rounded-[2rem] p-[6rem];


        }

    }

    .flag-text-container {
        @apply flex flex-col justify-center items-center gap-[1.5rem];

        h2 {
            @apply text-[2.4rem] font-semibold;
        }

        p {
            @apply w-[100%] text-center text-[1.6rem];

            @screen laptop{

                @apply w-[45%] text-center text-[1.6rem];


            }

        }
    }

    .saber-mas {

        @apply text-[2.4rem] text-[white];

    }
}
</style>