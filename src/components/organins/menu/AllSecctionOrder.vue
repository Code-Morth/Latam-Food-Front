<script    setup>
import CardsMenuTwo from '../../molecules/CardsMenuTwo.vue';


const platos = [
  {
    id: 1,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20
  },
  {
    id: 2,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20
  },
  {
    id: 3,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20
  },
  {
    id: 4,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20
  },
  {
    id: 5,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20
  },
  {
    id: 6,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20
  },
  {
    id: 7,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20
  },
];

</script>


<template>
   <div class='box_all_order_good'>
    <section class='title_box_section'>
        <h2>Los más pedidos</h2>
        <div class="barrita_"></div>
    </section>
    <div class="box_card_all_"  >
        <CardsMenuTwo v-for="menu in platos" :key="menu.id"  :menu="menu"/>
    </div>

    
   </div>
</template>

<style lang="postcss" scoped>

.box_all_order_good{
    @apply flex flex-col  gap-[2rem] py-[3rem] ;

    .box_card_all_{
        @apply w-full    grid place-items-center gap-[5rem] auto-rows-auto  grid-cols-auto h-auto;
        @screen laptop{
          gap: calc(7rem *var(--scale));
        }   
    }

.title_box_section{
    @apply flex justify-between  items-center ;


    & h2 {
        @apply text-[black] !font-medium text-[1.6rem];
        @screen tablet{
           @apply text-[3rem];
        }
        @screen laptop{
            @apply text-[4.5rem];
         }
    }

    .barrita_{
        @apply w-[60%] bg-[#2D8571] h-[.2rem] rounded-2xl ;
        @screen tablet{
            @apply w-[70%] ;
        }
        
    }
    
}





}

</style>