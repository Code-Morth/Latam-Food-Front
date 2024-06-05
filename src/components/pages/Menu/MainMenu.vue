<script    setup  >

</script>


<template>
    <div class="box_Menu_home">
        <h1>Nuestro Menú</h1>
        <p>Combinamos las mejores recetas de Latinoamérica y las traemos directo a tu mesa.</p>

        <div class="box_menu_all relative">
            <input class="inputs_main " type="text" placeholder="Busque su plato de interés. Ej Sancocho">
            <button class="btns absolute">Buscar</button>
        </div>

        <div class="box_menu_btns">
            <button>Todos</button>
            <button>Argentina</button>
            <button>México</button>
            <button>colombia</button>
            <button>Bebidas</button>
        </div>

    </div>
</template>


<style lang="postcss" scoped>
.box_Menu_home{
    @apply w-full h-auto flex flex-col justify-center items-center gap-[1.5rem];
@screen laptop{
    @apply text-[black]
}
 & h1 {
    @apply text-[black] font-extrabold text-[2rem] ;
    @screen tablet{
        @apply text-[4rem]
    }
 }
 & p {
    @apply text-[#4E4E4E] font-medium text-[1.2rem];
    @screen tablet{
        @apply text-[1.5rem]  ;
    }
 }

 .box_menu_all{
    @apply  w-[70%] flex justify-center  ;
    @screen tablet{
        @apply w-[50%] ;
    }

     .inputs_main{
        @apply  w-[100%] px-[2rem]  py-[1rem] font-semibold text-[1rem]  shadow-[1px_1px_3px_#ECECEC] rounded-md;
        @screen tablet{
            @apply py-[1.5rem]  text-[1.5rem] ;
        }
        
     }

   .btns {
        @apply absolute top-[.5rem] right-[2rem] rounded-lg text-[white] font-semibold text-[1.2rem] bg-[#F7A043] px-[.7rem] py-[.3rem] ;
        @screen tablet{
            @apply text-[1.4rem]  top-[1rem];
        }
        @screen laptop{
            font-size: calc(1.9rem * var(--scale));
            padding-left: calc(2rem * var(--scale));
            padding-right:  calc(2rem * var(--scale));
            padding-top: calc(.7rem * var(--scale));
            padding-bottom:  calc(.7rem * var(--scale));
        }
    }
 }

 



}


</style>