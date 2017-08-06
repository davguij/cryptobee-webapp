<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="./assets/cryptobee-logo.jpg" class="nav-logo" alt="Bulma: a modern CSS framework based on Flexbox">
        </a>
  
        <div class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
          <router-link class="navbar-item" to="/">Dashboard</router-link>  
          <router-link class="navbar-item" to="/address-book">Address book</router-link>  
          </a>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
  },
  methods: {
  },
};
</script>

<style>
  img.nav-logo {
    max-height: 3.5rem;
    margin-bottom: -0.65rem;
  }
</style>
