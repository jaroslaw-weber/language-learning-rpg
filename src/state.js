import vueConfig from "../vue.config.js";
import masterdata from "./masterdata/masterdata.js";
import packageConfig from "../package.json";

const defaultState = {
  version: packageConfig.version,
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
    //exp bar start value
    minExp: 0,
    //exp bar end value (level up when exp reach this)
    nextLevelExp: masterdata.exp[1].exp,
    level: 1,
    equipped: {
      hand: masterdata.weapons[0],
      chest: masterdata.armor[0],
    },
    spells: [],
    gameStats: {
      //enemies killed counter, for achievements
      enemiesKilled: [{ id: 1, count: 0 }],
      //how much gold had at once
      maxGold: 0,
    },
  },
  blockClick: false,
  isShowQuestionModal: false,
  reviewsCount: 0,
  notifications: {
    newLocation: false,
  },
  gameLog: [],
  previewDeck: undefined,
  cards: undefined,
  currentEnemy: undefined,
  currentLoot: undefined,
  currentCard: undefined,
  currentLocation: 1,
  //who is attacking: me or enemy
  isMyTurn: true,
  isShowAnswer: false,
  selectedAction: undefined,
  previousAnswer: {
    question: undefined,
    yourAnswer: undefined,
    correctAnswer: undefined,
    wasCorrect: undefined,
  },
  currentScene: "battle", //battle, shop, inventory
};

export default defaultState;
