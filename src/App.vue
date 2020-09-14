<template>
  <div id="app">
    <div class="container">
      <div v-if="$store.state.cards">
        <div v-if="currentScene =='battle' || currentScene == 'shop'">
          <div class="container">
            <b-progress
              class="player-hp"
              type="is-success"
              size="is-large"
              :max="player.maxHp"
              :value="player.hp"
              :show-value="true"
            >player hp: {{ player.hp }}/{{ player.maxHp }}</b-progress>
          </div>
        </div>
        <Menu />

        <Battle v-if="currentScene == 'battle'" />
        <Shop v-if="currentScene == 'shop'" />
        <Inventory v-if="currentScene == 'inventory'" />
        <Locations v-if="currentScene == 'locations'" />
        <Journal v-if="currentScene == 'journal'" />
        <Town v-if="currentScene == 'town'" />
        <Achievements v-if="currentScene == 'achievements'" />

        <DebugPanel v-if="$store.state.currentScene == 'debug'" />
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
import Journal from "./components/Journal";
import Town from "./components/Town";

import Achievements from "./components/Achievements";
export default {
  name: "App",
  components: {
    Achievements,
    Battle,
    Shop,
    Inventory,
    DebugPanel,
    Locations,
    Menu,
    SelectDeck,
    Journal,
    Town,
  },
  methods: {},
  computed: {
    player: function () {
      return this.$store.state.player;
    },
    currentScene: function () {
      return this.$store.state.currentScene;
    },
    notifications: function () {
      return this.$store.state.notifications;
    },
    newLocation: function () {
      return this.notifications.newLocation;
    },
  },
  mounted: function () {},
  watch: {
    newLocation: function () {
      if (!this.newLocation) return; // show notification if there is new location

      console.log("new location snackbar!");
      this.$buefy.snackbar.open({
        message: "new location unlocked!",
        position: "is-bottom",
        actionText: "ok",
        indefinite: true,
        onAction: () => {
          this.$store.state.notifications.newLocation = false;
        },
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
.player-hp {
  width: 90%;

  margin: 1rem auto 1rem auto;
}
.footer {
  margin-top: 1rem;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Quicksand", sans-serif;
  margin-bottom: 7rem;
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

.progress {
  border-radius: 5px !important;
}

@media screen and (min-width: 800px) {
  .full-width {
    width: 650px;
  }
  .half-width {
    width: 300px;
  }
}

@media screen and (max-width: 800px) {
  .full-width {
    width: 300px;
  }
  .half-width {
    width: 300px;
  }
}
</style>
