<template>
  <div id="app">
    <div class="container">
      <div v-if="$store.state.cards">
        <Menu />
        <Battle v-if="currentScene=='battle'" />
        <Shop v-if="currentScene == 'shop'" />
        <Inventory v-if="currentScene == 'inventory'" />
        <Locations v-if="currentScene=='locations'" />

        <hr />
        <div class="debug-wrapper">
          <DebugPanel v-if="$store.state.isDebug" />
        </div>
        <div class="debug-wrapper">
          <b-checkbox v-model="$store.state.isDebug">show debug panel</b-checkbox>
        </div>
      </div>
      <div v-else>
        <SelectDeck />
      </div>
    </div>
  </div>
</template>

<script>
import Battle from "./components/Battle";
import Shop from "./components/Shop";
import Inventory from "./components/Inventory";
import DebugPanel from "./components/DebugPanel";
import Locations from "./components/Locations";
import Menu from "./components/Menu";
import SelectDeck from "./components/SelectDeck";

export default {
  name: "App",
  components: {
    Battle,
    Shop,
    Inventory,
    DebugPanel,
    Locations,
    Menu,
    SelectDeck,
  },
  methods: {},
  computed: {
    currentScene: function () {
      return this.$store.state.currentScene;
    },
  },
  mounted: function () {},
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
.wrapper {
  width: 600px;
}
.navigation-button {
  margin: 1rem;
}
.debug-wrapper {
  margin: 1rem;
  text-align: right;
}

.full-width {
  width: 650px;
}
.half-width {
  width: 300px;
}
</style>
