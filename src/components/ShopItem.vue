<template>
  <div class="shop-item">
    <button
      v-if="canBuy"
      class="button half-width shop-button"
      @click="$emit('buy', item.id)"
    >
      {{ item.name }} <br />
      {{ itemParameters }} <br />
      {{ item.price }} gold
    </button>

    <button v-else class="button half-width" disabled>
      ? ({{ item.price }} gold)
    </button>
  </div>
</template>

<script>
export default {
  name: "Shop",
  props: { item: Object },
  computed: {
    canBuy: function() {
      return this.item.price <= this.$store.state.player.gold;
    },
    itemParameters: function() {
      if (this.item.atk != undefined) {
        return `attack: ${this.item.atk}`;
      }
      if (this.item.def != undefined) {
        return `defense: ${this.item.def}`;
      }
      return "";
    },
  },
  methods: {},
};
</script>

<style scoped>
.shop-item {
  margin: 0.5rem;
}
.shop-button {
  height: 6rem;
}
</style>
