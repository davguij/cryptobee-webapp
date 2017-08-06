<template>
  <div>
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
    <router-view></router-view>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by
            <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/jgthms/bulma">
              <i class="fa fa-github"></i>
            </a>
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
img.nav-logo {
  max-height: 3.5rem;
  margin-bottom: -0.65rem;
}
</style>
