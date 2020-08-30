<template>
  <div class="shop">
    <p class="shop-title">shop</p>
    <div class="shop-weapons">
      <p class="shop-category">weapons</p>
      <div v-if="hasWeapons">
        <div v-for="weapon in weapons" :key="weapon.id" class="shop-item">
          <button
            class="button half-width"
            @click="buyWeapon(weapon.id)"
            :disabled="weapon.price>$store.state.player.gold"
          >{{weapon.name}}: {{weapon.price}} gold</button>
        </div>
      </div>
      <p v-else>no new weapons</p>
    </div>
    <div class="shop-armor">
      <p class="shop-category">armors</p>
      <div v-if="hasArmors">
        <div v-for="armor in armors" :key="armor.id" class="shop-item">
          <button
            class="button half-width"
            @click="buyArmor(armor.id)"
            :disabled="armor.price>$store.state.player.gold"
          >{{armor.name}}: {{armor.price}} gold</button>
        </div>
      </div>
      <p v-else>no new armors</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  props: {},
  computed: {
    weapons: function () {
      let currentWeapon = this.$store.state.player.equipped.hand;
      return this.$store.state.master.weapons.filter(
        (x) => x.id != 1 && x.atk > currentWeapon.atk
      );
    },
    armors: function () {
      let current = this.$store.state.player.equipped.chest;
      return this.$store.state.master.armor.filter((x) => x.def > current.def);
    },
    hasWeapons: function () {
      return this.weapons.length > 0;
    },
    hasArmors: function () {
      return this.armors.length > 0;
    },
  },
  methods: {
    buyWeapon(weaponId) {
      this.$store.commit("buyWeapon", weaponId);
    },
    buyArmor(armorId) {
      this.$store.commit("buyArmor", armorId);
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
.shop-item {
  margin: 0.5rem;
}
.shop {
}
</style>
