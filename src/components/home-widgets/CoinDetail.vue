<template>
  <v-card>
    <v-card-title>
      {{coin.toUpperCase()}}
    </v-card-title>
    <v-card-text>
      <p>
        <strong>Total balance:</strong>
        <br>{{balance}} {{coin.toUpperCase()}}
        <br>{{balance * rate}}</p>
      <p>
        <strong>Exchange rate:</strong>
        <br>{{rate}}</p>
    </v-card-text>
  </v-card>
</template>

<script>
import localforage from 'localforage';
import axios from 'axios';

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
    axios.get(`http://localhost:8888/rates/${this.coin}`).then((response) => {
      const allRates = response.data;
      const applicableRate = allRates.find(val => val.currency === 'USD');
      this.rate = applicableRate.rate;
    });
    localforage.getItem(`addresses_${this.coin}`).then((addresses) => {
      if (addresses !== null) {
        // console.log(addresses);
        // let's grab those balances!
        axios.post(`http://localhost:8888/balance/${this.coin}`, { addresses }).then((response) => {
          this.balance = response.data.totalBalance;
          this.$emit('newbalance', this.balance * this.rate);
        });
      }
    });
  },
};
</script>

<style>

</style>
