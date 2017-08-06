<template>
  <section class="section">
    <button class="button" @click="isComponentModalActive = true">Add wallet</button>
    <button class="button" @click="removeWallet()" :disabled="deleteButtonDisabled">Remove wallet</button>
  
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
          <a class="card-footer-item" @click="isComponentModalActive = false">Cancel</a>
          <a class="card-footer-item" @click="addWallet()">Save</a>
        </footer>
      </div>
    </b-modal>
  
    <b-table :data="addresses" :selected.sync="selectedTableRow">
      <template scope="props">
        <b-table-column field="coin" label="Coin">
          {{ props.row.coin | coinFormatter}}
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
import * as addressValidator from 'wallet-address-validator';
import ethAddrValidator from '../utils/ethAddrValidator';

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
      selectedTableRow: {},
    };
  },
  computed: {
    deleteButtonDisabled() {
      return _.isEmpty(this.selectedTableRow);
    },
  },
  filters: {
    coinFormatter(coinCode) {
      const coinCodes = new Map();
      coinCodes.set('btc', 'Bitcoin');
      coinCodes.set('ltc', 'Litecoin');
      coinCodes.set('eth', 'Ethereum');

      return coinCodes.get(coinCode);
    },
  },
  methods: {
    addWallet() {
      switch (this.newWallet.coin) {
        case 'btc':
          this.valid = addressValidator.validate(this.newWallet.address, this.newWallet.coin);
          break;
        case 'ltc':
          this.valid = addressValidator.validate(this.newWallet.address, this.newWallet.coin);
          break;
        case 'eth':
          this.valid = ethAddrValidator.isAddress(this.newWallet.address);
          break;

        default:
          break;
      }

      if (this.valid) {
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
            this.$toast.open({
              type: 'is.info',
              message: 'Wallet added!',
            });
          });
        });
      } else {
        this.$toast.open({
          message: 'You entered non-valid data, please try again.',
          type: 'is-danger',
        });
      }
    },
    removeWallet() {
      this.$dialog.confirm({
        message: 'Are you sure you want to <strong>remove</strong> the selected wallet from the Address Book? This action cannot be undone.',
        confirmText: 'Remove wallet',
        type: 'is-danger',
        onConfirm: () => {
          localforage.getItem(`addresses_${this.selectedTableRow.coin}`).then((allWallets) => {
            // need to find the one we're trying to delete!
            // eslint-disable-next-line max-len
            const newWalletArr = allWallets.filter(wallet => wallet.address !== this.selectedTableRow.address);
            localforage.setItem(`addresses_${this.selectedTableRow.coin}`, newWalletArr).then(() => {
              // eslint-disable-next-line max-len
              const newAddresses = this.addresses.filter(address => address.address !== this.selectedTableRow.address);
              this.addresses = newAddresses;
              this.$toast.open({
                type: 'is.info',
                message: 'Wallet removed!',
              });
            });
          });
        },
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
