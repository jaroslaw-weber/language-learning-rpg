import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

import clone from "clone";
import * as logic from "./logic.js";
import defaultState from "./state.js";

//store data in this object
const store = new Vuex.Store({
  state: clone(defaultState),
  mutations: {
    onAnswer(state, answer) {
      logic.onAnswer(state, answer);
    },
    collectLoot(state) {
      logic.collectLoot(state);
    },
    buyWeapon(state, weaponId) {
      logic.buyWeapon(state, weaponId);
    },

    buyArmor(state, armorId) {
      logic.buyArmor(state, armorId);
    },
    debugAddGold(state, amount) {
      logic.debugAddGold(state, amount);
    },
    debugLevelUp(state) {
      logic.debugLevelUp(state);
    },
    goToLocation(state, locationId) {
      logic.goToLocation(state, locationId);
    },
    nextTurn(state) {
      logic.nextTurn(state);
    },
    reset() {
      logic.reset(this);
    },
    loadDeck(state, deckName) {
      logic.loadDeck(state, deckName);
    },
    loadCustomDeck(state, file) {
      logic.loadCustomDeck(state, file);
    },
  },
});

//intialization
logic.load(store);

export default store;
