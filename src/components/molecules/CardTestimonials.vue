<script setup lang="ts">

</script>

<template>
    <div class='CardTestimonials'>
        <div class='card-testimonials-container'>
            <div class='perfil-image-container'>
                <img src="/PerfilImageCardTestimonials.svg" width='1000' height='1000' alt="">
            </div>
            <h1>Carlos M.</h1>
            <div class='stars-container'>
                <div class='star-image-container'>
                    <img src="/StarCardTestimonials.svg" width='1000' height='1000' alt="">
                </div>
                <div class='star-image-container'>
                    <img src="/StarCardTestimonials.svg" width='1000' height='1000' alt="">
                </div>
                <div class='star-image-container'>
                    <img src="/StarCardTestimonials.svg" width='1000' height='1000' alt="">
                </div>
                <div class='star-image-container'>
                    <img src="/StarCardTestimonials.svg" width='1000' height='1000' alt="">
                </div>
                <div class='star-image-container'>
                    <img src="/StarCardTestimonials.svg" width='1000' height='1000' alt="">
                </div>
            </div>
            <p>"Me encanta esta plataforma! Siempre encuentro mis platillos favoritos y la entrega es rapidísima. Los
                tacos que pedí ayer estaban increíbles. ¡Muy recomendada!"</p>
        </div>

    </div>
</template>

<style scoped>
.CardTestimonials {

    @apply w-full flex justify-center items-center;

    .card-testimonials-container {

        @apply w-[27rem] h-auto flex flex-col justify-between items-center gap-[1rem] p-[1.5rem] border-[0.2rem] border-[#2F695C] rounded-[1rem];

    }

    .perfil-image-container {

        @apply w-[9rem] h-auto;

    }

    .stars-container {

        @apply flex;

    }

    .star-image-container {

        @apply w-[2rem] h-auto;

    }

    h1 {

        @apply text-[#2F695C] text-[2rem];


        line-height: 3rem;
    }

    p {

        @apply text-[1.6rem] w-fit text-center font-normal;

    }


}
</style>