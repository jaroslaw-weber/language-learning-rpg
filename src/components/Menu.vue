<template>
  <b-menu class="game-menu">
    <b-menu-list>
      <b-menu-item
        :active="$store.state.currentScene=='battle'"
        icon="information-outline"
        label="battle"
        @click="$store.state.currentScene='battle'"
      ></b-menu-item>
      <b-menu-item
        :active="$store.state.currentScene=='shop'"
        icon="information-outline"
        label="shop"
        @click="$store.state.currentScene='shop'"
      ></b-menu-item>
      <b-menu-item
        :active="$store.state.currentScene=='inventory'"
        icon="information-outline"
        label="inventory"
        @click="$store.state.currentScene='inventory'"
      ></b-menu-item>
      <b-menu-item
        :active="$store.state.currentScene=='locations'"
        icon="information-outline"
        label="locations"
        @click="$store.state.currentScene='locations'"
      ></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
};
</script>
<style scoped>
.game-menu {
  text-align: left;
}
</style>
