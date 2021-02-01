import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store';
import Vuetify from 'vuetify'
Vue.use(Vuetify);
new Vue({
  el: '#app',
  store: store,
  Vuetify,
  render: h => h(App)
})