//define parameters here
export default {
  //exp table, left is exp needed for the level on the right
  expTable: [
    [10, 2],
    [20, 3],
    [40, 4],
    [40, 5],
    [65, 6],
    [100, 7],
    [130, 8],
    [160, 9],
    [210, 10],
    [280, 11],
    [400, 12],
  ],
  locations: [
    { id: 1, name: "forest", requiredLevel: 0, enemies: [1, 2, 3] },
    { id: 2, name: "cementary", requiredLevel: 5, enemies: [4, 5, 6] },
    { id: 3, name: "hell", requiredLevel: 10, enemies: [7, 8, 9] },
  ],
  //each enemy definition
  enemies: [
    {
      id: 1,
      atk: 5,
      hp: 7,
      name: "bad gnome",
      image: "bad-gnome",
      exp: 5,
      drop: {
        gold: 5,
      },
    },
    {
      id: 2,
      atk: 6,
      hp: 9,
      name: "slime",
      image: "transparent-slime",
      exp: 5,
      drop: {
        gold: 8,
      },
    },
    {
      id: 3,
      atk: 7,
      hp: 12,
      name: "tree",
      image: "tree-face",
      exp: 5,
      drop: {
        gold: 10,
      },
    },

    {
      id: 4,
      atk: 9,
      hp: 20,
      name: "ghost",
      image: "ghost",
      exp: 5,
      drop: {
        gold: 15,
      },
    },
    {
      id: 5,
      atk: 12,
      hp: 25,
      name: "spectre",
      image: "spectre",
      exp: 5,
      drop: {
        gold: 18,
      },
    },
    {
      id: 6,
      atk: 12,
      hp: 25,
      name: "mummy",
      image: "mummy-head",
      exp: 5,
      drop: {
        gold: 18,
      },
    },
    {
      id: 7,
      atk: 12,
      hp: 25,
      name: "gooey demon",
      image: "gooey-daemon",
      exp: 5,
      drop: {
        gold: 18,
      },
    },
    {
      id: 8,
      atk: 12,
      hp: 25,
      name: "evil fork",
      image: "evil-fork",
      exp: 5,
      drop: {
        gold: 18,
      },
    },
    {
      id: 9,
      atk: 12,
      hp: 25,
      name: "imp",
      image: "imp-laugh",
      exp: 5,
      drop: {
        gold: 18,
      },
    },
    {
      id: 999,
      atk: 12,
      hp: 25,
      name: "evil book",
      image: "evil-book",
      exp: 5,
      drop: {
        gold: 18,
      },
    },
  ],
  weapons: [
    { id: 1, name: "fist", atk: 4, price: 0 },
    { id: 2, name: "dagger", atk: 10, price: 20 },
    { id: 3, name: "sword", atk: 16, price: 40 },
    { id: 4, name: "big sword", atk: 20, price: 100 },
    { id: 5, name: "sword with teeth", atk: 25, price: 150 },
    { id: 6, name: "huge axe", atk: 33, price: 220 },
    { id: 7, name: "katana", atk: 40, price: 300 },
  ],
  miscItems: [{ name: "small-potion", itemType: "heal", heal: 10 }],
};
