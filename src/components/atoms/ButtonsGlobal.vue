<script setup></script>

<template>
    <button class="ButtonsGlobal" v-bind="props">
      <slot></slot>
    </button>
  </template>

  <style>

.ButtonsGlobal{

  @apply  h-[5rem] px-[2rem] bg-titleColor rounded-2xl duration-300 ease-in-out hover:bg-hoverTitleColor ;

  @screen laptop{

    height: calc(5rem *calc(--scale));
    padding-left: calc(2rem *calc(--scale));
    padding-rigth: calc(2rem *calc(--scale));

  }

}

</style>
  
  
  
  