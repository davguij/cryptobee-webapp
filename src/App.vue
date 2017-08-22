<template>
  <div class="site">
    <loading></loading>
    <nav class="navbar">
      <div class="navbar-brand">
        <div class="navbar-item">
          <img src="/static/img/cryptobee-logo.jpg" class="nav-logo" alt="Cryptobee">
        </div>
        <router-link class="navbar-item is-hidden-desktop" to="/">Dashboard</router-link>
        <router-link class="navbar-item is-hidden-desktop" to="/wallets">Wallets</router-link>
        <router-link class="navbar-item is-hidden-desktop" to="/about"><i class="fa fa-question-circle"></i></router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
          <router-link class="navbar-item" to="/">Dashboard</router-link>
          <router-link class="navbar-item" to="/wallets">Wallets</router-link>
          <router-link class="navbar-item" to="/about"><i class="fa fa-question-circle"></i></router-link>
        </div>
      </div>
    </nav>
    <router-view class="main"></router-view>
    <error></error>
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
import Loading from './components/Loading';
import Error from './components/Error';

export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    loading: Loading,
    error: Error,
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
