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

        <br>
        <br>

        <label for="texto">Texto: </label>
        <input type="text" v-model="texto">
        <button @click="imprimeTexto">Print</button>
        <p>{{ texto }}</p>

        <br>
        <p>CheckBox</p>
        <input type="checkbox" id="checkbox" v-model="check">
        <label for="checkbox"> {{ check }}</label>

        <br>
        <p>Múltiplos CheckBox</p>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <p>Checked names: {{ checkedNames }}</p>

        <br>

        <p>Radios</p>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <p>Picked: {{ picked }}</p>

        <br>
        
        <p>Select</p>
        <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>

        <br>
        <br>

        <p>enable/disable button</p>
        <input type="text" v-model="msg">
        <button  v-if="msg">Active</button>
        <button  v-else disabled>Active</button>

    </div>
</template>

<script>

    export default{
        data(){
            return{
                msg: 'www',
                selected: '',
                picked: '',
                checkedNames: [],
                show: true,
                check: true,
                no: 'FILTRO DOW',
                pessoas: [
                    {nome: 'Caio', idade: 23},
                    {nome: 'Vih', idade: 17},
                    {nome: 'Sil', idade: 25}
                ],
                texto: ''
            }
        },
        methods:{
            change(){
                this.show = !this.show;
            },
            imprimeTexto(){
                console.log('Texto é: ' + this.texto + 'cheks: ' + this.checkedNames);
                console.log('Radio: ' + this.picked);
            }
        },
        filters: {
            low(value){
                return value.toLowerCase();
            }
        }
    }
    
</script>