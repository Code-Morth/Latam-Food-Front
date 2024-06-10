<script    setup>
import CardsMenuTwo from '../../molecules/CardsMenuTwo.vue';

const porps = defineProps({
  selectMenu : {
    type : String,
    required : true
  }
})



const platos = {
  "todos" : [
{
    id: 1,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20,
    logo : "/components/molecules/pais.png"
  },
  {
    id: 2,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20,
    logo : "/components/molecules/colombia.png"
  },
  {
    id: 3,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20,
    logo : "/components/molecules/mexico.png"
  },
  {
    id: 4,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20,
    logo : "/components/molecules/mexico.png"
  },
  {
    id: 5,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20,
    logo : "/components/molecules/colombia.png"
  }
] ,
"Argentina" : [
{
    id: 1,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Asado",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 10,
    logo : "/components/molecules/pais.png"
  },
  {
    id: 2,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Empanadas",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 10,
    logo : "/components/molecules/pais.png"
  },
  {
    id: 3,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Milanesa napolitana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 10,
    logo : "/components/molecules/pais.png"
  },
  {
    id: 4,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Pizza de Muzzarella",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 5,
    logo : "/components/molecules/pais.png"
  },
  {
    id: 5,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Flan con dulce",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20,
    logo : "/components/molecules/pais.png"
  }
],
"Mexicó" : [
{
    id: 1,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Tacos al Pástor",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 7,
    logo : "/components/molecules/mexico.png"
  },
  {
    id: 2,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Mole",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 7,
    logo : "/components/molecules/mexico.png"
  },
  {
    id: 3,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Enchiladas",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 3,
    logo : "/components/molecules/mexico.png"
  },
  {
    id: 4,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Chiles en Nogada",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 3,
    logo : "/components/molecules/mexico.png"
  },
  {
    id: 5,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Churros",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 3,
    logo : "/components/molecules/mexico.png"
  },
  {
    id: 6,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 3 ,
    logo : "/components/molecules/mexico.png"
  },
  {
    id: 7,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20,
    logo : "/components/molecules/mexico.png"
  },
],
"Colombia" : [
{
    id: 1,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Bandeja Paisana",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 6,
     logo : "/components/molecules/colombia.png"
  },
  {
    id: 2,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Ajiaco Santafereño Paisana",
    precio: "200",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 6,
     logo : "/components/molecules/colombia.png"
  },
  {
    id: 3,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Sancocho ",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 12,
     logo : "/components/molecules/colombia.png"
  },
  {
    id: 4,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Tamal Colombiano ",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 12,
     logo : "/components/molecules/colombia.png"
  },
  {
    id: 5,
    foto: "/components/molecules/fotoMenu.jpg",
    title: "Natilla y Buñuelos",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 20 ,
     logo : "/components/molecules/colombia.png"
  },
 
],
"Bebidas" : [
{
    id: 1,
    foto: "/components/aguas/coca.png",
    title: "Coca cola 500ml",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 6 ,
     logo : "/components/molecules/colombia.png"
  },
  {
    id: 2,
    foto: "/components/aguas/cerveza.png",
    title: "Cerv. Corona 500ml",
    precio: "200",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 6 ,
     logo : "/components/molecules/mexico.png"
  },
  {
    id: 3,
    foto: "/components/aguas/fernet.png",
    title: "Fernet 750ml ",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 12 ,
     logo : "/components/molecules/pais.png"
  },
  {
    id: 4,
    foto: "/components/aguas/mineral.png",
    title: "Agua mineral 500ml  ",
    precio: "20",
    description: "Breve descripción acerca del producto y su contenido.",
    start: 12 ,
     logo : "/components/molecules/colombia.png"
  },
 
 
]
}



 


</script>


<template>
   <div class='box_all_order_good'>
    <section class='title_box_section'>
        <h2>Los más pedidos</h2>
        <div class="barrita_"></div>
    </section>
    <div class="box_card_all_"  >
        <CardsMenuTwo v-for="menu in platos?.todos" :key="menu.id"  :menu="menu"/>
    </div>


    <section class='title_box_section'>
        <h2>Platos de Argentina </h2>
        <div class="barrita_"></div>
    </section>
    <div class="box_card_all_"  >
        <CardsMenuTwo v-for="menu in platos?.Argentina" :key="menu.id"  :menu="menu"/>
    </div>


    <section class='title_box_section'>
        <h2>Platos de Mexicó </h2>
        <div class="barrita_"></div>
    </section>
    <div class="box_card_all_"  >
        <CardsMenuTwo v-for="menu in platos?.Mexicó" :key="menu.id"  :menu="menu"/>
    </div>


    <section class='title_box_section'>
        <h2>Platos de Colombia </h2>
        <div class="barrita_"></div>
    </section>
    <div class="box_card_all_"  >
        <CardsMenuTwo v-for="menu in platos?.Colombia" :key="menu.id"  :menu="menu"/>
    </div>


    <section class='title_box_section'>
        <h2>Bebidas</h2>
        <div class="barrita_"></div>
    </section>
    <div class="box_card_all_"  >
        <CardsMenuTwo v-for="menu in platos?.Bebidas" :key="menu.id"  :menu="menu"/>
    </div>
    
   </div>
</template>

<style scoped>

.box_all_order_good{
    @apply flex flex-col  gap-[2rem] py-[3rem] ;

    .box_card_all_{
        @apply w-full    grid place-items-center gap-[5rem] auto-rows-auto  grid-cols-auto h-auto;
        @screen laptop{
          gap: calc(7rem *var(--scale));
        }   
    }

.title_box_section{
    @apply flex justify-between  items-center py-[5rem] ;


    & h2 {
        @apply text-[black] !font-medium text-[1.6rem];
        @screen tablet{
           @apply text-[2.5rem];
        }
        @screen laptop{

            font-size: calc(3.5rem * var(--scale));

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