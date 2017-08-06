<template>
  <div class="site">
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-item">
          <img src="./assets/cryptobee-logo.jpg" class="nav-logo" alt="Cryptobee">
        </div>
        <router-link class="navbar-item is-hidden-desktop" to="/">Dashboard</router-link>
        <router-link class="navbar-item is-hidden-desktop" to="/address-book">Address book</router-link>
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
    <router-view class="main"></router-view>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>cryptobee</strong> by David Guijarro
          </p>
        </div>
      </div>
    </footer>  
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
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main {
  flex: 1;
}

img.nav-logo {
  max-height: 3.5rem;
  margin-bottom: -0.65rem;
}
</style>
