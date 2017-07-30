<template>
  <section class="section">
    <div class="columns">
      <div class="column">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              Your global balance:
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              <p class="title">
                {{globalBalance}}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <coin-detail coin="btc" v-on:newbalance="updateGlobalBalance('btc', $event)"></coin-detail>
      </div>
      <div class="column">
        <coin-detail coin="ltc" v-on:newbalance="updateGlobalBalance('ltc', $event)"></coin-detail>
      </div>
      <div class="column">
        <coin-detail coin="eth" v-on:newbalance="updateGlobalBalance('eth', $event)"></coin-detail>
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
