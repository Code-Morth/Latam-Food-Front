<script setup lang="ts">
import { ref } from 'vue';
import ContainerGlobal from "../global/ContainerGlobal.vue";
import Login from '../global/modals/Login.vue';
import Button from 'primevue/button';
import Sidebar from 'primevue/sidebar';
import ButtonsGlobal from '../atoms/ButtonsGlobal.vue';


const visibleRight = ref(false);
const visibleTop = ref(false);


const visible = ref(false);

const closeModal = () => {
  visible.value = false;
};

const openModal = () => {
  visible.value = true;
};
</script>

<template>
  <ContainerGlobal>
    <div class="box_navbar-laptop">
      <div class="logo_navbar">
        <p class='font-logo'>Latam</p>
        <p class='font-logo'>Food</p>
      </div>
      <nav class="container_section">
        <div class="navbar_link">
          <router-link to="/">Inicio</router-link>
          <router-link to="/Menu">Menú</router-link>
          <router-link to="/Contacto">Contacto</router-link>
        </div>
        <div class="navbar_icons_">
          <img @click="openModal" class="navbar_icon" src="/components/ui/userIcon.png" alt="userIcono" />
          <img class="navbar_icon" @click="visibleRight = true" src="/components/ui/cardIcon.png" alt="cardIcono" />
        </div>
      </nav>
    </div>
    <div class="navbar-header-movile">
      <div class=" w-full flex justify-between  ">
        <!-- <div class="navbar_icons_"> -->
        <img @click="openModal" class="navbar_icon" src="/components/ui/userIcon.png" alt="userIcono" />
        <img class="navbar_icon" @click="visibleRight = true" src="/components/ui/cardIcon.png" alt="cardIcono" />
        <!-- </div> -->
        <Button icon="pi-arrow-down" @click="visibleTop = true">
          <img src="/hamburgermenu.svg" alt="">
        </Button>
      </div>
      <Sidebar :showCloseIcon='false' v-model:visible="visibleTop" position="top" style="height: auto">
        <template #header>
          <div class="flex flex-col w-full justify-center align-items-center gap-2 mb-[0.5rem]">
            <h1 class='font-logo'>Latam Food</h1>
            <div class="box_navbar-movile">
              <div class="navbar_link">
                <router-link to="/">Inicio</router-link>
                <router-link to="/Menu">Menú</router-link>
                <router-link to="/Contacto">Contacto</router-link>
              </div>
            </div>
          </div>
        </template>
      </Sidebar>
    </div>
    <Sidebar :modal='false' v-model:visible="visibleRight" :showCloseIcon='false' position="right">
      <template #header>
        <div class='buy-car-container'>
          <div class='top-buy-car'>
            <h1>Tu carro esta vacio</h1>
            <ButtonsGlobal class='button-seguir-comprando'>
              Seguir comprando
            </ButtonsGlobal>
          </div>
          <div class='bot-buy-car'>
            <h1>
              ¿Tienes una cuenta?
            </h1>
            <p><span>Inicia sesión</span> para poder agilizar tu compra</p>
          </div>
        </div>
      </template>
    </Sidebar>

  </ContainerGlobal>
  <Login :visible="visible" :closeModal="closeModal" />
</template>

<style scoped>
.box_navbar-laptop {
  @apply hidden;


  @screen laptop {

    @apply w-full flex items-center justify-between visible;
    height: calc(9rem * var(--scale));


  }

}

.box_navbar-movile {
  @apply w-full flex items-center justify-end visible gap-[2rem];


  @screen laptop {

    @apply hidden;
    height: calc(9rem * var(--scale));


  }

}

.font-logo {

  @apply text-[#F78E1E] text-[4rem] text-center;

  @screen laptop{

    @apply h-[4rem];

    font-size: calc(3.5rem * var(--scale));

  }

}

.container_section {
  @apply flex w-full items-center justify-end gap-[3rem];

  @screen tablet {
    @apply w-[70%];
  }

  @screen laptop {
    @apply w-[50%];
  }
}

.logo_navbar {
  @apply font-extrabold w-full h-full  flex justify-center items-center py-[1rem];

  @screen laptop {

    @apply flex-col w-fit h-fit gap-0 justify-start items-center;

    font-size: calc(3.5rem * var(--scale));
    padding-bottom: calc(3rem * var(--scale));
  }
}

.logo-image-navbar {

  @apply w-[70%] h-auto;

}

.navbar_link {
  @apply flex w-full justify-between items-center px-[2rem] text-[1.5rem] gap-[1.5rem] font-semibold;

  @screen laptop {

    @apply flex-row;

    gap: calc(5rem * var(--scale));
  }

  & a {
    @screen laptop {
      @apply font-semibold;
      font-size: calc(2rem * var(--scale));
      line-height: calc(2.4rem * var(--scale));
    }
  }
}

.navbar_icons_ {
  @apply flex gap-[3rem];

  @screen laptop {

    @apply flex-row;

    gap: calc(3rem * var(--scale));
  }

  .navbar_icon {
    @screen laptop {
      width: calc(3.4rem * var(--scale));
      height: calc(3.4rem * var(--scale));
    }
  }
}

.navbar-header-movile {

  @apply flex justify-end p-[0.5rem] bg-[#ff000000];

  @screen laptop {

    @apply hidden;

  }

}

.buy-car-container {

  @apply flex flex-col justify-center gap-[2.5rem] items-center text-[black] h-full w-full mt-[3rem];

  @screen laptop {

    @apply min-w-[30rem];

  }

}

.top-buy-car {

  @apply flex flex-col justify-center items-center gap-[2rem] pb-[3rem] border-b-[#2F695C] border-b-[0.1rem];

  h1 {

    @apply text-[2rem] font-semibold text-center;

  }

}

.button-seguir-comprando {

  @apply text-[white] w-fit p-[1rem] h-auto text-[1.4rem] font-bold;

}

.bot-buy-car {

  @apply flex flex-col justify-center items-center gap-[2rem];

  h1 {

    @apply text-[1.8rem] font-medium text-center;

  }

  p {

    @apply text-[1.4rem] text-center;

  }

  span {

    @apply font-bold;

  }

}

.p-sidebar {

  @apply bg-[red];

}
</style>
