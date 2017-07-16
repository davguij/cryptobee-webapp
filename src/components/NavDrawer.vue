<template>
  <div>
    <v-list class="pa-0">
      <v-list-item>
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="toggleDrawer">
              <icon name="chevron-left"></icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-item>
    </v-list>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-item>
        <v-list-tile router to="/">
          <v-list-tile-action>
            <icon name="home"></icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
      <v-list-item>
        <v-list-tile router to="/address-book">
          <v-list-tile-action>
            <icon name="list"></icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Address book</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'nav-drawer',
  methods: {
    toggleDrawer() {
      this.$emit('toggleNavDrawer');
    },
  },
};
</script>

<style>

</style>
