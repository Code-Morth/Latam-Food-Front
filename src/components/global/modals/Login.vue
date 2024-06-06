<script lang='ts'>
import { ref } from "vue";
import ModalContainer from '../ModalContainer.vue';

const checked = ref(false);

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
};

</script>

<template>
    <ModalContainer :visible='visible' :closeModal='clodeModal'>
        <div class='Login'>
            <div class='login-container'>
                <h3>¡Bienvenido!</h3>
                <h2>Inicia sesión en Latam</h2>
                <div>
                    <label for="">Nombre de usuario</label>
                    <input type="text">
                </div>
                <div>
                    <label for="">Contraseña</label>
                    <input type="text">
                </div>
                <div>
                    <div>
                        <div>
                            <div class="card flex justify-content-center">
                                <Checkbox v-model="checked" :binary="true" />
                            </div>
                        </div>
                    </div>
                    <p>
                        ¿Olvidaste tu contraseña?
                    </p>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </ModalContainer>
</template>

<style lang='postcss' scoped></style>