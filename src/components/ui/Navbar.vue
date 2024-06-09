<script setup lang="ts">
import { ref } from 'vue';
import ContainerGlobal from "../global/ContainerGlobal.vue";
import Login from '../global/modals/Login.vue';

const visible = ref(false);

const closeModal = () => {
  visible.value = false;
  console.log("cerrando", visible.value = false)
};

const openModal = () => {
  visible.value = true;
  console.log("visible.value", visible.value);
};
</script>

<template>
  <ContainerGlobal>
    <div class="box_navbar">
      <div class="logo_navbar"><img src="/LatamFoodLogo.svg" alt=""></div>
      <nav class="container_section">
        <div class="navbar_link">
          <router-link to="/">Inicio</router-link>
          <router-link to="/Menu">Menú</router-link>
          <router-link to="/Contacto">Contacto</router-link>
        </div>
        <div class="navbar_icons_">
          <img @click="openModal" class="navbar_icon" src="/components/ui/userIcon.png" alt="userIcono" />
          <img class="navbar_icon" src="/components/ui/cardIcon.png" alt="cardIcono" />
        </div>
      </nav>
    </div>
  </ContainerGlobal>
  <Login :visible="visible" :closeModal="closeModal" />
</template>

<style scoped>
.box_navbar {
  @apply w-full flex items-center justify-between;

  height: calc(9rem * var(--scale));
}

.container_section {
  @apply flex items-center justify-around;

  @screen tablet {
    @apply w-[70%];
  }

  @screen laptop {
    @apply w-[50%];
  }
}

.logo_navbar {
  @apply font-extrabold;

  @screen laptop {
    font-size: calc(4rem * var(--scale));
  }
}

.navbar_link {
  @apply flex gap-[5rem];

  @screen laptop {
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
    gap: calc(3rem * var(--scale));
  }

  .navbar_icon {
    @screen laptop {
      width: calc(3.4rem * var(--scale));
      height: calc(3.4rem * var(--scale));
    }
  }
}
</style>
