<template>
  <v-card>
    <v-card-title>
      {{coin.toUpperCase()}}
    </v-card-title>
    <v-card-text>
      <p>
        <strong>Total balance:</strong>
        <br>23 {{coin.toUpperCase()}}
        <br>$25</p>
      <p>
        <strong>Exchange rate:</strong>
        <br>$2,342</p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'coin-detail',
  props: ['coin'],
};
</script>

<style>

</style>
