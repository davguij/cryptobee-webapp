<template>
  <v-card>
    <v-list subheader>
      <v-subheader>Bitcoin</v-subheader>
      <v-list-item v-for="btcAddress in addresses.btc">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{btcAddress}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon>
              <v-icon>clear</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list subheader>
      <v-subheader>Litecoin</v-subheader>
      <v-list-item v-for="ltcAddress in addresses.ltc">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{ltcAddress}}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon>
              <v-icon>clear</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        </v-list-tile>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'address-book',
  data() {
    return {
      msg: 'This is your address book',
      addresses: {
        btc: ['sdflkjdlsfkj', 'sdfkjh'],
        ltc: ['kjasalsdkj'],
      },
    };
  },
};
</script>

<style>

</style>
