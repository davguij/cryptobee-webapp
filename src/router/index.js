import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AddressBook from '@/components/AddressBook';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/wallets',
      name: 'AddressBook',
      component: AddressBook,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
  ],
});
