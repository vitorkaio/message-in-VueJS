import Vue from 'vue';
import App from './App.vue';
import Message from './Message.vue';
import Starts from './Starts.vue';
import Contatos from './Contatos.vue';

Vue.component('app-message', Message);
Vue.component('app-start', Starts);
Vue.component('app-contatos', Contatos);

new Vue({
  el: '#app',
  render: h => h(App)
})
