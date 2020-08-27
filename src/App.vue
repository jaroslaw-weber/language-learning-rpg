<template>
  <div id="app">
    <TopInfo />
    <div class="columns">
      <div class="column is-one-quarter">
        <Menu />
      </div>
      <div class="column">
        <Battle v-if="currentScene=='battle'" />
        <Shop v-if="currentScene == 'shop'" />
        <Inventory v-if="currentScene == 'inventory'" />
        <Locations v-if="currentScene=='locations'" />
      </div>
    </div>
    <hr />
    <div class="debug-wrapper">
      <DebugPanel v-if="$store.state.isDebug" />
    </div>
    <div class="debug-wrapper">
      <b-checkbox v-model="$store.state.isDebug">show debug panel</b-checkbox>
    </div>
  </div>
</template>

<script>
import TopInfo from "./components/TopInfo";
import Battle from "./components/Battle";
import Shop from "./components/Shop";
import Inventory from "./components/Inventory";
import DebugPanel from "./components/DebugPanel";
import Locations from "./components/Locations";
import Menu from "./components/Menu";

export default {
  name: "App",
  components: {
    TopInfo,
    Battle,
    Shop,
    Inventory,
    DebugPanel,
    Locations,
    Menu,
  },
  computed: {
    currentScene: function () {
      return this.$store.state.currentScene;
    },
  },
  mounted: function () {
    this.$store.commit("start");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Quicksand", sans-serif;
}
.navigation-button {
  margin: 1rem;
}
.debug-wrapper {
  margin: 1rem;
  text-align: right;
}
</style>
