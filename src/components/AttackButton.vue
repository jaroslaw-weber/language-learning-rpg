<template>
  <button
    v-if="this.$store.state.currentEnemy"
    class="button half-width action-button"
    @click="onAttackButton()"
    :disabled="!canAttack"
  >
    <img
      class="action-icon"
      :src="
        `${$store.state.publicPath}icons/${$store.state.player.equipped.hand.icon}.svg`
      "
    />
    attack
  </button>
</template>
<script>
export default {
  methods: {
    onAttackButton() {
      this.$store.commit("onAttackButton");
    },
  },
  computed: {
    canAttack: function() {
      return !this.$store.state.blockClick;
    },
  },
};
</script>
<style>
.action-button {
  height: 3rem;
  margin-top: 0.3rem;
}
.action-icon {
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
  border-radius: 0.2rem;
}
</style>
