//todo load masterdata from csv
import exp from "./exp";
import parameter from "./parameter";
import weapon from "./weapon";

//define parameters here
export default {
  exp: exp,
  parameters: parameter,
  locations: [
    {
      id: 1,
      order: 1,
      name: "forest",
      icon: "forest",
      enemies: [1, 2, 3],
      unlockConditions: [],
    },
    {
      id: 901,
      order: 2,
      name: "forest: boss stage",
      icon: "witch-face",
      enemies: [901],
      unlockConditions: [{ level: 4 }],
    },
    {
      id: 2,
      order: 3,
      name: "cementary",
      icon: "tombstone",
      requiredLevel: 6,
      enemies: [4, 5, 6],
      unlockConditions: [{ kill: 901 }],
    },
    {
      id: 902,
      name: "cementary: boss stage",
      icon: "skull-slices",
      enemies: [902],
      unlockConditions: [{ level: 9 }, { location: 2 }],
    },
    {
      id: 3,
      order: 4,
      name: "hell",
      icon: "flaming-trident",
      enemies: [7, 8, 9],
      unlockConditions: [{ kill: 902 }],
    },
    {
      id: 903,
      order: 5,
      name: "hell: boss stage",
      icon: "diablo-skull",
      enemies: [903],
      unlockConditions: [{ level: 14 }, { location: 3 }],
    },
    {
      id: 4,
      order: 6,
      name: "vampire castle",
      icon: "castle-ruins",
      enemies: [10, 11, 12],
      unlockConditions: [{ kill: 903 }],
    },
    {
      id: 904,
      order: 7,
      name: "vampire castle: boss stage",
      icon: "vampire-dracula",

      enemies: [904],
      unlockConditions: [{ level: 19 }, { location: 4 }],
    },
    {
      id: 5,
      order: 8,
      name: "egypt",
      icon: "great-pyramid",
      enemies: [13, 14, 15],
      unlockConditions: [{ kill: 904 }],
    },
    {
      id: 905,
      order: 9,
      name: "egypt: boss stage",
      icon: "anubis",

      enemies: [905],
      unlockConditions: [{ level: 25 }, { location: 5 }],
    },
    {
      id: 6,
      order: 8,
      name: "deep sea",
      icon: "big-wave",
      enemies: [16, 17, 18],
      unlockConditions: [{ kill: 905 }],
    },
    {
      id: 906,
      order: 9,
      name: "deep sea: boss stage",
      icon: "triton-head",

      enemies: [906],
      unlockConditions: [{ level: 30 }, { location: 6 }],
    },
    {
      id: 7,
      order: 8,
      name: "dragon's cave",
      icon: "mountain-cave",
      enemies: [19, 20, 21],
      unlockConditions: [{ kill: 906 }],
    },
    {
      id: 907,
      order: 9,
      name: "dragon's cave: boss stage",
      icon: "dragon-head",

      enemies: [907],
      unlockConditions: [{ level: 35 }, { location: 7 }],
    },
  ],
  //each enemy definition
  enemies: [
    {
      id: 1,
      atk: 1,
      hp: 7,
      name: "bad gnome",
      image: "bad-gnome",
      exp: 5,
      loot: [{ type: "gold", amount: 5 }],
    },
    {
      id: 2,
      atk: 2,
      hp: 9,
      name: "slime",
      image: "transparent-slime",
      exp: 6,
      loot: [{ type: "gold", amount: 8 }],
    },
    {
      id: 3,
      atk: 3,
      hp: 12,
      name: "tree",
      image: "tree-face",
      exp: 7,
      loot: [{ type: "gold", amount: 12 }],
    },

    {
      id: 4,
      atk: 5,
      hp: 20,
      name: "ghost",
      image: "ghost",
      exp: 8,
      loot: [{ type: "gold", amount: 15 }],
    },
    {
      id: 5,
      atk: 6,
      hp: 25,
      name: "spectre",
      image: "spectre",
      exp: 9,
      loot: [{ type: "gold", amount: 18 }],
    },
    {
      id: 6,
      atk: 7,
      hp: 25,
      name: "mummy",
      image: "mummy-head",
      exp: 10,
      loot: [{ type: "gold", amount: 22 }],
    },
    {
      id: 7,
      atk: 9,
      hp: 25,
      name: "gooey demon",
      image: "gooey-daemon",
      exp: 11,
      loot: [{ type: "gold", amount: 22 }],
    },
    {
      id: 8,
      atk: 10,
      hp: 25,
      name: "evil fork",
      image: "evil-fork",
      exp: 12,
      loot: [{ type: "gold", amount: 25 }],
    },
    {
      id: 9,
      atk: 11,
      hp: 25,
      name: "imp",
      image: "imp-laugh",
      exp: 13,
      loot: [{ type: "gold", amount: 30 }],
    },
    {
      id: 10,
      atk: 14,
      hp: 30,
      name: "baby bat",
      image: "swamp-bat",
      exp: 13,
      loot: [{ type: "gold", amount: 40 }],
    },
    {
      id: 11,
      atk: 15,
      hp: 35,
      name: "adult bat",
      image: "imp",
      exp: 13,
      loot: [{ type: "gold", amount: 45 }],
    },
    {
      id: 12,
      atk: 16,
      hp: 45,
      name: "baby vampire",
      image: "swallower",
      exp: 13,
      loot: [{ type: "gold", amount: 50 }],
    },
    {
      id: 13,
      atk: 19,
      hp: 55,
      name: "gold scarab",
      image: "gold-scarab",
      exp: 16,
      loot: [{ type: "gold", amount: 50 }],
    },
    {
      id: 14,
      atk: 21,
      hp: 60,
      name: "cobra",
      image: "cobra",
      exp: 19,
      loot: [{ type: "gold", amount: 50 }],
    },
    {
      id: 15,
      atk: 24,
      hp: 65,
      name: "sphinx",
      image: "egyptian-sphinx",
      exp: 22,
      loot: [{ type: "gold", amount: 50 }],
    },

    {
      id: 16,
      atk: 30,
      hp: 55,
      name: "evil water drop",
      image: "vile-fluid",
      exp: 25,
      loot: [{ type: "gold", amount: 70 }],
    },
    {
      id: 17,
      atk: 34,
      hp: 60,
      name: "very bad fish",
      image: "fish-monster",
      exp: 30,
      loot: [{ type: "gold", amount: 75 }],
    },
    {
      id: 18,
      atk: 40,
      hp: 65,
      name: "sea creature",
      image: "sea-creature",
      exp: 33,
      loot: [{ type: "gold", amount: 80 }],
    },
    {
      id: 19,
      atk: 44,
      hp: 68,
      name: "dragon baby",
      image: "sea-dragon",
      exp: 37,
      loot: [{ type: "gold", amount: 85 }],
    },
    {
      id: 20,
      atk: 48,
      hp: 72,
      name: "dragon teen",
      image: "wyvern",
      exp: 39,
      loot: [{ type: "gold", amount: 90 }],
    },
    {
      id: 21,
      atk: 50,
      hp: 75,
      name: "dragon twins",
      image: "double-dragon",
      exp: 42,
      loot: [{ type: "gold", amount: 93 }],
    },
    {
      id: 901,
      atk: 6,
      hp: 50,
      name: "witch",
      image: "witch-face",
      exp: 20,
      loot: [{ type: "gold", amount: 40 }],
    },
    {
      id: 902,
      atk: 15,
      hp: 100,
      name: "skeletor king",
      image: "skull-slices",
      exp: 30,
      loot: [{ type: "gold", amount: 80 }],
    },
    {
      id: 903,
      atk: 22,
      hp: 150,
      name: "demon king",
      image: "diablo-skull",
      exp: 50,
      loot: [{ type: "gold", amount: 110 }],
    },
    {
      id: 904,
      atk: 30,
      hp: 200,
      name: "vampire",
      image: "vampire-dracula",
      exp: 90,
      loot: [{ type: "gold", amount: 180 }],
    },
    {
      id: 905,
      atk: 40,
      hp: 280,
      name: "anubis",
      image: "anubis",
      exp: 110,
      loot: [{ type: "gold", amount: 220 }],
    },
    {
      id: 906,
      atk: 60,
      hp: 360,
      name: "triton",
      image: "triton-head",
      exp: 140,
      loot: [{ type: "gold", amount: 290 }],
    },
    {
      id: 907,
      atk: 67,
      hp: 420,
      name: "dragon king",
      image: "dragon-head",
      exp: 180,
      loot: [{ type: "gold", amount: 340 }],
    },
  ],
  weapons: weapon,
  armor: [
    { id: 1, name: "shirt", def: 0, price: 0 },
    {
      id: 2,
      name: "leather vest",
      icon: "item/chest/leather-vest",
      def: 2,
      price: 40,
    },
    {
      id: 3,
      name: "leather armor",
      icon: "item/chest/leather-armor",
      def: 3,
      price: 90,
    },
    {
      id: 4,
      name: "armor vest",
      icon: "item/chest/armor-vest",
      def: 6,
      price: 200,
    },
    {
      id: 5,
      name: "breastplate",
      icon: "item/chest/breastplate",
      def: 8,
      price: 300,
    },
    {
      id: 6,
      name: "magic armor",
      icon: "item/chest/lamellar",
      def: 12,
      price: 500,
    },
    {
      id: 7,
      name: "gold armor",
      icon: "item/chest/plastron",
      def: 20,
      price: 600,
    },
  ],
  spells: [
    //healing without buying potions
    {
      id: 1,
      type: "heal",
      icon: "spell/healing",
      name: "heal",
      effect: 20,
      price: 200,
    },
    //enhancing weapon and making it hit harder
    { id: 2, type: "enhance-weapon", name: "enhance", effect: 1.2, price: 250 },
    //weaker hit but steal hp (vampire)
    { id: 3, type: "steal-hp", name: "vampire bite", effect: 0.5, price: 250 },
  ],
  quest: [
    {
      id: 1,
      name: "small bad boys",
      desc:
        "So sleepy... Those little bastards stole my pillow! I just want my revenge! Help me and I will make you a warrior.",
      conditions: [1],
      rewards: [1],
      requiredLevel: 1,
    },
  ],
  achievements: [
    { id: 1, condition: { type: "kill", enemyId: 1, count: 10 } },
    { id: 2, condition: { type: "kill", enemyId: 2, count: 10 } },
    { id: 3, condition: { type: "kill", enemyId: 3, count: 10 } },
    { id: 4, condition: { type: "kill", enemyId: 4, count: 20 } },
    { id: 5, condition: { type: "kill", enemyId: 5, count: 20 } },
    { id: 6, condition: { type: "kill", enemyId: 6, count: 20 } },
    { id: 7, condition: { type: "kill", enemyId: 7, count: 30 } },
    { id: 8, condition: { type: "gold", amount: 100 } },
  ],

  condition: [
    { id: 1, type: "kill", count: 3, enemyId: 1 },
    { id: 1, type: "kill", count: 3, enemyId: 2 },
  ],
  reward: [{ id: 1, type: "weapon", masterId: 2, amount: 1 }],
  miscItems: [{ name: "small-potion", itemType: "heal", heal: 10 }],
};
