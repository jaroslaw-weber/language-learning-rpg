import masterdata from "./masterdata.js";

import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

import vueConfig from "../vue.config.js";

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

//store data in this object
const store = new Vuex.Store({
  state: {
    master: masterdata,
    publicPath: vueConfig.publicPath,
    answers: [],
    player: {
      hp: 100,
      gold: 0,
      exp: 0,
      level: 1,
      nextLevelExp: undefined,
      equipped: {
        hand: undefined,
      },
    },
    battleLog: [],
    currentEnemy: undefined,
    currentLoot: undefined,
    currentCard: undefined,
    currentLocation: 1,
    //who is attacking: me or enemy
    isMyTurn: true,
    isShowAnswer: false,
    previousAnswer: {
      question: undefined,
      yourAnswer: undefined,
      correctAnswer: undefined,
      wasCorrect: undefined,
    },
    currentScene: "battle", //battle, shop, inventory
    isDebug: false,
  },
  mutations: {
    onAnswer(state, answer) {
      console.log(answer);
      //save info about your answer. need this to display result
      let previousAnswer = state.previousAnswer;
      let currentCard = state.currentCard;
      let isCorrect = answer.display == currentCard.back;
      console.log(
        `iscorrect: ${isCorrect}, ${answer.display}, ${currentCard.back}`
      );

      previousAnswer.question = currentCard.front;
      previousAnswer.correctAnswer = currentCard.back;
      previousAnswer.yourAnswer = answer;
      previousAnswer.wasCorrect = isCorrect;

      if (state.isMyTurn) {
        this.attack(state);
      } else {
        this.enemyAttack(state);
      }
    },
    start(state) {
      state.player.equipped.hand = state.master.weapons[0];
      this.updatePlayerLevel(state);
      this.loadCards(state);
    },
    collectLoot(state) {
      this.collectLoot(state);
    },
    buyWeapon(state, weaponId) {
      let weapon = state.master.weapons.find((x) => x.id == weaponId);
      console.log(`bought weapon: weapon.name`);
      state.player.equipped.hand = weapon;
      state.player.gold -= weapon.price;
    },
    debugAddGold(state, amount) {
      state.player.gold += amount;
    },
    debugLevelUp(state) {
      let nextLevel = state.player.level + 1;
      let needExp = state.master.expTable.find((x) => x[1] == nextLevel)[0];
      state.player.exp = needExp;
      this.updatePlayerLevel(state);
    },
    goToLocation(state, locationId) {
      this.collectLoot(state);
      state.currentLocation = locationId;
      store.approachNewEnemy(state);
      state.currentScene = "battle";
    },
    nextTurn(state) {
      state.isShowAnswer = false;
      store.loadNewCard(state);
    },
  },
});

store.loadCards = (state) => {
  const parse = require("csv-parse/lib/sync");

  fetch(`${state.publicPath}spanish200.csv`)
    .then((x) => x.text())
    .then((loadedCsv) => {
      //console.log(loadedCsv);

      const records = parse(loadedCsv, {
        columns: true,
        skip_empty_lines: true,
      });
      state.master.cards = records;

      console.log(state.master.cards);
      store.approachNewEnemy(state);
      store.loadNewCard(state);
    });
};
store.enemyAttack = (state) => {
  if (state.previousAnswer.wasCorrect) {
    state.battleLog.push("you have dodged the attack!");
  } else {
    let atk = state.currentEnemy.atk;
    state.player.hp -= atk;
    state.battleLog.push(`enemy hits you for ${atk} dmg`);
  }

  state.isMyTurn = !state.isMyTurn;

  state.isShowAnswer = true;
  //store.loadNewCard(state);
};
store.updatePlayerLevel = (state) => {
  let newLevel = 1;
  state.master.expTable.forEach((row) => {
    let step = row[0];
    let exp = state.player.exp;
    //console.log(`step: ${step}, row ${row}, exp:${exp}`);
    if (exp >= step) {
      //console.log("new level");
      newLevel = row[1];
    }
  });
  state.player.level = newLevel;
  state.player.nextLevelExp = state.master.expTable[newLevel][0];
};
store.getRandomEnemy = (state) => {
  let locationId = state.currentLocation;
  let location = state.master.locations.find((x) => x.id == locationId);
  let availableEnemies = location.enemies;
  let randomEnemyId =
    availableEnemies[(availableEnemies.length * Math.random()) << 0];

  let master = state.master.enemies.find((x) => x.id == randomEnemyId);
  let instance = JSON.parse(JSON.stringify(master));
  instance.maxHp = instance.hp;
  return instance;
};
store.approachNewEnemy = (state) => {
  state.battleLog.push("you have approached new enemy!");

  state.isShowAnswer = false;

  state.currentEnemy = store.getRandomEnemy(state);
  state.isMyTurn = true;
  store.loadNewCard(state);
};
store.getRandomCard = (state) => {
  let cards = state.master.cards;
  return cards[(cards.length * Math.random()) << 0];
};
store.loadNewCard = (state) => {
  let card = store.getRandomCard(state);
  state.currentCard = card;
  state.answers = [
    { display: card.back, isCorrect: true },
    { display: store.getRandomCard(state).back, isCorrect: false },
    { display: store.getRandomCard(state).back, isCorrect: false },
    { display: store.getRandomCard(state).back, isCorrect: false },
  ];
  shuffle(state.answers);
};
store.onEnemyKilled = (state) => {
  state.player.exp += state.currentEnemy.exp;
  store.updatePlayerLevel(state);
  state.currentEnemy = undefined;
  let loot = [{ name: "gold", amount: 10, asString: "10 gold" }];
  state.currentLoot = loot;
  let lootLog = `you have found: `;
  loot.forEach((x) => {
    lootLog += x.asString + ", ";
  });
  state.battleLog.push(lootLog);
};

store.attack = (state) => {
  if (state.previousAnswer.wasCorrect) {
    let currentWeapon = state.player.equipped.hand;
    console.log(currentWeapon);
    let atk = currentWeapon.atk;
    state.battleLog.push(`you hit enemy for ${atk} damage`);
    state.currentEnemy.hp -= atk;
  } else {
    state.battleLog.push("you have missed!");
  }
  state.isShowAnswer = true;
  //store.loadNewCard(state);
  state.isMyTurn = !state.isMyTurn;
  console.log(state.currentEnemy);
  if (state.currentEnemy.hp <= 0) {
    store.onEnemyKilled(state);
  }
};
store.collectLoot = (state) => {
  if (state.currentLoot) {
    state.player.gold += 10;
    state.currentLoot = undefined;
  }

  store.approachNewEnemy(state);
};
export default store;
