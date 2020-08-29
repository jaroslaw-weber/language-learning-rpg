<template>
  <b-navbar>
    <template slot="brand"></template>
    <template slot="start"></template>

    <template slot="end">
      <b-navbar-item
        :active="$store.state.currentScene=='battle'"
        @click="$store.state.currentScene='battle'"
      >battle</b-navbar-item>
      <b-navbar-item
        :active="$store.state.currentScene=='shop'"
        @click="$store.state.currentScene='shop'"
      >shop</b-navbar-item>
      <b-navbar-item
        :active="$store.state.currentScene=='inventory'"
        @click="$store.state.currentScene='inventory'"
      >inventory</b-navbar-item>
      <b-navbar-item
        :active="$store.state.currentScene=='locations'"
        @click="$store.state.currentScene='locations'"
      >locations</b-navbar-item>
    </template>
  </b-navbar>
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
