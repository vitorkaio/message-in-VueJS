import Vue from 'vue';
import App from './App.vue';
import Message from './Message.vue';
import Starts from './Starts.vue';

Vue.component('app-message', Message);
Vue.component('app-start', Starts);

new Vue({
  el: '#app',
  render: h => h(App)
})
