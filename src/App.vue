<template>
  <v-app id="app">
      <v-navigation-drawer persistent light v-model="drawer">
    <nav-drawer v-on:toggleNavDrawer="toggleDrawer"></nav-drawer>
      </v-navigation-drawer>
    <v-toolbar fixed class="indigo darken-4" light>
      <v-btn icon @click.native.stop="drawer = !drawer">
        <icon name="navicon" color="#fff"></icon>
      </v-btn>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import NavDrawer from './components/NavDrawer';

export default {
  name: 'app',
  data() {
    return {
      drawer: true,
    };
  },
  components: {
    'nav-drawer': NavDrawer,
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style src="vuetify/dist/vuetify.min.css"></style>
