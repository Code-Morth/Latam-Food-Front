<script setup>
import ContainerComponents from "../../components/global/ContainerComponents.vue";
import FaqSection from '../../components/pages/home/FaqSection.vue';
import InformativeHome from '../../components/pages/home/InformativeHome.vue';
import NewDishesAndPeople from '../../components/pages/home/NewDishesAndPeople.vue';
import OurRecommendations from '../../components/pages/home/OurRecommendations.vue';
import CountrySection from '../../components/pages/home/CountrySection.vue';

</script>

<template>
  <div class="w-full h-auto main-page">
    <InformativeHome />
    <ContainerComponents>
      <OurRecommendations />
      <CountrySection />
      <NewDishesAndPeople />
      <FaqSection />
    </ContainerComponents>
  </div>
</template>
