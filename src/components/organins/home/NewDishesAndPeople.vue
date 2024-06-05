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
