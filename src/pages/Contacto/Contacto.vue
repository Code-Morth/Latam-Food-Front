<script setup>
import ContainerComponents from '../../components/global/ContainerComponents.vue';
import { ref } from "vue";
import Dropdown from 'primevue/dropdown';

const selectedCity = ref();
const cities = ref([
  { name: 'Google', code: 'NY' },
  { name: 'Linkedin', code: 'RM' },
  { name: 'GitHub', code: 'LDN' },
  { name: 'Facebook', code: 'IST' },
  { name: 'Otro', code: 'PRS' }
]);




</script>

<template>
  <div class="w-full h-auto pt-[4rem]  main-page">

    <ContainerComponents>
      <div class="box_main_cont">

        <div class="box_content_2 ">¨¨
          <div class="flex flex-col gap-[1.5rem]">
            <div class="content_title ">
              <h4>Estemos en</h4>
              <h3>contacto</h3>
            </div>
            <p>Te proporcionamos nuestras vías de contacto en caso de que necesites una atención más personalizada.</p>
            
          </div>

          <form class="forma_box ">
            <input type="text" placeholder="Nombre *">
            <input type="email" placeholder="Email *">
            <input type="email" placeholder="Numero de teléfono *">
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="¿Cómo nos encontraste?" class="w-full py-[1rem]" />
            <button>Enviar</button>
          </form>

          <div>
            <h4>Telefono</h4>
            <div>
              <h5>Celular</h5>
              <h5>03 5432 1234</h5>
            </div>
          </div>

          <div>
            <h4>Email</h4>
            <div>
              <h5>Email</h5>
              <h5>info@marcc.com.au</h5>
            </div>
          </div>
        </div>
        <div class="w-full h-[70rem]">
          <iframe class="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3742.577785511254!2d-98.964443!3d20.276338!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1717649135579!5m2!1ses-419!2spe"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

    </ContainerComponents>
  </div>
</template>


<style lang="postcss" scoped>
.box_main_cont {
  @apply flex flex-col gap-[7rem];

  @screen tablet {
    @apply flex-row;
  }
}

::placeholder {
  @apply text-[#313131] font-bold text-[1.3rem] ;
}


.box_content_2 {
  @apply w-full h-[70rem] bg-[#00000046] flex flex-col gap-[1rem];

  & p {
    @apply text-[#000000] text-[1.5rem] w-[75%];

    @screen laptop {
      font-size: calc(2rem * var(--scale));
    }
  }
}


.forma_box {
  @apply flex flex-col gap-[2.5rem] w-[60%] h-auto;

  & input {
    @apply py-[1.5rem] px-[2rem];
  }
 
}

.p-dropdown:not(.p-disabled).p-focus{
  @apply outline-[#F7A043] outline-[.2rem] ;
}
.p-dropdown-label:hover{
  @apply bg-[red] ;
}

.content_title {
  @apply flex flex-col gap-[2rem];

  & h4 {
    @apply font-bold text-[6rem];

    @screen laptop {
      font-size: calc(6rem * var(--scale));
    }
  }

  & h3 {
    @apply font-bold text-[4rem] text-[#F7A043];

    @screen laptop {
      font-size: calc(4.5rem * var(--scale));
    }
  }
}
</style>