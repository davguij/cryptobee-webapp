<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{coin.toUpperCase()}}
      </p>
    </header>
    <div class="card-content">
      <p>
        <strong>
          <small>Balance:</small>
        </strong>
        <br>{{balanceFormatted}} {{coin.toUpperCase()}}
        <br>{{balanceInCurrency | currency}}</p>
      <p>
        <strong>
          <small>Exchange rate:</small>
        </strong>
        <br>{{rate | currency}}</p>
    </div>
  </div>
</template>

<script>
import localforage from 'localforage';
import axios from 'axios';
import numeral from 'numeral';

import EventBus from '../../event-bus';

export default {
  name: 'coin-detail',
  props: ['coin'],
  data() {
    return {
      balance: 0,
      rate: 0,
    };
  },
  computed: {
    balanceInCurrency() {
      this.$emit('newbalance', this.balance * this.rate);
      return this.balance * this.rate;
    },
    balanceFormatted() {
      return numeral(this.balance).format('0,0.000000');
    },
  },
  created() {
    localforage.getItem(`addresses_${this.coin}`).then((addresses) => {
      if (addresses !== null) {
        // the endpoint only accepts a flat array of addresses
        const addressesArr = [];
        addresses.forEach((address) => {
          addressesArr.push(address.address);
        }, this);
        // let's grab those balances!
        if (addressesArr.length > 0) {
          EventBus.$emit('LOADING', true);
          axios.get(`/api/rates/${this.coin}`).then((response) => {
            const allRates = response.data;
            const applicableRate = allRates.find(val => val.currency === 'USD');
            this.rate = applicableRate.rate;
          }).catch((error) => {
            EventBus.$emit('ERROR', error.message);
            EventBus.$emit('LOADING', false);
          });
          axios.post(`/api/balance/${this.coin}`, { addresses: addressesArr }).then((response) => {
            this.balance = response.data.totalBalance;
            EventBus.$emit('LOADING', false);
          }).catch((error) => {
            EventBus.$emit('ERROR', error.message);
            EventBus.$emit('LOADING', false);
          });
        }
      }
    });
  },
};
</script>

<style>

</style>
