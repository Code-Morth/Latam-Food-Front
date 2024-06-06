<script setup>

</script>


<template>
    <div class=" box_main_new_msg">
        <div class=" info_mgs_new">
        <h2>Nuevos platos</h2>
        <h2>Todas las semanas</h2>
    </div>

    </div>

    

</template>

<style lang="postcss" scoped>


.box_main_new_msg{
    @apply w-full h-auto  py-[18rem]  ; 


    .info_mgs_new{
        @apply w-full h-[20rem] bg-[#2F695C] pl-[4rem] flex flex-col gap-[1rem] justify-center ;
        & h2 {
            @apply text-[white] font-semibold text-[3rem];
            @screen laptop {
                font-size: calc(4.8rem * var(--scale));
            }
        }
    }
}


</style>