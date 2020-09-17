const parse = require("csv-parse/lib/sync");

import clone from "clone";
import defaultState from "../state.js";

import masterdata from "../masterdata.js";

const green = "green";
const red = "red";

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

function save(state) {
  let stateAsString = JSON.stringify(state);
  //console.log(stateAsString);
  localStorage["progress"] = stateAsString;
}
export function load(store) {
  let progressJson = localStorage["progress"];
  if (progressJson == "undefined") return;
  if (progressJson == undefined) return;
  let parsed = JSON.parse(progressJson);

  parsed.master = masterdata;
  store.replaceState(parsed);
}
export function reset(store) {
  localStorage["progress"] = undefined;
  store.replaceState(clone(defaultState));
  location.reload();
}

export function loadDeck(state, deckName) {
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
      approachNewEnemy(state);
      loadNewCard(state);
    });
}
export function loadCustomDeck(state, file) {
  file.text().then((csv) => {
    console.log(csv);

    const records = parse(csv, {
      columns: true,
      skip_empty_lines: true,
    });
    state.cards = records;

    console.log(state.cards);
    approachNewEnemy(state);
    loadNewCard(state);
  });
}
function enemyAttack(state) {
  if (state.currentEnemy == undefined) return;

  //let dodge = state.previousAnswer.wasCorrect;
  let dodge = false; //todo: rework dodge, delete for now
  if (dodge) {
    addLog(state, "you have dodged the attack!", green);
    state.animation.playerDodge = true;
  } else {
    let atk = state.currentEnemy.atk;
    let def = state.player.equipped.chest.def;
    let dmg = atk - def;
    if (dmg < 0) dmg = 0;
    state.player.hp -= dmg;
    addLog(state, `enemy hits you for ${dmg} dmg`, red);
    state.animation.playerHit = true;
  }

  setTimeout(() => {
    state.isMyTurn = !state.isMyTurn;
    state.blockClick = false;
  }, 300);

  state.isShowAnswer = true;
  //loadNewCard(state);
}
function updatePlayerLevel(state) {
  if (isMaxLevel(state)) {
    return;
  }
  let newLevel = 1;
  state.master.exp.forEach((row) => {
    let step = row.exp;
    let exp = state.player.exp;
    //console.log(`step: ${step}, row ${row}, exp:${exp}`);
    if (exp >= step) {
      //console.log("new level");
      newLevel = row.level;
    }
  });
  let isLevelUp = state.player.level < newLevel;
  console.log("updateplayerlevel");
  if (isLevelUp) {
    //console.log("levelup");
    let params = state.master.parameters.find((x) => x.level == newLevel);
    //console.log(params);
    addLog(state, `level up! new level: ${newLevel}`);
    state.player.maxHp = params.hp;
    state.player.hp = params.hp;
    state.animation.levelUp = true;
  }
  state.player.level = newLevel;

  let nextLevelExp = getNextLevelExp(state);
  if (nextLevelExp != undefined) {
    state.player.nextLevelExp = nextLevelExp;
  }
  /*
  if (isLevelUp) {
    if (isUnlockedNewLocation(state)) {
      state.notifications.newLocation = true;
    }
  }*/
}

function getNextLevelExp(state) {
  let nextLevelInfo = state.master.exp.find(
    (x) => x.level == state.player.level + 1
  );
  if (nextLevelInfo == undefined) return undefined;
  return nextLevelInfo.exp;
}

function isMaxLevel(state) {
  let nextLevelInfo = state.master.exp.find(
    (x) => x.level == state.player.level + 1
  );

  let isMaxLevel = nextLevelInfo == undefined;
  return isMaxLevel;
}
function getRandomEnemy(state) {
  let locationId = state.currentLocation;
  let location = state.master.locations.find((x) => x.id == locationId);
  let availableEnemies = location.enemies;
  let randomEnemyId =
    availableEnemies[(availableEnemies.length * Math.random()) << 0];

  let master = state.master.enemies.find((x) => x.id == randomEnemyId);
  let instance = JSON.parse(JSON.stringify(master));
  instance.maxHp = instance.hp;
  return instance;
}
function approachNewEnemy(state) {
  state.blockClick = false;
  addLog(state, "you have approached new enemy!");

  state.isShowAnswer = false;

  state.currentEnemy = getRandomEnemy(state);
  state.isMyTurn = true;
  loadNewCard(state);
}
function getRandomCard(state) {
  let cards = state.cards;
  return cards[(cards.length * Math.random()) << 0];
}
function loadNewCard(state) {
  let card = getRandomCard(state);
  state.currentCard = card;
  let a1 = card.back;
  //closure random card getter
  function randomCard() {
    return getRandomCard(state).back;
  }
  let a2 = randomCard();
  let a3 = randomCard();
  let a4 = randomCard();
  //removing repeated answers
  if (a1 == a2) a2 = randomCard();
  if (a1 == a3) a3 = randomCard();
  if (a1 == a4) a4 = randomCard();
  //there will still be some answers that repeat. but the chance is low
  state.answers = [
    { display: a1, isCorrect: true },
    { display: a2, isCorrect: a1 == a2 },
    { display: a3, isCorrect: a1 == a3 },
    { display: a4, isCorrect: a1 == a4 },
  ];
  shuffle(state.answers);
}

function lootToString(loot) {
  let result = "you found: ";
  loot.forEach((x) => {
    if (x.type == "gold") {
      result += `${x.amount} gold,`;
    }
  });
  return result;
}
function onEnemyKilled(state) {
  let enemyId = state.currentEnemy.id;
  state.animation.enemyHit = false;
  //if max level then dont add exp
  if (!isMaxLevel(state)) {
    state.player.exp += state.currentEnemy.exp;
  }
  updatePlayerLevel(state);
  let loot = state.currentEnemy.loot;
  state.currentEnemy = undefined;
  state.currentLoot = loot;

  let lootLog = lootToString(loot);
  addLog(state, lootLog);
  increaseEnemyKilledCounter(state, enemyId);
}

function increaseEnemyKilledCounter(state, enemyId) {
  //game stats
  let table = state.player.gameStats.enemiesKilled;
  let current = table.find((x) => x.id == enemyId);
  if (current == undefined) {
    table.push({ id: enemyId, count: 1 });
  } else {
    current.count += 1;
  }
}

function attack(state) {
  if (state.previousAnswer.wasCorrect) {
    let currentWeapon = state.player.equipped.hand;
    //console.log(currentWeapon);
    let atk = currentWeapon.atk;
    addLog(state, `you hit enemy for ${atk} damage`, green);
    state.currentEnemy.hp -= atk;
    state.animation.enemyHit = true;
  } else {
    addLog(state, "you have missed", red);
    state.animation.enemyDodge = true;
  }
  state.isShowAnswer = true;
  //loadNewCard(state);
  state.isMyTurn = !state.isMyTurn;
  //console.log(state.currentEnemy);
  if (state.currentEnemy.hp <= 0) {
    onEnemyKilled(state);
  }
}

function useSpellSuccess(state, spellId) {
  if (state.previousAnswer.wasCorrect) {
    console.log("use spell success: " + spellId);
    let spells = state.master.spells;
    console.log(spells);
    let spell = spells.find((x) => x.id == spellId);
    if (spell.type == "heal") {
      state.player.hp += spell.effect;
      if (state.player.hp > state.player.maxHp) {
        state.player.hp = state.player.maxHp;
      }
    }
  }

  state.isShowAnswer = true;
  //loadNewCard(state);
  state.isMyTurn = !state.isMyTurn;
  //console.log(state.currentEnemy);
  if (state.currentEnemy.hp <= 0) {
    onEnemyKilled(state);
  }
}

export function collectLoot(state) {
  readAllLog(state);
  if (state.currentLoot) {
    state.currentLocation;
    state.currentLoot.forEach((x) => {
      if (x.type == "gold") {
        state.player.gold += x.amount;
        onGoldUpdated(state);
      }
    });
    state.currentLoot = undefined;
  }

  approachNewEnemy(state);

  save(state);
}

//update for achievements
function onGoldUpdated(state) {
  let goldNow = state.player.gold;
  if (goldNow > state.player.gameStats.maxGold) {
    state.player.gameStats.maxGold = goldNow;
  }
}

function addLog(state, message, color) {
  state.gameLog.push({ content: message, isRead: false, color: color });
}
function readAllLog(state) {
  state.gameLog.forEach((x) => (x.isRead = true));
}

export function onAnswer(state, answer) {
  readAllLog(state);

  state.reviewsCount += 1;
  //save info about your answer. need this to display result
  let previousAnswer = state.previousAnswer;
  let currentCard = state.currentCard;
  let isCorrect = answer.display == currentCard.back;

  previousAnswer.question = currentCard.front;
  previousAnswer.correctAnswer = currentCard.back;
  previousAnswer.yourAnswer = answer;
  previousAnswer.wasCorrect = isCorrect;

  state.isShowAnswer = true;
}

export function afterShowAnswer(state) {
  state.blockClick = true;
  state.isShowQuestionModal = false;
  setTimeout(() => {
    if (state.selectedAction.type == "attack") {
      attack(state);
    } else if (state.selectedAction.type == "spell") {
      let spellId = state.selectedAction.spellId;
      useSpellSuccess(state, spellId);
    }
    setTimeout(() => {
      enemyAttack(state);
    }, 1000);
  }, 300);
}


export function debugAddGold(state, amount) {
  state.player.gold += amount;
  onGoldUpdated(state);
}
export function debugLevelUp(state) {
  let nextLevel = state.player.level + 1;
  let needExp = state.master.exp.find((x) => x.level == nextLevel).exp;

  state.player.exp = needExp;

  updatePlayerLevel(state);
}
export function goToLocation(state, locationId) {
  collectLoot(state);
  state.currentLocation = locationId;
  approachNewEnemy(state);
  state.currentScene = "battle";
}
export function nextTurn(state) {
  state.isShowAnswer = false;
  loadNewCard(state);
  save(state);
}

export function onAttackButton(state) {
  nextTurn(state);
  state.selectedAction = { type: "attack" };
  console.log("on attack button");
  state.isShowQuestionModal = true;
}
export function closeQuestionModal(state) {
  console.log("close question modal");
  afterShowAnswer(state);
}

export function useSpell(state, spellId) {
  console.log("use spell : " + spellId);
  nextTurn(state);
  state.selectedAction = { type: "spell", spellId: spellId };
  console.log("use spell");
  state.isShowQuestionModal = true;
}

export function killMe(state) {
  state.player.hp = 0;
}
