<script setup lang='ts'>
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';


</script>

<template>
    <div class='FaqSection'>
        <div class='faq-section-container'>
            <h1>¿Alguna duda?</h1>
            <h2>Estamos para ayudarte</h2>
            <div class='accordion-container'>
                <div class="card">
                    <Accordion :activeIndex="null">
                        <AccordionTab header="¿Cuándo recibiré mi pedido?">
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>
                <div class="card">
                    <Accordion :activeIndex="null">
                        <AccordionTab header="¿Puedo elegir una hora específica de entrega?">
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>
                <div class="card">
                    <Accordion :activeIndex="null">
                        <AccordionTab header="¿Qué debo hacer si mi pedido llega golpeado /en mal estado?">
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>
                <div class="card">
                    <Accordion :activeIndex="null">
                        <AccordionTab header="¿Hay pedido mínimo?">
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                qui officia deserunt mollit anim id est laborum.
                            </p>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='postcss' scoped>
.FaqSection {

    @apply mt-[2rem] w-full;

}

.faq-section-container {

    @apply flex flex-col gap-[2rem] justify-center items-center w-full;

}

h1{

    @apply text-[2.5rem] font-bold ;

}

h2{

    @apply text-[2rem]  ;


}

.accordion-container {

    @apply flex flex-col gap-[2rem] w-full;

}

.p-accordion {

    @apply text-[1.5rem] font-semibold w-full;

    @screen laptop{

        @apply text-[2.4rem] font-semibold w-full;

    }

}


/*.p-accordion-header{

    @apply bg-[red] ;

}*/

</style>