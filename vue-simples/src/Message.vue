<template>
    <div>
        <h1>{{ msg }}</h1>
        <app-entrada :passaPraOutroComponent="msg" @msgMuda="msg=$event"></app-entrada>
    </div>
</template>

<script>
    import Entrada from './Entrada.vue';
    export default{
        data(){
            return {
                msg: 'Isso é uma mensagem!!!'
            }
        },
        components:{
            'app-entrada': Entrada
        }
    }
</script>