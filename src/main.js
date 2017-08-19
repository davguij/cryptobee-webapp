import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';
import 'font-awesome/css/font-awesome.css';

import localforage from 'localforage';
// import 'vue-awesome/icons';
// import Icon from 'vue-awesome/components/Icon';
import Vue2Filters from 'vue2-filters';

// import './assets/fonts/fonts.css';
import App from './App';
import router from './router';

localforage.config({
  name: 'cryptobee',
});

// Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconPack: 'fa',
});
// Vue.component('icon', Icon);
Vue.use(Vue2Filters);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
