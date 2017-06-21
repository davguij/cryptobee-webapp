import Vue from 'vue';
import Vuetify from 'vuetify';
import localforage from 'localforage';

import App from './App';
import router from './router';

localforage.config({
  name: 'cryptobee',
});

// Vue.config.productionTip = false;
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
