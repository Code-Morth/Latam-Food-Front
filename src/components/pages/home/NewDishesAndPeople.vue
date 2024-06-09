<script setup lang="ts">
import CardTestimonials from '../../molecules/CardTestimonials.vue';

</script>

<template>

    <section class='NewDisheAndPeople'>

        <div class='new-dishes-and-people-container'>
            <header>
                <h2>
                    Nuevos platos
                </h2>
                <h2>Todas las semanas</h2>
            </header>
            <main>
                <h3>Lo que dice la gente</h3>
                <p>Testimonios</p>
                <div class='cards-container'>
                    <CardTestimonials />
                    <CardTestimonials />
                    <CardTestimonials />
                    <CardTestimonials />
                </div>
            </main>
        </div>

    </section>
</template>

<style scoped>
.NewDisheAndPeople {
    @apply w-full flex justify-center items-center mt-[10rem];

    .new-dishes-and-people-container {
        @apply w-full flex flex-col justify-center items-center;
    }

    header {

        @apply flex flex-col w-full h-auto bg-[#2F695C] justify-center p-[3rem] gap-[1rem];

        @screen laptop{

            @apply flex flex-col w-full h-[20rem] bg-[#2F695C] justify-center pl-[8rem] gap-[1rem];


        }


    }

    h2 {

        @apply text-[3.2rem] text-[#FFFFFF] font-semibold;

        @screen laptop{

            @apply text-[4.8rem] text-[#FFFFFF] font-semibold;


        }

    }

    main {

        @apply flex flex-col justify-center items-center gap-[1rem] mt-[4rem];

        @screen laptop{

            @apply flex flex-col justify-center items-center gap-[1rem] mt-[15rem];


        }

    }

    .cards-container {

        @apply flex flex-col gap-[2rem];

        @screen laptop{

            @apply flex gap-[2rem];

        }

    }

    h3 {

        @apply text-[3.3rem] p-[2rem] font-semibold;

        @screen laptop{

            @apply text-[4.3rem] font-semibold;

        }

    }

    p {

        @apply italic text-[2rem] text-[#626262];

    }

}
</style>
