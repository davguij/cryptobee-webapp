<template>
  <div>
    <v-card class="card">
      <v-card-title class="green darken-1">
        <span class="white--text">Bitcoin wallets</span>
        <v-spacer></v-spacer>
        <v-dialog v-model="newBtcAddress">
          <v-btn icon="icon" slot="activator" class="white--text">
            <v-icon>add_circle</v-icon>
          </v-btn>
          <v-card>
            <v-card-row>
              <v-card-title>Add a Bitcoin wallet</v-card-title>
            </v-card-row>
            <v-card-row>
              <v-card-text>
                <v-text-field v-model="wallet" label="Wallet" required></v-text-field>
                <small>*indicates required field</small>
              </v-card-text>
            </v-card-row>
            <v-card-row actions>
              <v-btn class="blue--text darken-1" flat @click.native="newBtcAddress = false">Close</v-btn>
              <v-btn class="blue--text darken-1" flat @click.native="addAddress('btc')">Save</v-btn>
            </v-card-row>
          </v-card>
        </v-dialog>
      </v-card-title>
      <v-list v-if="addresses.btc && addresses.btc.length > 0">
        <v-list-item v-for="btcAddress in addresses.btc">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{btcAddress}}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native="removeAddress('btc', btcAddress)">
                <v-icon>remove_circle</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <div v-else>Nothing here</div>
    </v-card>
    <v-card>
      <v-card-title class="green darken-1">
        <span class="white--text">Litecoin wallets</span>
        <v-spacer></v-spacer>
        <v-dialog v-model="newLtcAddress">
          <v-btn icon="icon" slot="activator" class="white--text">
            <v-icon>add_circle</v-icon>
          </v-btn>
          <v-card>
            <v-card-row>
              <v-card-title>Add a Litecoin wallet</v-card-title>
            </v-card-row>
            <v-card-row>
              <v-card-text>
                <v-text-field v-model="wallet" label="Wallet" required></v-text-field>
                <small>*indicates required field</small>
              </v-card-text>
            </v-card-row>
            <v-card-row actions>
              <v-btn class="blue--text darken-1" flat @click.native="newLtcAddress = false">Close</v-btn>
              <v-btn class="blue--text darken-1" flat @click.native="addAddress('ltc')">Save</v-btn>
            </v-card-row>
          </v-card>
        </v-dialog>
      </v-card-title>
      <v-list v-if="addresses.ltc && addresses.ltc.length > 0">
        <v-list-item v-for="ltcAddress in addresses.ltc">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ltcAddress}}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon>
                <v-icon>remove_circle</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <div v-else>Nothing here</div>
    </v-card>
    <v-card>
      <v-card-title class="green darken-1">
        <span class="white--text">Ethereum wallets</span>
        <v-spacer></v-spacer>
        <v-dialog v-model="newEthAddress">
          <v-btn icon="icon" slot="activator" class="white--text">
            <v-icon>add_circle</v-icon>
          </v-btn>
          <v-card>
            <v-card-row>
              <v-card-title>Add an Ethereum wallet</v-card-title>
            </v-card-row>
            <v-card-row>
              <v-card-text>
                <v-text-field v-model="wallet" label="Wallet" required></v-text-field>
                <small>*indicates required field</small>
              </v-card-text>
            </v-card-row>
            <v-card-row actions>
              <v-btn class="blue--text darken-1" flat @click.native="newEthAddress = false">Close</v-btn>
              <v-btn class="blue--text darken-1" flat @click.native="addAddress('eth')">Save</v-btn>
            </v-card-row>
          </v-card>
        </v-dialog>
      </v-card-title>
      <v-list v-if="addresses.eth && addresses.eth.length > 0">
        <v-list-item v-for="ethAddress in addresses.eth">
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>{{ethAddress}}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon>
                <v-icon>remove_circle</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          </v-list-tile>
        </v-list-item>
      </v-list>
      <div v-else>Nothing here</div>
    </v-card>
  </div>
</template>

<script>
import localforage from 'localforage';
import _ from 'lodash';

export default {
  name: 'address-book',
  data() {
    return {
      newBtcAddress: false,
      newLtcAddress: false,
      newEthAddress: false,
      addresses: {
        btc: [],
        ltc: [],
        eth: [],
      },
      wallet: '',
    };
  },
  methods: {
    addAddress(coin) {
      this.addresses[coin].push(this.wallet);
      this.wallet = '';
      localforage.setItem(`addresses_${coin}`, this.addresses[coin]).then(() => {
        this.newBtcAddress = false;
        this.newLtcAddress = false;
        this.newEthAddress = false;
      });
    },
    removeAddress(coin, address) {
      this.addresses[coin] = _.pull(this.addresses[coin], address);
      localforage.setItem(`addresses_${coin}`, this.addresses[coin]).then(() => {
        // TODO review this thing so that we don't need to retreive the
        // content from local persitance only to update the array prop in the view
        localforage.getItem(`addresses_${coin}`).then((newAddressArr) => {
          this.addresses[coin] = newAddressArr;
        });
      });
    },
  },
  created() {
    localforage.getItem('addresses_btc').then((btcAddresses) => {
      if (btcAddresses !== null) {
        this.addresses.btc = btcAddresses;
      }
    });
    localforage.getItem('addresses_ltc').then((ltcAddresses) => {
      if (ltcAddresses !== null) {
        this.addresses.ltc = ltcAddresses;
      }
    });
    localforage.getItem('addresses_eth').then((ethAddresses) => {
      if (ethAddresses !== null) {
        this.addresses.eth = ethAddresses;
      }
    });
  },
};
</script>

<style>
.card {
  margin-bottom: 2em;
}
</style>
