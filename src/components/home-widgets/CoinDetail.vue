<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{coin.toUpperCase()}}  
      </p>
    </header>
    <div class="card-content">
      <p>
        <strong><small>Balance:</small></strong>
        <br>{{balance}} {{coin.toUpperCase()}}
        <br>{{balance * rate}}</p>
      <p>
        <strong><small>Exchange rate:</small></strong>
        <br>{{rate}}</p>
    </div>
  </div>
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
        console.log(addresses);
        // the endpoint only accepts a flat array of addresses
        const addressesArr = [];
        addresses.forEach((address) => {
          addressesArr.push(address.address);
        }, this);
        // let's grab those balances!
        axios.post(`http://localhost:8888/balance/${this.coin}`, { addresses: addressesArr }).then((response) => {
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
