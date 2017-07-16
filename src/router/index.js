import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AddressBook from '@/components/AddressBook';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/address-book',
      name: 'AddressBook',
      component: AddressBook,
    },
  ],
});
