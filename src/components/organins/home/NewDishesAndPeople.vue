<script setup lang="ts">
import ColorPicker from 'primevue/colorpicker';
import CardTestimonials from '../../molecules/CardTestimonials.vue';

import { ref } from "vue";

const color = ref();

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
                <div class="card flex justify-content-center">
                    <ColorPicker v-model="color" />
                </div>
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
