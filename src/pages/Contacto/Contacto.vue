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
          <div class="main_____">
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
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="¿Cómo nos encontraste?"
              class="w-full py-[1rem]" />
            <button>Enviar</button>
          </form>


          <div class="content_main_box_box ">

            <div class="flex items-center gap-[1rem]">
              <img src="/components/contact/fono.png" alt="fono">
              <div class="content_iconos_">
                <h5>Celular</h5>
                <h6>03 5432 1234</h6>
              </div>
            </div>


            <div class="flex items-center gap-[1rem]">
              <img src="/components/contact/email.png" alt="fono">
              <div class="content_iconos_">
                <h5>Email</h5>
                <h6>info@marcc.com.au</h6>
              </div>
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
.main_____ {
  @apply flex flex-col gap-[3rem];

  @screen tablet {
    @apply gap-[2rem];
  }

  @screen laptop {
    @apply gap-[2rem];
  }
}

.content_main_box_box {
  @apply flex gap-[3rem];

  @screen tablet {
    @apply gap-[10rem];
  }

  @screen laptop {
    gap: calc(15rem * var(--scale))
  }
}

.content_iconos_ {
  @apply flex flex-col gap-[.2rem];

  & h5 {
    @apply font-bold text-[1.5rem];
  }

  & h6 {
    @apply text-[#F08A1D] font-bold text-[1.4rem];
  }


}

img {
  @apply w-[4rem] h-[3.5rem];
}



.box_main_cont {
  @apply flex flex-col gap-[7rem];

  @screen laptop {
    @apply flex-row;
  }
}

::placeholder {
  @apply text-[#313131] font-bold text-[1.3rem];
}


.box_content_2 {
  @apply w-full h-[70rem] flex flex-col gap-[2rem];

  & p {
    @apply text-[#000000] text-[1.5rem] w-[75%];

    @screen laptop {
      font-size: calc(2rem * var(--scale));
    }
  }
}


.forma_box {
  @apply flex flex-col gap-[2.5rem] w-[90%] h-auto my-[2rem];

  @screen tablet {
    @apply w-[90%];
  }

  @screen laptop {
    @apply w-[73%];
  }

  & input {
    @apply py-[1.5rem] px-[2rem] border-[#E0E0E0] border;

  }

  input:focus {
    @apply border-[#fda74b] outline-none;
  }

  & button {
    @apply w-full py-[1rem] bg-[#F7A043] rounded-md text-[white] font-semibold text-[2rem] duration-300 ease-in-out hover:bg-[#ffae58e8];

    @screen laptop {
      font-size: calc(2.5rem * var(--scale));
    }
  }

}

.p-dropdown:not(.p-disabled).p-focus {
  @apply outline-[#F7A043] outline-[.2rem];
}

.p-dropdown {
  @apply rounded-[.3rem] border-[#E0E0E0] border-[.1rem];
}

.content_title {
  @apply flex flex-col;

  @screen laptop {
    @apply gap-[2.4rem];
  }

  & h4 {
    @apply font-bold text-[6rem];

    @screen laptop {
      font-size: calc(6rem * var(--scale));
    }
  }

  & h3 {
    @apply font-bold text-[4rem] text-[#F7A043];

    @screen tablet {
      @apply text-[6rem];
    }

    @screen laptop {
      font-size: calc(6rem * var(--scale));
    }
  }
}
</style>