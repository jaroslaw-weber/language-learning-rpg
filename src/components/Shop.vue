<template>
  <div class="shop">
    <p class="shop-title">shop</p>
    <div class="show-potions">
      <p class="shop-category">potions</p>
      <!-- todo: dont hardcode-->
      <ShopItem :item="potions[0]" :alwaysShow="true" @buy="buyPotion" />
    </div>
    <div class="shop-weapons">
      <p class="shop-category">weapons</p>
      <div v-if="hasWeapons">
        <div v-for="weapon in weapons" :key="weapon.id" class="shop-item">
          <ShopItem :item="weapon" @buy="buyWeapon" />
        </div>
      </div>
      <p v-else>no new weapons</p>
    </div>
    <div class="shop-armor">
      <p class="shop-category">armors</p>
      <div v-if="hasArmors">
        <div v-for="armor in armors" :key="armor.id" class="shop-item">
          <ShopItem :item="armor" @buy="buyArmor" />
        </div>
      </div>
      <p v-else>no new armors</p>
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
    weapons: function () {
      return this.getShop.weapons;
    },
    armors: function () {
      return this.getShop.armors;
    },
    potions: function () {
      return [{ price: 10, name: "small potion", icon: "potion-ball" }];
    },
    hasWeapons: function () {
      return this.weapons.length > 0;
    },
    hasArmors: function () {
      return this.armors.length > 0;
    },
    getShop: function () {
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
.shop {
}
</style>
