import masterdata from "./masterdata.js";

import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

import vueConfig from "../vue.config.js";

import clone from "clone";

const parse = require("csv-parse/lib/sync");

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

function addLog(state, message, color) {
  state.gameLog.push({ content: message, isRead: false, color: color });
}
function readAllLog(state) {
  state.gameLog.forEach((x) => (x.isRead = true));
}
const green = "green";
const red = "red";
const defaultState = {
  animation: {
    enemyHit: false,
    playerHit: false,
  },
  master: masterdata,
  publicPath: vueConfig.publicPath,
  answers: [],
  player: {
    hp: masterdata.parameters[0].hp,
    maxHp: masterdata.parameters[0].hp,
    gold: 0,
    exp: 0,
    level: 1,
    nextLevelExp: masterdata.expTable[0][0],
    equipped: {
      hand: masterdata.weapons[0],
    },
  },
  gameLog: [],
  cards: undefined,
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
};

//store data in this object
const store = new Vuex.Store({
  state: clone(defaultState),
  mutations: {
    onAnswer(state, answer) {
      readAllLog(state);
      //console.log(answer);
      //save info about your answer. need this to display result
      let previousAnswer = state.previousAnswer;
      let currentCard = state.currentCard;
      let isCorrect = answer.display == currentCard.back;
      /*console.log(
        `iscorrect: ${isCorrect}, ${answer.display}, ${currentCard.back}`
      );*/

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
    /*
    start(state) {

      state.player.equipped.this.updatePlayerLevel(state);
      this.loadCards(state);
      this.load();
    },*/
    collectLoot(state) {
      readAllLog(state);
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
      store.save(state);
    },
    reset() {
      this.reset();
    },
    loadDeck(state, deckName) {
      store.loadDeck(state, deckName);
    },
    loadCustomDeck(state, file) {
      store.loadCustomDeck(state, file);
    },
  },
});

store.save = (state) => {
  let stateAsString = JSON.stringify(state);
  //console.log(stateAsString);
  localStorage["progress"] = stateAsString;
};
store.load = () => {
  let progressJson = localStorage["progress"];
  if (progressJson == "undefined") return;
  if (progressJson == undefined) return;
  let parsed = JSON.parse(progressJson);
  store.replaceState(parsed);
};
store.reset = () => {
  localStorage["progress"] = undefined;
  store.replaceState(clone(defaultState));
  location.reload();
};
store.loadDeck = (state, deckName) => {
  fetch(`${state.publicPath}${deckName}`)
    .then((x) => x.text())
    .then((loadedCsv) => {
      //console.log(loadedCsv);

      const records = parse(loadedCsv, {
        columns: true,
        skip_empty_lines: true,
      });
      state.cards = records;

      console.log(state.cards);
      store.approachNewEnemy(state);
      store.loadNewCard(state);
    });
};
store.loadCustomDeck = (state, file) => {
  file.text().then((csv) => {
    console.log(csv);

    const records = parse(csv, {
      columns: true,
      skip_empty_lines: true,
    });
    state.cards = records;

    console.log(state.cards);
    store.approachNewEnemy(state);
    store.loadNewCard(state);
  });
};
store.enemyAttack = (state) => {
  if (state.previousAnswer.wasCorrect) {
    addLog(state, "you have dodged the attack!", green);
  } else {
    let atk = state.currentEnemy.atk;
    state.player.hp -= atk;
    addLog(state, `enemy hits you for ${atk} dmg`, red);
    state.animation.playerHit = true;
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
    console.log(`step: ${step}, row ${row}, exp:${exp}`);
    if (exp >= step) {
      //console.log("new level");
      newLevel = row[1];
    }
  });
  let isLevelUp = state.player.level < newLevel;
  console.log("updateplayerlevel");
  if (isLevelUp) {
    console.log("levelup");
    let params = state.master.parameters.find((x) => x.level == newLevel);
    console.log(params);
    addLog(state, `level up! new level: ${newLevel}`);
    state.player.maxHp = params.hp;
    state.player.hp = params.hp;
  }
  state.player.level = newLevel;
  state.player.nextLevelExp = state.master.expTable[newLevel - 1][0];
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
  addLog(state, "you have approached new enemy!");

  state.isShowAnswer = false;

  state.currentEnemy = store.getRandomEnemy(state);
  state.isMyTurn = true;
  store.loadNewCard(state);
};
store.getRandomCard = (state) => {
  let cards = state.cards;
  return cards[(cards.length * Math.random()) << 0];
};
store.loadNewCard = (state) => {
  let card = store.getRandomCard(state);
  state.currentCard = card;
  let a1 = card.back;
  let a2 = store.getRandomCard(state).back;
  let a3 = store.getRandomCard(state).back;
  let a4 = store.getRandomCard(state).back;
  state.answers = [
    { display: a1, isCorrect: true },
    { display: a2, isCorrect: a1 == a2 },
    { display: a3, isCorrect: a1 == a3 },
    { display: a4, isCorrect: a1 == a4 },
  ];
  shuffle(state.answers);
};
store.onEnemyKilled = (state) => {
  state.animation.enemyHit = false;
  state.player.exp += state.currentEnemy.exp;
  store.updatePlayerLevel(state);
  state.currentEnemy = undefined;
  let loot = [{ name: "gold", amount: 10, asString: "10 gold" }];
  state.currentLoot = loot;
  let lootLog = `you have found: `;
  loot.forEach((x) => {
    lootLog += x.asString + ", ";
  });
  addLog(state, lootLog);
};

store.attack = (state) => {
  if (state.previousAnswer.wasCorrect) {
    let currentWeapon = state.player.equipped.hand;
    //console.log(currentWeapon);
    let atk = currentWeapon.atk;
    addLog(state, `you hit enemy for ${atk} damage`, green);
    state.currentEnemy.hp -= atk;
    state.animation.enemyHit = true;
  } else {
    addLog(state, "you have missed", red);
  }
  state.isShowAnswer = true;
  //store.loadNewCard(state);
  state.isMyTurn = !state.isMyTurn;
  //console.log(state.currentEnemy);
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

  store.save(state);
};

//intialization
store.load();

export default store;
