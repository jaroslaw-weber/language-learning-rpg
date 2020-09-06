import vueConfig from "../vue.config.js";
import masterdata from "./masterdata.js";
const defaultState = {
  animation: {
    enemyHit: false,
    playerHit: false,
    levelUp: false,
    playerDodge: false,
    enemyDodge: false,
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
    nextLevelExp: masterdata.exp[1].exp,
    equipped: {
      hand: masterdata.weapons[0],
      chest: masterdata.armor[0],
    },
  },
  reviewsCount: 0,
  notifications: {
    newLocation: false,
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
};

export default defaultState;
