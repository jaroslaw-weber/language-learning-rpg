<template>
  <button
    v-if="$store.state.currentEnemy"
    class="button half-width action-button"
    @click="useSpell(spell.id)"
    :disabled="!canAttack"
  >
    <img
      class="action-icon"
      :src="`${$store.state.publicPath}icons/${spell.icon}.svg`"
    />
    {{ spell.name }}
  </button>
</template>
<script>
export default {
  props: { spell: Object },
  methods: {
    useSpell(spellId) {
      this.$store.commit("useSpell", spellId);
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
