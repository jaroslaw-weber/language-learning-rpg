<template>
  <div class="debug-panel full-width">
    <div class="container">
      <button v-if="isDevelopmentMode" class="button debug-button" @click="addGold(20)">add 20 gold</button>
      <button v-if="isDevelopmentMode" class="button debug-button" @click="levelUp()">level up</button>

      <button class="button debug-button" @click="reset()">reset game</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Question",
  props: {},
  data: function () {
    return {
      isDevelopmentMode: false,
    };
  },
  mounted: function () {
    this.isDevelopmentMode = window.location.href.includes("localhost"); //if true, show funny buttons in debug panel
  },
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
.debug-button {
  margin: 1rem;
}
.debug-panel {
}
</style>
