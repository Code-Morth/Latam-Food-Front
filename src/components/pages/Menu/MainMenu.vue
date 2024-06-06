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
    @apply py-[4rem] w-full h-auto flex flex-col justify-center items-center gap-[1.5rem];
@screen laptop{
    @apply text-[black] ;
    gap: calc(2rem * var(--scale));
    padding-top: calc(6rem * var(--scale));
    padding-bottom: calc(6rem * var(--scale));
}

::placeholder{
    @apply text-[#CED4D9]; 
}
 & h1 {
    @apply text-[black] font-extrabold text-[3rem] ;
    @screen tablet{
        @apply text-[4rem];
    }
    @screen laptop{
        font-size: calc(8rem * var(--scale));
    }
 }
 & p {
    @apply text-[#C4C4C4] font-medium text-[1.2rem];
    @screen tablet{
        @apply text-[1.5rem]  ;
    }
    @screen laptop{
        font-size: calc(2.5rem * var(--scale));
    }
 }

 .box_menu_all{
    @apply  w-[95%] flex justify-center  ;
    @screen tablet{
        @apply w-[57%] ;
    }

     .inputs_main{
        @apply  w-[100%] px-[2rem] outline-none text-[#C4C4C4]  py-[1rem] font-semibold text-[1rem]  shadow-[0px_0px_10px_#ECECEC] rounded-lg;
        @screen tablet{
            @apply py-[1.5rem]  text-[1.5rem] ;
        }
        @screen laptop{
            padding-top: calc(2rem * var(--scale));
            padding-bottom:  calc(2rem * var(--scale));
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

 

 .box_menu_btns{
    @apply flex  w-[95%] justify-around py-[1rem];
    @screen tablet{
        @apply   w-[60%];
    }
   
    & button {
        @apply border-2 border-[#F78E1E] rounded-lg px-[.7rem] py-[.4rem] text-[#F78E1E] text-[1.2rem] font-bold;
        @screen tablet{
            @apply  text-[1.8rem];
        }
        @screen laptop{
            font-size: calc(2.2rem * var(--scale));
            padding-left: calc(2.2rem * var(--scale));
            padding-right: calc(2.2rem * var(--scale))
        }
    }
 }


}


</style>