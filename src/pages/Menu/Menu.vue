<script setup>
import ContainerComponents from "../../components/global/ContainerComponents.vue";
import AllSecctionOrder from "../../components/organins/menu/AllSecctionOrder.vue";
import PlatosNew from "../../components/organins/menu/PlatosNew.vue";
import MainMenu from "../../components/pages/Menu/MainMenu.vue";


</script>

<template>
  <div class="w-full h-auto main-page">
    <ContainerComponents>
      <MainMenu />
      <AllSecctionOrder />
     <PlatosNew/>
    </ContainerComponents>
  </div>
</template>
