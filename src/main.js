import Vue from 'vue';
import Vuetify from 'vuetify';
import localforage from 'localforage';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

import './assets/fonts/fonts.css';
import App from './App';
import router from './router';

localforage.config({
  name: 'cryptobee',
});

// Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
