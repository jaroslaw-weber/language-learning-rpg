<template>
  <div class="shop-item">
    <button
      class="button half-width shop-button"
      @click="$emit('buy', item.id)"
      :disabled="!canBuy"
    >
      <img
        v-if="item.icon"
        class="item-icon"
        :src="`${$store.state.publicPath}icons/${item.icon}.svg`"
      />
      <p>
        {{ item.name }}
        <br v-if="itemParameters" />
        {{ itemParameters }}
        <br />
        {{ item.price }} gold
      </p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Shop",
  props: { item: Object, alwaysShow: Boolean },
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
.item-icon {
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
  border-radius: 0.2rem;
}
.shop-item {
  margin: 0.5rem;
}
.shop-button {
  height: 6rem;
}
</style>
