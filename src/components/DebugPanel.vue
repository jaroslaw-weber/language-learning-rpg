<template>
  <div class="debug-panel">
    <button class="button" @click="addGold(20)">add 20 gold</button>
    <button class="button" @click="levelUp()">level up</button>

    <button class="button" @click="reset()">reset game</button>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {},
  computed: {},
  methods: {
    addGold(amount) {
      this.$store.commit("debugAddGold", amount);
    },
    levelUp() {
      this.$store.commit("debugLevelUp");
    },
    reset() {
      this.$store.commit("reset");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.debug-panel {
  text-align: right;
}
</style>
