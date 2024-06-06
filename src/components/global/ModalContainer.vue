<script>
import Dialog from 'primevue/dialog';

export default {
    props: {
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
    }
}

</script>

<template>
    <Dialog :visible="visible" :onHide="closeModal" :style="{ backgroundColor: bg, width: widthModal }"
        :class="[className, 'laptop:rounded-[2rem] z-50']">
        <slot></slot>
    </Dialog>
</template>