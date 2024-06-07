<script setup lang="ts">
import { defineProps } from 'vue';
import ModalContainer from '../ModalContainer.vue';

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
</script>

<template>
  <ModalContainer 
    :visible="props.visible" 
    :closeModal="props.closeModal" 
    :widthModal="props.widthModal" 
    :bg="props.bg" 
    :className="props.className"
    
  >
    <div class="login">
      <div class="login-container">
        <h3 >¡Bienvenido!</h3>
        <h2>Inicia sesión en Latam</h2>
        <div>
          <label for="">Nombre de usuario</label>
          <input type="text" />
        </div>
        <div>
          <label for="">Contraseña</label>
          <input type="password" />
        </div>
        <div>
          <p>
            <input type="checkbox" /> Recordarme
          </p>
          <p>¿Olvidaste tu contraseña?</p>
        </div>
        <button @click="props.closeModal">Cerrar</button>
      </div>
    </div>
  </ModalContainer>
</template>

<style scoped>

</style>
