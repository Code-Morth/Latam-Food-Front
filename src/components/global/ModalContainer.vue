<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  visible: {
    type: Boolean,
    required: true
  },
  closeModal: {
    type: Function,
    required: true
  },
  widthModal: {
    type: String,
    default: "w-[auto] laptop:w-[auto]"
  },
  bg: {
    type: String,
    default: "bg-[#F0EFEB]"
  },
  className: {
    type: String,
    default: ""
  }
});
</script>

<template>
  <div v-if="props.visible" class="modal-container main-page" @click="closeOnOutsideClick">
    <div class="modal-content" @click.stop>
        <div class="w-full h-auto flex justify-end text-[2rem] font-bold">
            <button class="close-icon" @click="props.closeModal">×</button>
        </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
    @apply  fixed top-0 bottom-0 left-0 right-0 backdrop-blur-[.9rem] flex justify-center items-center;
}
.modal-content {
    @apply bg-[white]  p-[1rem] rounded-[.8rem] ;

}

</style>

<script lang="ts">
export default {
  props: ['visible', 'closeModal'],
  methods: {
    closeOnOutsideClick(event) {
      if (event.target === this.$el) {
        this.closeModal();
      }
    }
  }
}
</script>
