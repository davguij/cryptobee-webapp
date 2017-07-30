<template>
  <div>
    <v-layout wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>
            Your balance:
          </v-card-title>
          <v-card-text>
             <p class="display-4">{{globalBalance}}</p> 
            <!-- {{globalBalance}} -->
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 sm2>
        <coin-detail coin="btc" v-on:newbalance="updateGlobalBalance('btc', $event)"></coin-detail>
      </v-flex>
      <v-flex xs4 sm2>
        <coin-detail coin="ltc" v-on:newbalance="updateGlobalBalance('ltc', $event)"></coin-detail>
      </v-flex>
      <v-flex xs4 sm2>
        <coin-detail coin="eth" v-on:newbalance="updateGlobalBalance('eth', $event)"></coin-detail>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import CoinDetail from './home-widgets/CoinDetail';

export default {
  name: 'home',
  components: {
    'coin-detail': CoinDetail,
  },
  data() {
    return {
      globalBalance: 0,
    };
  },
  methods: {
    updateGlobalBalance(coin, balance) {
      this.globalBalance += balance;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
