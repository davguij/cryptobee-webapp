<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Your global balance
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p class="title">
                {{globalBalance | currency}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column" v-show="coinBalance.btc > 0">
        <coin-detail coin="btc" v-on:showcoin="toggleCoin('btc', $event)" v-on:newbalance="updateGlobalBalance('btc', $event)"></coin-detail>
      </div>
      <div class="column" v-show="coinBalance.ltc > 0">
        <coin-detail coin="ltc" v-on:showcoin="toggleCoin('ltc', $event)" v-on:newbalance="updateGlobalBalance('ltc', $event)"></coin-detail>
      </div>
      <div class="column" v-show="coinBalance.eth > 0">
        <coin-detail coin="eth" v-on:showcoin="toggleCoin('eth', $event)" v-on:newbalance="updateGlobalBalance('eth', $event)"></coin-detail>
      </div>
      <div class="column" v-show="coinBalance.doge > 0">
        <coin-detail coin="doge" v-on:showcoin="toggleCoin('doge', $event)" v-on:newbalance="updateGlobalBalance('doge', $event)"></coin-detail>
      </div>
      <div class="column" v-show="coinBalance.dash > 0">
        <coin-detail coin="dash" v-on:showcoin="toggleCoin('dash', $event)" v-on:newbalance="updateGlobalBalance('dash', $event)"></coin-detail>
      </div>
    </div>
  </section>
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
      coinBalance: {
        btc: 0,
        ltc: 0,
        eth: 0,
        doge: 0,
        dash: 0,
      },
    };
  },
  computed: {
    globalBalance() {
      let balance = 0;
      const coinValues = Object.values(this.coinBalance);
      coinValues.forEach((value) => {
        balance += value;
      }, this);
      return balance;
    },
  },
  methods: {
    updateGlobalBalance(coin, balance) {
      this.coinBalance[coin] = balance;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
