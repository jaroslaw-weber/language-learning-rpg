<template>
  <div class="shop">
    <p class="shop-title">shop</p>

    <div>
      <p class="shop-category">potions</p>
      <!-- todo: dont hardcode-->
      <ShopItem :item="potions[0]" :alwaysShow="true" @buy="buyPotion" />
    </div>

    <div>
      <p class="shop-category">weapons</p>
      <div v-if="hasWeapons">
        <div v-for="weapon in weapons" :key="weapon.id" class="shop-item">
          <ShopItem :item="weapon" @buy="buyWeapon" />
        </div>
      </div>
      <p v-else>no new weapons</p>
    </div>

    <div>
      <p class="shop-category">armors</p>
      <div v-if="hasArmors">
        <div v-for="armor in armors" :key="armor.id" class="shop-item">
          <ShopItem :item="armor" @buy="buyArmor" />
        </div>
      </div>
      <p v-else>no new armors</p>
    </div>

    <div>
      <p class="shop-category">spells</p>
      <div class="shop-item" v-if="hasSpells">
        <ShopItem
          v-if="hasSpells"
          :item="$store.state.master.spells[0]"
          @buy="buySpell"
        />
      </div>
      <p v-else>no new spells</p>
    </div>
  </div>
</template>

<script>
import ShopItem from "./ShopItem";

export default {
  name: "Shop",
  props: {},

  components: { ShopItem },
  computed: {
    weapons: function() {
      return this.getShop.weapons;
    },
    armors: function() {
      return this.getShop.armors;
    },
    potions: function() {
      return [{ price: 10, name: "small potion", icon: "item/potion-ball" }];
    },
    hasWeapons: function() {
      return this.weapons.length > 0;
    },
    hasArmors: function() {
      return this.armors.length > 0;
    },
    hasSpells: function() {
      return this.$store.state.player.spells.length == 0; //todo: temporary because only one spell now
    },
    getShop: function() {
      return this.$store.getters.getShop;
    },
  },
  methods: {
    buyWeapon(weaponId) {
      this.$store.commit("buyWeapon", weaponId);
    },
    buyArmor(armorId) {
      this.$store.commit("buyArmor", armorId);
    },
    buySpell(spellId) {
      this.$store.commit("buySpell", spellId);
    },
    buyPotion(potionId) {
      console.log(potionId);
      this.$store.commit("buyPotion");
    },
  },
};
</script>

<style scoped>
.shop-title {
  font-size: 2rem;
}
.shop-category {
  font-size: 1.5rem;
}
</style>
