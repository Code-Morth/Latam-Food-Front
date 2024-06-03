<script setup>
import ContainerComponents from "../../components/global/ContainerComponents.vue";
import InformativeHome from "../../components/organins/home/InformativeHome.vue";
import OurRecommendations from "../../components/organins/home/OurRecommendations.vue";
import CountrySection from '../../components/pages/home/CountrySection.vue';

</script>

<template>
  <div class="w-full h-auto main-page">
    <InformativeHome />
    <ContainerComponents>
      <OurRecommendations />
      <CountrySection />
    </ContainerComponents>
  </div>
</template>
