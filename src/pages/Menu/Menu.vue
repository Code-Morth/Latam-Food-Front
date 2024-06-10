<script setup>
import { ref } from 'vue'; 
import ContainerComponents from "../../components/global/ContainerComponents.vue";
import AllSecctionOrder from "../../components/organins/menu/AllSecctionOrder.vue";
import PlatosNew from "../../components/organins/menu/PlatosNew.vue";
import MainMenu from "../../components/pages/Menu/MainMenu.vue";


const menuSlc = ref("todos")
const selectMenu = (data) => {
  menuSlc.value = data;
}

</script>

<template>
  <div class="w-full h-auto main-page">
    <ContainerComponents>
      <MainMenu :selectMenu="selectMenu" :menuSlc="menuSlc" />
      <AllSecctionOrder :menuSlc="menuSlc"/>
     <PlatosNew/>
    </ContainerComponents>
  </div>
</template>
