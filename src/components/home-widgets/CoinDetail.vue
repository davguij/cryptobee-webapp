<template>
  <v-card>
    <v-card-title>
      {{coin.toUpperCase()}}
    </v-card-title>
    <v-card-text>
      <p>
        <strong>Total balance:</strong>
        <br>{{balance}} {{coin.toUpperCase()}}
        <br>{{balance / rate}}</p>
      <p>
        <strong>Exchange rate:</strong>
        <br>{{rate}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import localforage from 'localforage';

export default {
  name: 'coin-detail',
  props: ['coin'],
  data() {
    return {
      balance: 0,
      rate: 0,
    };
  },
  created() {
    localforage.getItem(`addresses_${this.coin}`).then((addresses) => {
      if (addresses !== null) {
        console.log(addresses);
      }
    });
  },
};
</script>

<style>

</style>
