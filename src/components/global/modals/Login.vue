<script setup lang="ts">
import { defineProps } from 'vue';
import ModalContainer from '../ModalContainer.vue';
import apisRequest from '../../../utils/apisRequest'
import axios from 'axios';
import getConfig from '../../../utils/getConfig';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
  closeModal: {
    type: Function,
    required: true,
  },
  widthModal: {
    type: String,
    default: "w-[auto] laptop:w-[auto]",
  },
  bg: {
    type: String,
    default: "bg-[#F0EFEB]",
  },
  className: {
    type: String,
    default: "",
  },
});


const url = apisRequest;

const createUser = (data: any) => {

  data.preventDefault()

  const newData = Object.fromEntries(new FormData(data.target))

  axios.post(`${url}login`, newData, getConfig()).then((res) => console.log(res)).catch((error) => console.log(error)).finally(() => props.closeModal())

}




</script>

<template>
  <div class='Login'>
    <ModalContainer :visible="props.visible" :closeModal="props.closeModal" :widthModal="props.widthModal"
      :bg="props.bg" :className="props.className" class='modal-container-login'>
      <form @submit='createUser' class="login-container">
        <h3>¡Bienvenido!</h3>
        <h2>Inicia sesión en Latam</h2>
        <div class='label-input-container'>
          <label for="email">Nombre de usuario o email</label>
          <input name='email' placeholder='Ingresa tu nombre de usuario' type="text" />
        </div>
        <div class='label-input-container'>
          <label for="password">Contraseña</label>
          <input name='password' placeholder='Ingresa tu contraseña' type="password" />
        </div>
        <div class='check-password-container'>
          <div class='check-container'>
            <input class='check' type="checkbox" />
            <p class='recordarme'>
              Recordarme
            </p>
          </div>
          <p class='check-password-text-rigth'>¿Olvidaste tu contraseña?</p>
        </div>
        <!-- <button @click="props.closeModal">Cerrar</button> -->
        <button class='login-general-button'>Iniciar Sesión</button>
        <button class='login-google-button'> <img src='/SocialIconGoogle.svg'></img> Ingresar con Google</button>
        <p class='no-tienes-cuenta'>No tienes una cuenta <span class='no-tienes-cuenta-span'>Registrate</span></p>
      </form>
    </ModalContainer>
  </div>
</template>

<style scoped>
.Login {

  @apply flex justify-center items-center;

}

.login-container {

  @apply flex flex-col gap-[1rem] justify-center items-center p-[2rem];

  @screen laptop {

    @apply flex flex-col justify-center items-center;

    gap: calc(2rem *var(--scale));
    padding: calc(2rem *var(--scale));

  }

}

h3 {

  @apply text-[2rem];

}

h2 {

  @apply text-[#2F695C] font-bold text-[2.6rem];

  @screen laptop {

    @apply text-[#2F695C] font-bold ;

    font-size: calc(3.6rem *var(--scale));


  }

}

.label-input-container {

  @apply flex flex-col w-full gap-[1rem];

}

label,
input {

  @apply w-full text-[1.6rem];

}

input {

  @apply border-[0.1rem] border-[black] px-[1rem] p-[0.7rem] rounded-[0.4rem];

  @screen laptop {

    @apply border-[0.1rem] border-[black] p-[1rem] rounded-[0.4rem];


  }

}

.check-password-container {

  @apply flex w-full;

}

.check-container {

  @apply flex justify-start w-full gap-[1rem] items-center;

}

.check {

  @apply w-auto;

}

.login-general-button {

  @apply w-full bg-[#F7A043] border-[0.1rem] p-[0.6rem] rounded-[0.5rem] text-[1.4rem] text-[white];

  @screen laptop {

    @apply w-full bg-[#F7A043] border-[0.1rem] rounded-[0.5rem] text-[1.6rem] text-[white];

    padding:calc(0.9rem *var(--scale));


  }

}

.login-google-button {

  @apply p-[0.6rem] border-[#D0D5DD] border-[0.1rem] flex w-full justify-center rounded-[0.5rem] text-[1.4rem] gap-[1rem];

  @screen laptop {

    @apply p-[0.9rem] border-[#D0D5DD] border-[0.1rem] flex w-full justify-center rounded-[0.5rem];

    font-size:calc(1.6rem *var(--scale));
    gap:calc(1rem *var(--scale));

  }

}


.check-password-text-rigth {

  @apply w-full text-right text-[1.3rem];

}

.no-tienes-cuenta {

  @apply text-[#757575] flex gap-[1rem] text-[1.6rem];

}

.no-tienes-cuenta-span {

  @apply font-bold text-[#151515];

}

.recordarme {

  @apply text-[1.3rem];

}
</style>
