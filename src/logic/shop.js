export function buyWeapon(state, weaponId) {
  let weapon = state.master.weapons.find((x) => x.id == weaponId);
  state.player.equipped.hand = weapon;
  state.player.gold -= weapon.price;
}

export function buySpell(state, spellId) {
  let spell = state.master.spells.find((x) => x.id == spellId);
  state.player.gold -= spell.price;
  state.player.spells.push(spellId);
}

export function buyArmor(state, armorId) {
  let armor = state.master.armor.find((x) => x.id == armorId);
  state.player.equipped.chest = armor;
  state.player.gold -= armor.price;
}
export function buyPotion(state) {
  let cost = 10; //todo add different potions
  let effect = 10; // todo add different potions
  state.player.hp += effect;
  if (state.player.hp >= state.player.maxHp) {
    state.player.hp = state.player.maxHp;
  }
  state.player.gold -= cost;
}
