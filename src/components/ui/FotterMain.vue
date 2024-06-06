<script setup>

</script>

<template>
    <div class='box_footer main-page'>

        <div class='info_footer_link '>

            <div class="box_logo">
                <h2>Latam</h2>
                <h2>Food</h2>
            </div>

            <div class="box_link_redes">
                <div class="red_link">
                    <h3>Menú</h3>
                    <p>Recomendados</p>
                    <p>Nuestros paises</p>
                    <p>Opciones Vegetarianas</p>
                </div>
                <div class="red_link">
                    <h3>Información</h3>
                    <p>Preguntas Frecuentes</p>
                    <p>Nuestros clientes </p>
                    <p>Política de privacidad</p>
                </div>

                <div class="red_link">
                    <h3>Contacto</h3>
                    <div class="flex items-center gap-[1rem]">
                        <img src="/components/footer/local.png" alt="icono">
                        <p>Av. Corrientes 2918 | CA: 2024</p>
                    </div>

                    <div class="flex items-center gap-[1rem]">
                        <img src="/components/footer/ms.png" alt="icono">
                        <p>LatamFood@gmail.com</p>
                    </div>

                    <div class="flex items-center gap-[1rem]">
                        <img src="/components/footer/tlf.png" alt="icono">
                        <p>(234) 4421-2261</p>
                    </div>
                   
                </div>

            </div>

        </div>

        <div class='att-footter_days '>
            <h3>Horario de atención de Martes a Domingo de 9 a 20 hs</h3>
        </div>
    </div>
</template>



<style lang="postcss" scoped>
.box_footer{
    @apply w-full min-h-full bg-[red] flex flex-col mt-[5rem] ;
    @screen tablet {
        @apply  h-[34.4rem];
    }
}

.box_logo{
    
   & h2 {
    @apply text-[3rem] font-logo text-[white] ;
    @screen tablet {
        @apply  text-[4rem];
    }
    @screen laptop {
        font-size: calc(5rem * var(--scale));
    }
   }
}

.box_link_redes{
    @apply text-[#ffffff] flex flex-wrap px-[2rem] gap-x-[7rem] gap-y-[1rem] justify-center  w-[100%]  ;
    @screen tablet {
        @apply flex-nowrap justify-between w-[75%] ;
    }
    @screen laptop{
        @apply w-[60%];
    }
}
.info_footer_link{
    @apply bg-[#2F695C] h-full w-full  flex flex-col items-center py-[1rem];
    @screen tablet {
        @apply flex-row   justify-around;
    }
}

.red_link{
    @apply flex flex-col gap-[1rem]  p-[1rem];
    & h3 {
        @apply text-[2rem] font-semibold ;
        @screen tablet {
            @apply text-[2.5rem] ;
        }
    }
    & p {
        @apply text-[1.2rem] ;
        @screen laptop {
            font-size: calc(1.8rem * var(--scale));
        }
    }
}
img {
    @screen laptop{
        width: calc(2rem * var(--scale));
        height: calc(2rem * var(--scale));
    }
}

.att-footter_days{
    @apply w-full h-[7rem] bg-[#245348] text-white flex justify-center items-center text-[1.3rem] leading-[2.1rem];
    @screen tablet{
        @apply  text-[1.6rem];
    }
}

</style>