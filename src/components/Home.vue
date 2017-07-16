<template>
  <div>
    <v-layout wrap>
      <v-flex xs12 sm6>
        <v-card>
          <v-card-title>
            Your balance:
          </v-card-title>
          <v-card-text>
            <p class="display-4">$12,234</p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 sm2>
        <coin-detail coin="btc"></coin-detail>
      </v-flex>
      <v-flex xs4 sm2>
        <coin-detail coin="ltc"></coin-detail>
      </v-flex>
      <v-flex xs4 sm2>
        <coin-detail coin="eth"></coin-detail>
      </v-flex>
    </v-layout>
    <v-card>
      <v-card-title>
        Graph
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import CoinDetail from './home-widgets/CoinDetail';

export default {
  name: 'home',
  components: {
    'coin-detail': CoinDetail,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
