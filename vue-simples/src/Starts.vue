<template>
    <div>

        <button @click="change">Show/Hide</button>
        <p v-if="show">Hello :)</p>
        <p v-else>Ciao :(</p>

        <h3>List</h3>
        <ul>
            <li v-for="pessoa in pessoas">{{ pessoa.nome }}</li>
        </ul>

        <h3>Filters</h3>
        <p>{{ no | low }}</p>

    </div>
</template>

<script>

    export default{
        data(){
            return{
                show: true,
                no: 'FILTRO DOW',
                pessoas: [
                    {nome: 'Caio', idade: 23},
                    {nome: 'Vih', idade: 17},
                    {nome: 'Sil', idade: 25}
                ]
            }
        },
        methods:{
            change(){
                this.show = !this.show;
            }
        },
        filters: {
            low(value){
                return value.toLowerCase();
            }
        }
    }
    
</script>