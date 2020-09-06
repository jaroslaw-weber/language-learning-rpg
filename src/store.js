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
  getters: {
    getLocations: (state) => {
      console.log("getting locations");
      let locations = state.master.locations;

      let available = locations.filter(
        (x) => x.requiredLevel <= state.player.level
      );
      //console.log(available);
      let showCount = available.length + 1;
      //console.log("show count");
      let myLocations = state.master.locations.slice(0, showCount);
      return myLocations;
    },

    getShop: (state) => {
      console.log("getting locations");
      let allWeapons = state.master.weapons;

      let currentWeapon = state.player.equipped.hand;

      let myWeapons = allWeapons.filter((x) => x.atk > currentWeapon.atk);

      let allArmors = state.master.armor;

      let currentArmor = state.player.equipped.chest;

      let myArmors = allArmors.filter((x) => currentArmor.def < x.def);

      let result = {
        armors: myArmors.slice(0, 4),
        weapons: myWeapons.slice(0, 4),
      };

      return result;
    },
  },
});

//intialization
logic.load(store);

export default store;
