import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

import clone from "clone";
import * as logic from "./logic/other.js";
import defaultState from "./state.js";

import * as shop from "./logic/shop.js";

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
      shop.buyWeapon(state, weaponId);
    },

    buyArmor(state, armorId) {
      shop.buyArmor(state, armorId);
    },
    buyPotion(state) {
      shop.buyPotion(state);
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
    onAttackButton(state) {
      logic.onAttackButton(state);
    },
    closeQuestionModal(state) {
      logic.closeQuestionModal(state);
    },
    killMe(state) {
      logic.killMe(state);
    },
    useSpell(state, spellId) {
      logic.useSpell(state, spellId);
    },
    buySpell(state, spellId) {
      shop.buySpell(state, spellId);
    },
  },
  getters: {
    getMySpells: (state) => {
      let mySpells = [];
      state.player.spells.forEach((id) => {
        let spell = state.master.spells.find((x) => x.id == id);
        mySpells.push(spell);
      });
      return mySpells;
    },
    getLocations: (state) => {
      console.log("getting locations");
      let locations = state.master.locations;

      locations.forEach((location) => {
        let conditions = location.unlockConditions;
        let isLocked = false;
        conditions.forEach((condition) => {
          let requiredLevel = condition.level;
          if (requiredLevel != undefined) {
            let playerLevel = state.player.level;
            if (playerLevel < requiredLevel) {
              isLocked = true;
              return;
            }
          }
          let requiredKill = condition.kill;
          if (requiredKill != undefined) {
            let killed = state.player.gameStats.enemiesKilled;
            let isKilled = killed.find((x) => x.id == requiredKill);
            if (isKilled == undefined || isKilled.count == 0) {
              isLocked = true;
              return;
            }
          }
        });
        location.isLocked = isLocked;
      });

      let available = locations.filter((x) => !x.isLocked);
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
        armors: myArmors.slice(0, 1),
        weapons: myWeapons.slice(0, 1),
      };

      return result;
    },
    getAchievements: (state) => {
      let result = [];
      state.master.achievements.forEach((a) => {
        let condition = a.condition;
        if (condition.type == "kill") {
          let enemyId = condition.enemyId;
          let enemiesKilledInfo = state.player.gameStats.enemiesKilled.find(
            (x) => x.id == enemyId
          );
          let count =
            enemiesKilledInfo == undefined ? 0 : enemiesKilledInfo.count;
          let target = condition.count;
          let enemy = state.master.enemies.find((x) => x.id == enemyId);
          let playerAchievementString = `kill ${target} ${enemy.name} (progress: ${count}/${target})`;

          let playerAchievement = {
            text: playerAchievementString,
            isDone: count >= target,
          };

          result.push(playerAchievement);
        } else if (condition.type == "gold") {
          let count = state.player.gameStats.maxGold;
          let target = condition.amount;
          let playerAchievementString = `have ${target} gold (progress: ${count}/${target})`;

          let playerAchievement = {
            text: playerAchievementString,
            isDone: count >= target,
          };

          result.push(playerAchievement);
        }
      });
      console.log(result);
      return result;
    },
  },
});

//intialization
logic.load(store);

export default store;
