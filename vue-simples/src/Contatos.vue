<template>
  
  <div>

    <label for="nome">Nome: </label>
    <input type="text" required v-model="nome">
    <br>

    <label for="email">Email: </label>
    <input type="email" required="email" v-model="email">
    <br>

    <label for="telefone">Telefone: </label>
    <input type="text" required="tel" v-model="telefone">
    <br>
    <br>

    <button  v-if="nome && email && telefone" @click="save">Salvar</button>
    <button  v-else @click="save" disabled>Salvar</button>

    <br>
    <br>
     <table border="1">
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
        </tr>
        <tr v-for="cont in contatos">
            <td>{{ cont.nome }}</td>
            <td>{{ cont.email }}</td>
            <td>{{ cont.telefone }}</td>
        </tr>
    </table>

  </div>

</template>

<script>
export default {

    data(){
        return{
            nome: '',
            email: '',
            telefone: '',
            contatos: [
            ]

        }           
    },
    methods:{
        save(){
            let c = {nome: this.nome, email: this.email, telefone: this.telefone};
            this.contatos.push(c);
            this.nome = '';
            this.email = '';
            this.telefone = '';
        }
    }

}
</script>

<style scoped>

</style>

