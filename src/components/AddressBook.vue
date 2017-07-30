<template>
  <section class="section">
    <button class="button" @click="isComponentModalActive = true">Add wallet</button>
  
    <b-modal :active.sync="isComponentModalActive" has-modal-card>
      <div class="card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add a new wallet</p>
        </header>
        <section class="modal-card-body">
          <b-field>
            <b-select placeholder="Select a coin" v-model="newWallet.coin">
              <option value="btc">Bitcoin</option>
              <option value="ltc">Litecoin</option>
              <option value="eth">Ethereum</option>
            </b-select>
          </b-field>
          <b-field>
            <b-input placeholder="Wallet address" v-model="newWallet.address"></b-input>
          </b-field>
          <b-field message="Optional">
            <b-input placeholder="Alias" v-model="newWallet.alias"></b-input>
          </b-field>
        </section>
        <footer class="card-footer">
          <a class="card-footer-item">Cancel</a>
          <a class="card-footer-item" @click="addWallet()">Save</a>
        </footer>
      </div>
    </b-modal>
  
    <b-table :data="addresses">
      <template scope="props">
        <b-table-column field="coin" label="Coin">
          {{ props.row.coin }}
        </b-table-column>
        <b-table-column field="alias" label="Alias">
          {{ props.row.alias }}
        </b-table-column>
        <b-table-column field="address" label="Address">
          {{ props.row.address }}
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import localforage from 'localforage';
import _ from 'lodash';
// import * as addressValidator from 'wallet-address-validator';
// import ethAddrValidator from '../utils/ethAddrValidator';

export default {
  name: 'address-book',
  data() {
    return {
      isComponentModalActive: false,
      addresses: [],
      newWallet: {
        coin: '',
        address: '',
        alias: '',
      },
    };
  },
  methods: {
    addWallet() {
      localforage.getItem(`addresses_${this.newWallet.coin}`).then((allWallets) => {
        const wallets = allWallets === null ? [] : allWallets;
        wallets.push(this.newWallet);
        localforage.setItem(`addresses_${this.newWallet.coin}`, wallets).then(() => {
          this.addresses.push(this.newWallet);
          this.newWallet = {
            coin: '',
            address: '',
            alias: '',
          };
          this.isComponentModalActive = false;
        });
      });
    },
  },
  created() {
    localforage.getItem('addresses_btc').then((btcAddresses) => {
      if (btcAddresses !== null) {
        btcAddresses.forEach((btcAddress) => {
          this.addresses.push(btcAddress);
        }, this);
      }

      localforage.getItem('addresses_ltc').then((ltcAddresses) => {
        if (ltcAddresses !== null) {
          ltcAddresses.forEach((ltcAddress) => {
            this.addresses.push(ltcAddress);
          }, this);
        }
      });
      localforage.getItem('addresses_eth').then((ethAddresses) => {
        if (ethAddresses !== null) {
          ethAddresses.forEach((ethAddress) => {
            this.addresses.push(ethAddress);
          }, this);
        }
      });
    });
  },
};
</script>

<style>
.card {
  margin-bottom: 2em;
}
</style>
