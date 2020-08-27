<template>
  <div class="shop">
    <p class="shop-title">shop</p>
    <div>
      <p class="shop-category">weapons</p>
      <div v-if="hasWeapons">
        <div v-for="weapon in weapons" :key="weapon.id" class="shop-item">
          <button
            class="button"
            @click="buyWeapon(weapon.id)"
            :disabled="weapon.price>$store.state.player.gold"
          >{{weapon.name}}: {{weapon.price}} gold</button>
        </div>
      </div>
      <p v-else>no new weapons</p>
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
    hasWeapons: function () {
      return this.weapons.length > 0;
    },
  },
  methods: {
    buyWeapon(weaponId) {
      this.$store.commit("buyWeapon", weaponId);
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
  width: 800px;
}
</style>
