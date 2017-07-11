<template>
    <div>
        <input type="text" :value="passaPraOutroComponent" @input="muda">
        <p>Mensagem: {{ message }}</p>
    </div>
</template>

<script>
    export default{
        props: ['passaPraOutroComponent'],
        data(){
            return{
                message: ''
            }
        },
        methods:{
            muda(event){
                this.message = event.target.value;
                this.$emit('msgMuda', this.message);
            }
        }
    }
</script>